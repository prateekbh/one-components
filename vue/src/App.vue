<template>
  <div id="app">
    <one-button ripple raised @oneclick="say('hi')">Shout hi</one-button>
    <div><one-checkbox @onechange="say('changed')" checked></one-checkbox>Yo</div>

    <div><one-slider max="120" discrete></one-slider></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:() => {
    return {
      sliderMin: 0,
      sliderMax: 120,
      sliderVal: 20,
      say: function(str) {
        console.log(str);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app div{
  margin: 32px 0;
}
</style>
