chrome.runtime.onMessage.addListener(receiver);
window.word = "Please Reload the page";
window.heading = null;

function receiver(request, sender, sendResponse) {
  word = request.text;
  heading = request.heading;
}

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.executeScript(activeInfo.tabId, { file: "content.js" });
});
