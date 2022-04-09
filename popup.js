// Show current target input field
let currentTarget = document.getElementById("currentTarget");

chrome.storage.sync.get("textField", ({ textField }) => {
  currentTarget.innerHTML = textField
});
