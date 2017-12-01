<template>
  <div id="app">
    <one-button ripple raised @oneclick="say('How u doin?')">Shout hi</one-button>
    <one-snackbar ref="snackbar"></one-snackbar>

    <div>
      <one-form-field>
        <one-checkbox @onechange="toggleSliderDisabled()" checked id="check1"></one-checkbox>
        <label for="check1">Slider Enabled</label>
      </one-form-field>
    </div>

    <div>
      <one-slider :max="120" :value="sliderVal" step="10" discrete
        @mdcsliderchange="updateValue()" ref="slider">
      </one-slider>
    </div>
    <div>
      Slider value: {{ sliderVal }}
    </div>
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
      say: function(text) {
        this.$refs.snackbar.show({
          message: text,
				});
      },
      toggleSliderDisabled: function() {
        if (this.$refs.slider.disabled) {
          this.$refs.slider.removeAttribute('disabled');
        } else {
          this.$refs.slider.setAttribute('disabled', '');
        }
      },
      updateValue: function() {
        this.sliderVal = this.$refs.slider.value;
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
