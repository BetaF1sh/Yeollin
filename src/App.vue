<template>
  <div id="app">
    <img src="@/assets/logo.svg">
    <h1>Yeollin</h1>
    <!-- <top-menu/> -->
    <router-view/>
    <!-- <line-chart/> -->
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu';
// import LineChart from '@/components/LineChart';

export default {
  name: 'App',
  // components: {TopMenu, LineChart},
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  font-size: 14px;
}

img {
   margin-top: 60px;
}

</style>
