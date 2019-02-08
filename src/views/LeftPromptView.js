import View from './View.js'

const tag = '[LeftPromptView]'

const LeftPromptView = Object.create(View)

LeftPromptView.setup = function (el, formEl) {
	this.init(el)
	this.formEl = formEl
	return this
}

LeftPromptView.append = function(wordEl) {
	this.el.insertBefore(wordEl, this.formEl)
}

export default LeftPromptView
