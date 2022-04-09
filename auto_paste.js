
let currentTextField = ""
let text = "hihi"

function insertTextAtCursor() {
  console.log("inserting text...")
  var el = document.querySelector(currentTextField);
  if (el) {
      el.value = text
  } 
}

function pasteFromClipboard() {
  const el = document.querySelector(currentTextField);
  if (el && !el.value)
  document.execCommand('paste')
}
function addInputPasteEvent() {
  let el = document.querySelector(currentTextField);
  if (el) {
    el.addEventListener("click", pasteFromClipboard)
  }
}

window.onload = function() {
  console.log('plugin started')
  chrome.storage.sync.get("textField", (data) => {
    currentTextField = data.textField;
    console.log(currentTextField)
    let obs = new MutationObserver(addInputPasteEvent)
    let options = {
      'childList': true,
      'attributes':true,
      'characterData': true,
    };
    obs.observe(document.body, options)
    obs.observe(document.head, options)
    
  })
  
};