<template>
  <div id="app">
    <img src="../logo.svg">
    <h1>Yeollin</h1>
    <router-view/>
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
   margin-top: 60px;
}
h1 {
  margin-top: 1px;
}
</style>
