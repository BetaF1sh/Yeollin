// (function () {
	const dom_prompt_warpper = document.querySelector('#prompt-warpper');
	const dom_left_prompt = document.querySelector('.left-prompt');
	const dom_right_prompt = document.querySelector('.right-prompt');

	const dom_input = document.querySelector('#test-input');

	const arr_sentence = ["뜬", "쉐가", "울 넘나", "똘은", "어멍", "피", "물엉", "난다", "떡은", "벨", "떡", "셔도", "사름은", "벨", "사름", "엇나", "드렁칙에", "발", "걸린다", "두르애기도", "담에", "올른다", "동산도", "올르민", "굴렁", "싯나", "동녕찰리도이", "맛심엉", "비와사", "잘", "들어간다게", "동넷심방", "안", "알아준다", "동넷새각씨", "곱게", "안", "보인다", "돌레떡", "안팟", "엇나", "돈", "잘", "쓰민", "한량이곡", "잘못", "쓰민", "개망난인다", "돈", "엇은", "놈이", "장이", "강", "큰", "떡", "들른다", "돈", "내무리당", "돈에", "울곡", "사름", "내무리당", "사름에", "운다", "도독은", "들민", "심지", "말앙", "다울려", "불라", "나도나도", "전라도", "공이", "들민", "줴가", "든다"];

	let dom_target = dom_right_prompt.firstElementChild;

	for (val of arr_sentence.slice(0, 3)) {
		append_right(val);
	}

	dom_prompt_warpper.addEventListener('click', () => dom_input.focus());

	dom_input.addEventListener('keydown', (e) => {

		if (e.keyCode < 65 || e.keyCode > 90) return;

		const innerText = dom_input.innerText;

		if ((dict_input[e.code] || dict_input['default']) && innerText.length) {
			if (!dom_target) {
				dom_input.innerHTML = '';
				return};
			// if (innerText.length) {
				append_left(innerText.replace(/\n/mg, ''));
			// }
			dom_right_prompt.removeChild(dom_target);
			dom_target = dom_right_prompt.firstElementChild || false;
			dom_input.innerHTML = '';
			return
		}

		const input_class = dom_input.classList;
		const target_includes = dom_target.innerText.includes.bind(dom_target);
		
		if (!(input_class.contains("wrong") && target_includes(innerText)) || input_class.contains("wrong") && target_includes(innerText)) {
			input_class.toggle("wrong");
		}
	});

	dom_input.addEventListener('keyup', (e) => {
		if (dict_input[e.code] || dict_input['default']) {
			dom_input.innerHTML = '';
		}
	});

	const dict_input = {
		'Enter': true,
		'Space': true,
		default: false
	};

	function append_right(word) {
		dom_right_prompt.appendChild(input_from(word));
	}

	function append_left(word) {
		dom_left_prompt.insertBefore(input_from(word), dom_input);
	}

	function input_from(word) {
		const span = document.createElement('span');
		span.className = "word";
		span.innerText = word;
		return span.cloneNode(true);
	}
// })();
