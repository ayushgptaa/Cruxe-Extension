// Content Script is the code that executes after the web page is loaded
let para = document.getElementsByTagName('p');
let heading = document.getElementsByTagName('h1');
// console.log(para);
let selectedHeading = heading[0].innerText;

console.log(heading[0].innerText);
let selectedText = '';
for (var i = 1; i < para.length - 1; i++) {
	selectedText += para[i].innerText;
}

let mes = {
	text: selectedText,
	heading: selectedHeading,
};
chrome.runtime.sendMessage(mes);

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	selectedText = window.getSelection().toString().trim();
	console.log(selectedText);

	if (selectedText.length > 0) {
		let message = {
			text: selectedText,
			heading: selectedHeading,
		};
		chrome.runtime.sendMessage(message);
	}
}
