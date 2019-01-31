import './index.css';

import { jejulang as words } from './words.json';

import symbol from './symbol.svg';

const Img = new Image();
Img.src = symbol;
document.querySelector('header').appendChild(Img);

const promptWarpper = document.querySelector('#prompt-warpper');
const leftPrompt = document.querySelector('.left-prompt');
const rightPrompt = document.querySelector('.right-prompt');

const inputPrompt = document.querySelector('#test-input');

const inputBool = {
	Enter: true,
	Space: true,
	default: false,
};

let rightPromptChild = rightPrompt.firstElementChild;

function inputForm(word) {
	const span = document.createElement('span');
	span.className = 'word';
	span.innerText = word;
	return span.cloneNode(true);
}

function appendRight(word) {
	rightPrompt.appendChild(inputForm(word));
}

function appendLeft(word) {
	leftPrompt.insertBefore(inputForm(word), inputPrompt);
}

for (const val of words.slice(0, 3)) {
	appendRight(val);
}

promptWarpper.addEventListener('click', () => inputPrompt.focus());

inputPrompt.addEventListener('keydown', (e) => {
	const innerText = inputPrompt.innerText;

	if ((inputBool[e.code] || inputBool.default) && innerText.length) {
		if (!rightPromptChild) {
			inputPrompt.innerHTML = '';
			return;
		}
		appendLeft(innerText.replace(/\n/mg, ''));

		rightPrompt.removeChild(rightPromptChild);
		rightPromptChild = rightPrompt.firstElementChild || false;
		inputPrompt.innerHTML = '';
		return;
	}

	if (e.keyCode < 65 || e.keyCode > 90) return;

	const inputClass = inputPrompt.classList;
	const targetIncludes = rightPromptChild.innerText.includes.bind(rightPromptChild);

	if (!(inputClass.contains('wrong') && targetIncludes(innerText)) || (inputClass.contains('wrong') && targetIncludes(innerText))) {
		inputClass.toggle('wrong');
	}
});

inputPrompt.addEventListener('keyup', (e) => {
	if (inputBool[e.code] || inputBool.default) inputPrompt.innerHTML = '';
});
