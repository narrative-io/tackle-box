<template lang="pug">
  .test-combobox
    h6 Items:
    p {{ items}}
    .wrapper
      NioCombobox(
        v-model="model"
        :items="items"
        placeholder="Type some text"
        @computedValueChanged="updateValue($event)"
      )
    h6 Computed value:
    p {{ computedValue }}
    h6 model
    p {{ model }}
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
   setTimeout(() => {
     this.model = ['stuff']
   }, 500);
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
    .wrapper
      height: 76px
      outline: 1px solid black
    .nio-combobox
    h6
      margin-top: 48px
</style>