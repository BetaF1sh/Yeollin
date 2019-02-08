import View from './View.js'

const tag = '[PromptView]'

const PromptView = Object.create(View)

PromptView.setup = function(el) {
	this.init(el)
	this.bindClick()
	return this
}

PromptView.bindClick = function () {
	this.el.addEventListener('click', () => this.emit('@focus'))
}

export default PromptView
