<template>
  <div class="four ui buttons">
    <router-link to="/test/word" tag="button" class="ui button"><i class="icon cube"/>자리 연습</router-link>
    <router-link to="/test/sentence" tag="button" class="ui button"><i class="icon cubes"/>짧은 글 연습</router-link>
    <router-link to="/test/long_sentence" tag="button" class="ui button"><i class="icon cubes"/>긴글 연습</router-link>
    <router-link to="/test/bamin" tag="button" class="ui button">🍗 배민체 연습(?)</router-link>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
  // data() {
  //   return {};
  // },
  // methods: {
  //   goto: function(str) {}
  // }
};
</script>

