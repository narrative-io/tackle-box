<template lang="pug">
  .test-color-picker
    NioCombobox(
      v-model="model"
    )
</template>

<script>

import NioCombobox from '../components/Combobox'

export default {
  components: {
    NioCombobox
  },
  data: () => ({
    model: ''
  }),
  mounted() {
   
  },
  components: { NioCombobox }
};
</script>

<style lang="sass" scoped>
</style>