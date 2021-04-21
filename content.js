let para = document.getElementsByTagName('p');
let selectedText = '';
for (var i = 1; i < para.length - 1; i++) {
	selectedText += para[i].innerText;
}

let mes = {
	text: selectedText,
};
chrome.runtime.sendMessage(mes);

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
	selectedText = window.getSelection().toString().trim();
	console.log(selectedText);

	if (selectedText.length > 0) {
		let message = {
			text: selectedText,
		};
		chrome.runtime.sendMessage(message);
	}
}
