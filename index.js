(function () {
	const promptWarpper = document.querySelector('#prompt-warpper');
	const leftPrompt = document.querySelector('.left-prompt');
	const rightPrompt = document.querySelector('.right-prompt');

	const inputPrompt = document.querySelector('#test-input');

	const words = ['뜬', '쉐가', '울 넘나', '똘은', '어멍', '피', '물엉', '난다', '떡은', '벨', '떡', '셔도', '사름은', '벨', '사름', '엇나', '드렁칙에', '발', '걸린다', '두르애기도', '담에', '올른다', '동산도', '올르민', '굴렁', '싯나', '동녕찰리도이', '맛심엉', '비와사', '잘', '들어간다게', '동넷심방', '안', '알아준다', '동넷새각씨', '곱게', '안', '보인다', '돌레떡', '안팟', '엇나', '돈', '잘', '쓰민', '한량이곡', '잘못', '쓰민', '개망난인다', '돈', '엇은', '놈이', '장이', '강', '큰', '떡', '들른다', '돈', '내무리당', '돈에', '울곡', '사름', '내무리당', '사름에', '운다', '도독은', '들민', '심지', '말앙', '다울려', '불라', '나도나도', '전라도', '공이', '들민', '줴가', '든다'];

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
		if (e.keyCode < 65 || e.keyCode > 90) return;

		const innerText = inputPrompt.innerText;

		if ((inputBool[e.code] || inputBool.default) && innerText.length) {
			if (!rightPromptChild) {
				inputPrompt.innerHTML = '';
				return;
			}
			// if (innerText.length) {
			appendLeft(innerText.replace(/\n/mg, ''));
			// }
			rightPrompt.removeChild(rightPromptChild);
			rightPromptChild = rightPrompt.firstElementChild || false;
			inputPrompt.innerHTML = '';
			return;
		}

		const inputClass = inputPrompt.classList;
		const targetIncludes = rightPromptChild.innerText.includes.bind(rightPromptChild);

		if (!(inputClass.contains('wrong') && targetIncludes(innerText)) || (inputClass.contains('wrong') && targetIncludes(innerText))) {
			inputClass.toggle('wrong');
		}
	});

	inputPrompt.addEventListener('keyup', (e) => {
		if (inputBool[e.code] || inputBool.default) {
			inputPrompt.innerHTML = '';
		}
	});
})();
