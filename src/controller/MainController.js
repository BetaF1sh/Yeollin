import PromptView from '../views/PromptView.js'
import RightPromptView from '../views/RightPromptView.js'
import LeftPromptView from '../views/LeftPromptView.js'
import FormView from '../views/FormView.js'

import wordModel from '../models/wordModel.js'

const tag = '[MainController]'

export default {
	init() {
		PromptView.setup(document.querySelector('#prompt-warpper'))
			.on('@focus', e => FormView.onFocus())

		FormView.setup(document.querySelector('#test-input'))
			.on('@keyup', e => this.onKeydown(e.detail.keyCode))

		LeftPromptView.setup(document.querySelector('#left-prompt'), FormView.el)
		
		RightPromptView.setup(document.querySelector('#right-prompt'))

		this.renderView()
	},

	renderView() {
		this.fetchWords()
	},

	fetchWords() {
		wordModel.list().then(data => {
			RightPromptView.render(data)
		})
	},

	onKeydown(keyCode) {
		if (keyCode === 13 || keyCode === 32) {
			this.pushLeftPrompt()
		}
	},

	pushLeftPrompt() {
		const formData = FormView.pop()
		if (!formData.word) return

		const span = document.createElement('span')
		span.classList.add('word')
		if (formData.isWrong) span.classList.add('wrong')
		span.innerHTML = formData.word
		
		LeftPromptView.append(span)
	}
}
