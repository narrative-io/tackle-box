<template lang="pug">
  .test-color-picker
    NioCombobox(
      v-model="model"
      :items="items"
    )
</template>

<script>

import NioCombobox from '../components/Combobox'

export default {
  components: {
    NioCombobox
  },
  data: () => ({
    model: '',
    items: [
      {
        label: 'Age',
        value: 'age_v1'
      },
      {
        label: 'Age -> something else',
        value: 'ave_v1.something_else'
      },
      {
        label: 'Gender',
        value: 'declared_gender'
      }
    ]
  }),
  mounted() {
   
  },
  components: { NioCombobox }
};
</script>

<style lang="sass" scoped>
</style>