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
const input = slider.querySelector('input');
input.addEventListener('input', event => {
	const number = event.target.value;
	input.setAttribute('value', number);
	sliderValue.setAttribute('data-length', event.target.value);
	applyFill(event.target);
});

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
let { word, heading } = bgpage;
let para = document.getElementById('form-data');
para.value = word;
let h1tag = document.getElementById('heading');
h1tag.innerHTML = heading;

btn.addEventListener('click', e => {
	console.log('working');
	document.querySelector('.summary-text').style.display = 'none';
	document.querySelector('.loader-container').style.visibility = 'visible';
	const getsummary = async () => {
		console.log('getsummary');
		let url = 'http://65.0.21.159:8080/summaryextension';
		const body = {
			text: formdata.value,
			number: input.value,
		};
		console.log(JSON.stringify(body));
		try {
			const res = await fetch(url, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(body),
			});
			console.log(res);
			const summary = await res.text();
			document.querySelector('.loader-container').style.display = 'block';
			document.getElementById('display').innerHTML = `
							<div class="summary"> <b> Summary</b>:  ${summary} </div> `;
		} catch (err) {
			console.error('err 😭', err);
		}
	};
	getsummary();
});