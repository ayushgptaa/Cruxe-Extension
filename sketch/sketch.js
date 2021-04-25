function setup() {
	noCanvas();

	// Range Slider Properties.
	// Fill : The trailing color that you see when you drag the slider.
	// background : Default Range Slider Background
	const sliderProps = {
		fill: '#0B1EDF',
		background: 'rgba(255, 255, 255, 0.214)',
	};

	// Selecting the Range Slider container which will effect the LENGTH property of the password.
	const slider = document.querySelector('.range__slider');

	// Text which will show the value of the range slider.
	const sliderValue = document.querySelector('.length__title');

	// Using Event Listener to apply the fill and also change the value of the text.
	slider.querySelector('input').addEventListener('input', event => {
		let number = event.target.value;
		console.log(number);
		sliderValue.setAttribute('data-length', event.target.value);
		applyFill(event.target);
	});
	console.log(slider.querySelector('input').value);

	// Selecting the range input and passing it in the applyFill func.
	applyFill(slider.querySelector('input'));
	// This function is responsible to create the trailing color and setting the fill.
	function applyFill(slider) {
		const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
		const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${
			sliderProps.background
		} ${percentage + 0.1}%)`;
		slider.style.background = bg;
		sliderValue.setAttribute('data-length', slider.value);
	}

	const form = document.getElementById('myform');
	const number = document.getElementById('number');
	const formdata = document.getElementById('form-data');
	const btn = document.getElementById('submit-btn');

	let bgpage = chrome.extension.getBackgroundPage();
	let word = bgpage.word;
	// let heading = bgpage.heading;
	let para = document.getElementById('form-data');
	// let h1tag = document.querySelector('.title-container');
	para.value = word;
	// h1tag.value = heading;

	//console.log(word)

	// number.addEventListener('input', event => {
	// 	let value = event.target.value;
	// 	// document.getElementById('current-value').innerText = word;
	// });

	btn.addEventListener('click', e => {
		if (document.getElementById('display').innerText) {
			document.getElementById('display').innerHTML = '';
		}
		document.getElementById('display').innerHTML = `<p>Loading....</p>`;
		getsummary();
	});
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
				number: 150,
			}),
		});
		if (!response.ok) {
			console.log('error');
		} else {
			let summary = await response.json();
			console.log(summary);
			document.getElementById('display').innerHTML = `
				<b> Summary</b>:  ${summary} `;
		}
	}
}
// const btn = document.getElementById('submit-btna');

// btn.addEventListener('click', e => {
// 	console.log('working');
