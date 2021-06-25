var para = document.getElementsByTagName('p');
var heading = document.getElementsByTagName('h1');
var selectedHeading = heading[0].innerText;

var selectedText = '';
for (var i = 1; i < para.length - 1; i++) {
	selectedText += para[i].innerText;
}
var mes = {
	text: selectedText,
	heading: selectedHeading,
};
chrome.runtime.sendMessage(mes);

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	selectedText = window.getSelection().toString().trim();
	if (selectedText.length > 0 && selectedHeading) {
		var message = {
			text: selectedText,
			heading: selectedHeading,
		};
		chrome.runtime.sendMessage(message);
	}
}
