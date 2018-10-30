<template>
<div class="test-input-group">
<span v-bind:class="{ 'wrong': word.isWrong }" v-for="(word, index) in done_words.slice(-3)" :key="'i' + index" class="test-word done">{{word.type}}</span>
<input type="text" v-bind:class="{ 'wrong': isWrong}" v-model="typing" v-on:keyup="keyup" v-on:backspace="backspace" v-on:keyup.space="space" class="done" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="true">
<!-- </div> -->
<!-- <div class="test-prompt"> -->
	<span v-for="(word, index) in serve_words.slice(0, 3)" :key="'p' + index" class="test-word">{{word}}</span>
	<div>{{this.typeSpeed}}타/분</div>
</div>
</template>
<script>
import wordset from '@/assets/wordset.json';
export default {
	name: 'TestWrapper',
	data () {
		return {
			serve_words: wordset['long_sentence'],
			done_words: [],
			typing: '',
			count: 0,
			isWrong: false,
			typeSpeed: 0,
			cache: null,
		}
	},
	beforeMount() {
		this.cache = this.serve_words[0];
	},
	methods: {
    	keyup: function(e) {
			if (this.count == 0) this.speedCount(60000); 
			this.count++;

			// if (this.typing.length < 2 && this.typing !== this.cache[0]) {
			// 	this.isWrong = true;
			// }else {
				this.isWrong = !this.cache.includes(this.typing);
				this.serve_words.splice(0, 1, this.cache.replace(this.typing, ''));
			// }
		},
		backspace: function() {
			this.count--;
		},
    	space: function() {
			this.serve_words.splice(0, 1);

			let types = this.typing.trim();
			this.done_words.push({ type: types, isWrong: !(types == this.cache) });
			
			this.cache = this.serve_words[0];
			this.typing = '';
		},
		speedCount: function(time) {
			setTimeout(()=> this.typeSpeed = (60000/time) * this.count, time);
		}
	}
}
</script>

<style>

span.test-word.wrong, input.wrong {
	text-decoration: line-through;
	line-height: 1em;
	position: relative;
}

span.test-word.wrong::after, input.wrong::after {
	border-bottom: 0.1em solid;
	content: '';
	left: 0;
	margin-top: calc(0.001em / 2 * -1);
	position: absolute;
	right: 0;
	top: 50%;
}

span.test-word {
	padding: 0 0.2em;
}

.test-input-group {
	font-size: 24px;
}

.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  /* max-width: 50%; */
  margin: 0 auto;
  margin-top: 1em;
}

input{
	line-height: 1.3em;
	padding-left: 5px;
	border: 0;
	text-align: right;
	font-size: 1em;
	width: 3.6em;

}

.done {
	color: gray;
}
</style>
