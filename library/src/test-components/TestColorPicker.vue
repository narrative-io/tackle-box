<template lang="pug">
  .test-color-picker
    NioColorPicker(
      v-model="color"
    )
    NioColorPicker(
      label="My Color"
      v-model="color"
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
    setTimeout(() => {
      this.color = '#999999'
    }, 1500);
  },
  components: { NioColorPicker }
};
</script>

<style lang="sass" scoped>
.test-color-picker
</style>