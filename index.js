(function () {
	const prompt_warpper = document.querySelector('#prompt-warpper');
	const left_prompt = document.querySelector('.left-prompt');
	const right_prompt = document.querySelector('.right-prompt');

	const input = document.querySelector('#test-input');

	prompt_warpper.addEventListener('click', () => input.focus());

	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			append(input.innerText.replace(/\n/mg, ''));
			input.innerHTML = '';
		}
	});

	input.addEventListener('keyup', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			input.innerHTML = '';
		}
	});

	function append(word) {
		left_prompt.insertBefore(input_from(word), input);
	}

	function input_from(word) {
		const span = document.createElement('span');
		span.className = "word";
		span.innerText = word;
		return span.cloneNode(true);
	}
})();
