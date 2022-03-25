<template lang="pug">
  .test-combobox
    h6 Items:
    p {{ items}}
    NioCombobox(
      v-model="model"
      :items="items"
      @computedValueChanged="updateValue($event)"
    )
    h6 Computed value:
    p {{ computedValue }}
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
    ],
    computedValue: ''
  }),
  mounted() {
   
  },
  methods: {
    updateValue(val) {
      this.computedValue = val
    }
  },
  components: { NioCombobox }
};
</script>

<style lang="sass" scoped>
  .test-combobox
    padding: 24px 16px
    .nio-combobox
      margin: 48px auto 0px auto
    h6
      margin-top: 48px
</style>