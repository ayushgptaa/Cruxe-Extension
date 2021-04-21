// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

function setup() {
	noCanvas();

	let bgpage = chrome.extension.getBackgroundPage();
	let word = bgpage.word;
	let para = document.getElementById('form-data');
	para.value = word;
	//console.log(word)

	const form = document.getElementById('myform');
	const number = document.getElementById('number');
	const formdata = document.getElementById('form-data');
	const book = document.getElementById('book');
	const btn = document.getElementById('submit-btn');

	number.addEventListener('input', event => {
		let value = event.target.value;
		// document.getElementById('current-value').innerText = word;
	});

	btn.addEventListener('click', e => {
		console.log('working');
		e.preventDefault();
		if (document.getElementById('display').innerText) {
			document.getElementById('display').innerHTML = '';
		}

		async function getsummary() {
			let url = 'http://15.206.90.205/predict';
			let response = await fetch(url, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				crossDomain: true,
				body: JSON.stringify({
					text: formdata.value,
					number: number.value,
				}),
			});
			if (!response.ok) {
				console.log('error');
			} else {
				let summary = await response.json();
				console.log(summary);
				document.getElementById('display').innerHTML = `
    			<p id="dynamic-text"> summary: ${summary} </p>`;
			}
		}
		getsummary();
	});
	// let url = `http://api.wordnik.com:80/v4/word.json/
	// ${word}
	// /definitions?limit=1
	// &includeRelated=false
	// &sourceDictionaries=all
	// &useCanonical=false
	// &includeTags=false
	// &api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
	// `;
	// url = url.replace(/\s+/g, '');
	// loadJSON(url, gotData);

	// function gotData(data) {
	//   createP(data[0].text).style('font-size', '48pt');
	// }

	//createP(word);
}
