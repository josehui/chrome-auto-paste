let textField = 'input.frm-battle-key';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ textField });
  console.log('Set default input field for GBF:', textField)
});
