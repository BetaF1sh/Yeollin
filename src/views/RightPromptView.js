import View from './View.js'

const tag = '[RightPromptView]'

const RightPromptView = Object.create(View)

RightPromptView.setup = function (el) {
	this.init(el)
	return this
}

RightPromptView.render = function (data = []) {
	console.log(tag, 'render()', data)
	this.el.innerHTML = data.length ? this.getWordsHTML(data[0].words.slice(0, 4)) : ''
	this.show()
	return this
}

RightPromptView.getWordsHTML = function (data) {
	return data.reduce((html, item, index) => {
		html += `<span class="word" data-i=${index}>${item}</span>`
		return html
	}, '')
}

export default RightPromptView
