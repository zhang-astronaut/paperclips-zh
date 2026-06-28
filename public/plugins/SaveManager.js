/**
 * SaveManager - 存档导入导出插件
 * 将所有存档槽位和声望数据打包为JSON文件，支持导入恢复
 */
(function () {
  var SAVE_KEYS = [
    'saveGame', 'saveGame1', 'saveGame2',
    'saveProjectsUses', 'saveProjectsUses1', 'saveProjectsUses2',
    'saveProjectsFlags', 'saveProjectsFlags1', 'saveProjectsFlags2',
    'saveProjectsActive', 'saveProjectsActive1', 'saveProjectsActive2',
    'saveStratsActive', 'saveStratsActive1', 'saveStratsActive2',
    'savePrestige'
  ];

  function collectSaveData() {
    var data = {};
    for (var i = 0; i < SAVE_KEYS.length; i++) {
      var key = SAVE_KEYS[i];
      var value = localStorage.getItem(key);
      if (value !== null) {
        data[key] = value;
      }
    }
    return data;
  }

  function exportSave(slot) {
    // 先触发对应槽位的保存
    if (typeof slot === 'number') {
      save(slot);
    } else {
      save(0);
      save(1);
      save(2);
    }

    var data = collectSaveData();
    var count = Object.keys(data).length;

    if (count === 0) {
      displayMessage('没有找到可导出的存档数据');
      return;
    }

    var exportObj = {
      game: 'Universal Paperclips',
      version: 'zh-1.0',
      date: new Date().toISOString(),
      slots: data
    };

    var json = JSON.stringify(exportObj, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'paperclips_save_' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    displayMessage('存档已导出 (' + count + ' 条数据)');
  }

  function importSave() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function (event) {
        try {
          var importObj = JSON.parse(event.target.result);

          if (!importObj.slots || typeof importObj.slots !== 'object') {
            displayMessage('无效的存档文件格式');
            return;
          }

          var keys = Object.keys(importObj.slots);
          for (var i = 0; i < keys.length; i++) {
            localStorage.setItem(keys[i], importObj.slots[keys[i]]);
          }

          displayMessage('存档已导入 (' + keys.length + ' 条数据)，正在重新加载...');
          setTimeout(function () { location.reload(); }, 1000);
        } catch (err) {
          displayMessage('存档文件解析失败: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  Paperclips.PluginManager.register({
    id: 'SaveManager',

    panels: {
      saveManagerPanel: {
        column: ViewManager.Columns.EXTRA,
        name: '存档管理',
        template: `
          <p style="margin-bottom:8px"><b>导出存档</b></p>
          <button id="exportAllBtn" class="button2" onclick="exportAllSaves()" style="width:100%;margin-bottom:4px">导出全部存档</button>
          <button id="exportSlot0Btn" class="button2" onclick="exportSlot(0)" style="width:100%;margin-bottom:4px">导出存档槽位 1</button>
          <button id="exportSlot1Btn" class="button2" onclick="exportSlot(1)" style="width:100%;margin-bottom:4px">导出存档槽位 2</button>
          <button id="exportSlot2Btn" class="button2" onclick="exportSlot(2)" style="width:100%;margin-bottom:12px">导出存档槽位 3</button>
          <hr style="border-color:#555">
          <p style="margin-bottom:8px"><b>导入存档</b></p>
          <button id="importSaveBtn" class="button2" onclick="importSaveFromFile()" style="width:100%">选择存档文件导入</button>
          <p style="font-size:11px;color:#888;margin-top:8px">导入将覆盖当前所有存档槽位</p>
        `
      }
    }
  });

  // 暴露到全局作用域供按钮调用
  window.exportAllSaves = function () { exportSave('all'); };
  window.exportSlot = function (n) { exportSave(n); };
  window.importSaveFromFile = function () { importSave(); };
})();
