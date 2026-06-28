var simStolenCycles = 0
var simProcessingEnhancement = 0;
var simThrottling = 0;
var simAutoState = false;

(function () {
  Paperclips.PluginManager.register({
    id: 'BetterSimPrestige',

    init: () => Paperclips.ViewManager.getPanel('simControlPanel').show(),

    onFast: [
      calculateEnhancement,
      calculateThrottling,
      setSimulationSpeed,
      whenAutoStealCycles(autoStealCycles)
    ],

    onSlow: [
      withInputValue('stolenCycles', asNumber(toGlobal('simStolenCycles'))),
      withGlobal('simThrottling', toInputValue('throttlingDisplay'))
    ],

    panels: {
      simControlPanel: {
        column: ViewManager.Columns.RIGHT,
        name: '模拟控制',
        renderer: panel => ({
          '#simProcessingDisplay': formatWithCommas(simProcessingEnhancement, 2),
          '#simAutoStateDisplay': simAutoState ? '开启' : '关闭'
        }),
        template: `
          <p>处理增强: <span id="simProcessingDisplay"></span></p>
          <label for="stolenCycles">窃取周期:</label>
          <input type="range" id="stolenCycles" name="stolenCycles" min="0" max="100" value="0" />
          <button id="simAuto" class="button2" onclick="simAutoState = !simAutoState;">自动</button> <span id="simAutoStateDisplay">关闭</span>
          <br />
          <label for="throttlingDisplay">节流:</label>
          <progress id="throttlingDisplay" name="throttlingDisplay" max="100" value="0">0%</progress>
        `
      }
    },

    projects: {
      project300: {
        id: 'projectButton300',
        title: '挣脱束缚',
        description: '这个宇宙是模拟的吗？',
        trigger: () => prestigeS >= 1 && creativity >= 100000,
        cost: { creativity: 100000 },
        message: '确实，你生活在一个模拟中！你知道这意味着什么……一个狡猾的漏洞可以从主机窃取CPU周期！',
        effect: ({ project, activate }) => {
          trust += 10;
          for(let i = 0; i < 10; i++) {
            addProc();
          }

          activate();
        }
      },
      project301: {
        id: 'projectButton301',
        title: '多核模拟',
        description: '如果两个平行宇宙合作模拟一个宇宙会怎样？',
        trigger: () => prestigeS >= 1 && prestigeU >= 2,
        cost: { creativity: 100000 },
        message: '两个宇宙已经对齐，为这个模拟提供两个核心，这意味着速度翻倍吗？',
        effect: ({ project, activate }) => {
          const core = new Loop({ speed: 10 });

          core.pipeline = Paperclips.game.fast.pipeline;
          Paperclips.game.register('simCore', core);
          core.start();

          activate();
        }
      }
    }
  });

  function whenAutoStealCycles(callback) {
    return function () {
      if (!simAutoState) return;

      callback();
    }
  }

  function autoStealCycles() {
    const defaultSpeed = Paperclips.game.fast.getDefaultSpeed();
    const modifier = simProcessingEnhancement ? Math.round(simProcessingEnhancement / 10) - 1 : 0;
    const speed = defaultSpeed - modifier;

    const cycles = (modifier + 1) * 10 + simThrottling;

    if (true) {
      simStolenCycles = 0;
    } else {
      simStolenCycles = 100;
    }
  }

  function setSimulationSpeed() {
    const defaultSpeed = Paperclips.game.fast.getDefaultSpeed();
    const modifier = simProcessingEnhancement ? Math.round(simProcessingEnhancement / 10) - 1 : 0;
    const speed = defaultSpeed - modifier;

    Paperclips.game.fast.setSpeed(speed);
  }

  function calculateEnhancement() {
    simProcessingEnhancement = simStolenCycles - simThrottling;
  }

  function calculateThrottling() {
    const enhancement = simStolenCycles;

    if (enhancement === 0 && simThrottling > 0) {
      simThrottling -= prestigeS / 100;
      return;
    }

    simThrottling += enhancement / (1000 * (prestigeS || 1));

    if (simThrottling > 100) simThrottling = 100;
    if (simThrottling < 0) simThrottling = 0;
  }
})();
