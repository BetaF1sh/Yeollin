import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
	this.init(el)
	this.bindKeydownEvent()
	return this
}

FormView.onFocus = function () {
	this.el.focus()
}
	
FormView.bindKeydownEvent = function () {
	this.el.addEventListener('keyup', e => {
		const keyCode = e.keyCode
		this.emit('@keyup', { keyCode })
	})
}

FormView.isWrong = function () {
	return this.el.classList.contains('wrong')
}

FormView.pop = function () {
	const word = this.el.innerText.trim().replace('\n', '')
	const isWrong = this.isWrong()
	this.el.innerHTML = ''
	return { word: word, isWrong: isWrong }
}

export default FormView
