console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = 'selectedText';
// window.heading = 'Your heading';

function receiver(request, sender, sendResponse) {
	console.log('selected text', request);
	word = request.text;
	// heading = request.heading;
}
