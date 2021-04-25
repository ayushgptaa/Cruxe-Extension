// Content Script is the code that executes after the web page is loaded
let para = document.getElementsByTagName('p');
console.log(para);
// let heading = document.getElementByTagname('h1');
let selectedText = '';
for (var i = 1; i < para.length - 1; i++) {
	selectedText += para[i].innerText;
}

let mes = {
	text: selectedText,
	// heading: heading[0].innerText,
};
chrome.runtime.sendMessage(mes);

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	selectedText = window.getSelection().toString().trim();
	console.log(selectedText);

	if (selectedText.length > 0) {
		let message = {
			text: selectedText,
			// heading: heading[0].innerText,
		};
		chrome.runtime.sendMessage(message);
	}
}
