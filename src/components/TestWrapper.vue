<template>
<div class="test-input-group">
<span v-bind:class="{ 'worng': item.isWorng }" v-for="(item, index) in input_items.slice(0, 3)" :key="'i' + index" class="test-word done">{{item.type}}</span>
<input type="text" v-bind:class="{ 'worng': isWorng}" v-model="types" v-on:keyup="keyup" v-on:backspace="backspace" v-on:keyup.space="space" class="done" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="true">
<!-- </div> -->
<!-- <div class="test-prompt"> -->
	<span v-for="(item, index) in prompt_items.slice(0, 3)" :key="'p' + index" class="test-word">{{item}}</span>
	<div>{{this.typeSpeed}}타/분</div>
</div>
</template>
<script>
export default {
	name: 'TestWrapper',
	// TODO: cache value initalize
	// computed: {
	// 	// cache: {
	// 	// 	get: function() {
	// 	// 	},
	// 	// 	set: function(newValue) {
	// 	// 	}
	// 	// }
	// },
	data () {
		return {
			prompt_items: ["가각각", "가각간", "얠얩얻", "쨋쨌쨍", "청체첸", "쭸쮜쮸", "시신싣", "춥춧충", "샙샛샤"],
			input_items: [],
			types: '',
			count: 0,
			isWorng: false,
			typeSpeed: 0,
			cache: '',
		}
	},
	methods: {
    	keyup: function(e) {
			if (e.keyCode < 65 && e.keyCode > 90) return
			if (this.cache == '') {
				this.cache = this.prompt_items[0];
				this.speedCount(10000);
			}
			this.count++;
			
			if (this.types.length == 1 && this.types !== this.cache[0]) {
				this.isWorng = true;
				return
			}

			this.prompt_items.splice(0, 1, this.cache.replace(this.types, ''));

			if (this.cache.includes(this.types)) {
				this.isWorng = false;
			} else {
				this.isWorng = true;
			}
		},
		backspace: function() {
			this.count--;

		},
    	space: function() {
			let types = this.types.trim()
			if (types == this.cache) {
				this.isWorng = false;
			} else {
				this.isWorng = true;
			}
			this.prompt_items.splice(0, 1);
			this.input_items.push({ type: types, isWorng: this.isWorng });
			this.cache = this.prompt_items[0]
			this.types = '';
		},
		speedCount: function(time) {
		setTimeout(()=> this.typeSpeed = (60000/time) * this.count, time)
		}
	}
}
</script>

<style>

span.test-word.worng, input.worng {
	text-decoration: line-through;
	line-height: 1em;
	position: relative;
}

span.test-word.worng::after, input.worng::after {
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
