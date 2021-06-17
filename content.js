// Content Script is the code that executes after the web page is loaded

// window.onload = () => {
// 	console.log('hi sexy');
// 	var aButton = document.createElement('button');
// 	console.log(document);
// 	aButton.innerHTML = 'click me';
// 	aButton.style.background = 'red';
// 	aButton.style.height = '100px';
// 	aButton.style.width = '100px';
// 	aButton.style.position = 'fixed';
// 	aButton.style.top = '0';
// 	aButton.style.right = '0';
// 	aButton.style.zIndex = '1000000000000000';
// 	document.body.appendChild(aButton);
// 	console.log(aButton);
// };

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
