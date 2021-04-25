console.log('background running');
chrome.runtime.onMessage.addListener(receiver);
window.word = 'Reload the page';
window.heading = 'Heading';

function receiver(request, sender, sendResponse) {
	console.log('selected text', request);
	word = request.text;
	heading = request.heading;
}
