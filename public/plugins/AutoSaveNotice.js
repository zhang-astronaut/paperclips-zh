/**
 * NOTE: This plugin must be loaded BEFORE the main.js payload
 */
(function () {
  let originalSave = window.save;

  window.save = function save(slot = 0) {
    displayMessage('自动保存中...');
    originalSave(slot);
  }

  window.addEventListener('load', () => {
    Paperclips.PluginManager.register({
      id: 'AutoSaveNotice'
    });
  })
})();
