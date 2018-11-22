<template>
	<div>
		<span class="test-done-group">
			<span v-bind:class="{ 'wrong': word.isWrong }" v-for="(word, index) in done_words.slice(-3)" :key="'i' + index" class="test-word done">{{word.type}}</span>
			<input type="text" v-bind:class="{ 'wrong': isWrong, 'bamin': isBamin[this.$route.params.word]}" v-model="typing" @input="keyup" @keypress.delete="backspace" @keyup.space="space" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="true">
		</span>
		<span class="serve-word-group">
			<span v-for="(word, index) in serve_words.slice(0, 3)" :key="'p' + index" class="test-word">{{word}}</span>
		</span>
		<div>{{this.typeSpeed}}타/분</div>
		<router-link to="/" tag="button" class="ui button primary">돌아가기</router-link>
	</div>
</template>
<script>
import wordset from "@/assets/wordset.json";
export default {
  name: "TestWrapper",
  data() {
    return {
      serve_words: wordset[this.$route.params.word],
      isBamin: { bamin: true, default: false },
      done_words: [],
      typing: "",
      count: 0,
      isWrong: false,
      typeSpeed: 0,
      cache: null,
      time_status: 0
    };
  },
  beforeMount() {
    this.cache = this.serve_words[0];
  },
  // TODO: wordset[] computed
  //   computed: {
  //     word_type: function() {
  //       return this.$route.params.word;
  //     }
  //   },
  methods: {
    keyup: function(e) {
      if (e.keyCode < 65 || e.keyCode > 90) return;
      if (this.count === 0) this.speedCount(60000);
      this.count++;

      // if (this.typing.length < 2 && this.typing !== this.cache[0]) {
      // 	this.isWrong = true;
      // }else {
      this.isWrong = !this.cache.includes(this.typing);
      this.serve_words.splice(0, 1, this.cache.replace(this.typing, ""));
      // }
    },
    backspace: function() {
      this.count--;
    },
    space: function() {
      this.serve_words.splice(0, 1);

      let types = this.typing.trim();
      this.done_words.push({ type: types, isWrong: !(types === this.cache) });

      this.cache = this.serve_words[0];
      this.typing = "";
    },
    speedCount: function(time) {
      // setInterval(() => (
      //   if (this.time_status++ == 60){

      //   }
      // ), time);
      setTimeout(() => (this.typeSpeed = (60000 / time) * this.count), time);
    }
  }
};
</script>

<style scoped>
@import "../assets/BMHANNA/BMHANNAPro.css";

span.test-word.wrong,
input.wrong {
  text-decoration: line-through;
  line-height: 1em;
  position: relative;
}

span.test-word.wrong::after,
input.wrong::after {
  border-bottom: 0.1em solid;
  content: "";
  left: 0;
  margin-top: calc(0.001em / 2 * -1);
  position: absolute;
  right: 0;
  top: 50%;
}

.test-word {
  padding: 0 0.2em;
  display: inline;
}

.test-done-group,
.serve-word-group {
  font-size: 24px;
  width: 50vw;
  max-width: 50vw;
}

input {
  line-height: 1.3em;
  padding-left: 5px;
  border: 0;
  text-align: right;
  font-size: 1em;
  width: 3.6em;
}

.done,
input {
  color: gray;
}

.bamin {
  font-family: "BM HANNA Pro";
}
</style>
