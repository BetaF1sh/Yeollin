<template>
<div class="test-input-group">
<span v-bind:class="{ 'worng': item.isWorng }" v-for="(item, index) in input_items" :key="'i' + index" class="test-word">{{item.type}}</span>
<input type="text" v-bind:class="{ 'worng': isWorng }" v-model="types" v-on:keyup="keyup" v-on:backspace="backspace" v-on:keyup.space="space">
<!-- </div> -->
<!-- <div class="test-prompt"> -->
	<span v-for="(item, index) in prompt_items" :key="'p' + index" class="test-word">{{item}}</span>
	<button class="Aligner Aligner-item" v-on:click="speedCount(10000)">타속 재기</button> <a>{{this.typeSpeed}}타/분</a>
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
			prompt_items: ["가각각", "가각간", "얠얩얻", "쨋쨌쨍", "청체첸", "쭸쮜쮸", "시신싣", "춥춧충", "샙샛생샤"],
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
			if (e.keyCode < 65 && e.keyCode > 90) {
				return
			}
			if (this.cache == '') {
				this.cache = this.prompt_items[0]
			}
			this.count++;
			this.prompt_items.splice(0, 1, this.cache.replace(this.types, ""));

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
			if (types == this.prompt_items[0]) {
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
	border-bottom: 0.125em solid black;
	content: "";
	left: 0;
	margin-top: calc(0.125em / 2 * -1);
	position: absolute;
	right: 0;
	top: 50%;
}

span.test-word {
	margin-left:0.2em
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
	border: 0;
	outline: 0;
	background: transparent;
	/* border-bottom: 1px solid black; */
	font-size: 24px;
	width: 3em;
	text-align: right;
}
</style>
