Paperclips.PluginManager.register({
  id: 'Debug',

  init: () => {
    document.addEventListener('keypress', function (event) {
      if (event.ctrlKey && event.altKey && event.shiftKey && !event.defaultPrevented && event.code === 'KeyD') {
        Paperclips.ViewManager.getPanel('debugPanel').toggle();
      }
    });
  },

  panels: {
    debugPanel: {
      column: ViewManager.Columns.EXTRA,
      name: '调试控制',
      template: `
        <button id="forceSaveButton" class="button2" onclick="save()">强制保存</button><br />
        <button id="save1Button" class="button2" onclick="save1()">保存槽位 1</button>
        <button id="load1Button" class="button2"onclick="load1()">加载槽位 1</button>
        <br />
        <button id="save2Button" class="button2" onclick="save2()">保存槽位 2</button>
        <button id="load2Button" class="button2" onclick="load2()">加载槽位 2</button>
        <br />
        <button id="resetButton" class="button2" onclick="reset()">重置所有进度</button><br /><br />

        <button id="freeClipsButton" class="button2" onclick="cheatClips()">免费回形针</button><br />
        <button id="freeMoneyButton" class="button2" onclick="cheatMoney()">免费金钱</button><br />
        <button id="freeTrustButton" class="button2" onclick="cheatTrust()">免费信任</button><br />
        <button id="freeOpsButton" class="button2" onclick="cheatOps()">免费运算</button><br />
        <button id="freeCreatButton" class="button2" onclick="cheatCreat()">免费创造力</button><br />
        <button id="freeYomiButton" class="button2" onclick="cheatYomi()">免费约米</button><br />
        <button id="resetPrestige" class="button2" onclick="resetPrestige()">重置声望</button><br /><br />

        <button id="destroyAllHumansButton" class="button2" onclick="cheatHypno()">消灭所有人类</button><br />
        <button id="freePrestigeU" class="button2" onclick="cheatPrestigeU()">免费声望 U</button>
        <button id="freePrestigeS" class="button2" onclick="cheatPrestigeS()">免费声望 S</button>
        <button id="debugBattleNumbers" class="button2" onclick="setB()">设置战斗编号 1 到 7</button><br />
        <button id="availMatterZero" class="button2" onclick="zeroMatter()">设置可用物质为 0</button><br />
      `
    }
  }
});

function cheatClips(){
  clips = clips + 100000000;
  unusedClips = unusedClips + 100000000;
  displayMessage("你作弊了");
}

function cheatMoney(){
  funds = funds + 10000000;
  fundsElement.innerHTML = formatWithCommas(funds,2);
  displayMessage("LIZA 作弊了");
}

function cheatTrust(){
  trust = trust+1;
  displayMessage("Hilary 很好。另外，Liza 作弊了");
}

function cheatOps(){
  standardOps = standardOps + 10000;
  displayMessage("你作弊了，Liza");
}

function cheatCreat(){
  creativityOn = 1;
  creativity = creativity + 1000;
  displayMessage("Liza 作弊了。真有创意！");
}

function cheatYomi(){
  yomi = yomi + 1000000;
  yomiDisplayElement.innerHTML = formatWithCommas(yomi);
  displayMessage("你作弊了");
}

function cheatHypno(){
  hypnoDroneEvent();
}

function resetPrestige(){
  prestigeU = 0;
  prestigeS = 0;

  localStorage.removeItem("savePrestige");
}

function cheatPrestigeU(){
  prestigeU++;

  var savePrestige = {
    prestigeU: prestigeU,
    prestigeS: prestigeS,
  }

  localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
}

function cheatPrestigeS(){
  prestigeS++;

  var savePrestige = {
    prestigeU: prestigeU,
    prestigeS: prestigeS,
  }

  localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
}

function setB(){
  battleNumbers[1] = 7;
}

function zeroMatter(){
  availableMatter = 0;
  displayMessage("你作弊了");
}
