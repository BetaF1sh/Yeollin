<template>
<div class="test-input-group">
<span v-bind:class="{ 'worng': item.isWorng }" v-for="(item, index) in input_items" :key="'i' + index" class="test-word">{{item.type}}</span>
<input type="text" v-bind:class="{ 'worng': isWorng }" v-model="types" v-on:keyup="keyup" v-on:backspace="backspace" v-on:keyup.space="space">
<!-- </div> -->
<!-- <div class="test-prompt"> -->
	<span v-for="(item, index) in prompt_items" :key="'p' + index" class="test-word">{{item}}</span>
</div>
</template>
<script>
export default {
	name: 'TestWrapper',
	data () {
		return {
			prompt_items: ['가', '나'],
			input_items: [],
			types: '',
			count: 0,
			isWorng: false
		}
	},
	methods: {
    	keyup: function(e) {
			this.count++;
			// TODO: do splice if types letter equal to prompt_items[0]
			// if (this.prompt_items.includes(this.types, 0) {
			// 	this.prompt_items.splice(0, 1, this.prompt_items[0] - this.types);
			// 	this.isWorng = false;
			// } else {
			// 	this.isWorng = true;
			// }
		},
		backspace: function() {
			this.count--;
			// TODO: repush to prompt_items
		},
    	space: function() {
			// FIX: prompt_item is poped last elment
			let types = this.types.replace(/\s/g, '')
			if (types == this.prompt_items[0]) {
				this.isWorng = false;
			} else {
				this.isWorng = true;
			}
			this.prompt_items.pop(-1);
			this.input_items.push({ type: types, isWorng: this.isWorng });
			this.types = ''
		},
		// TODO: Type speed count feature
		// function speedCount() {
		// setTimeout(()=> typeSpeed = (60000/time) * count, time)
		// }
	}
}
</script>

<style>
.worng {
	text-decoration: line-through;
}

input{
	font-size: 14px;
	width: 50px;
	text-align: right;
}
</style>
