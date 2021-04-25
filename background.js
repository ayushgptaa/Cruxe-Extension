chrome.runtime.onMessage.addListener(receiver);
window.word = 'Reload the page';
window.heading = 'Heading';

function receiver(request, sender, sendResponse) {
	word = request.text;
	heading = request.heading;
}
