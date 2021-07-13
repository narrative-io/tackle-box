<template lang="pug">
  .test-color-picker
    NioColorPicker(
      name="myColor"
      label="My Color"
      :value="color"
    )
</template>

<script>

import NioColorPicker from '../components/ColorPicker'

export default {
  components: {
    NioColorPicker
  },
  data: () => ({
    color: "#000000"
  }),
  mounted() {
    // setTimeout(() => {
    //   this.date = "2024-12-30"
    // }, 1500);
  },
  components: { NioColorPicker }
};
</script>

<style lang="sass" scoped>
.test-color-picker
</style>