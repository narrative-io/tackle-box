<template lang="pug">
  NioOptionsGridItem.nio-budget-option(
    :option="option"
    :class="{'selected': selected}"
    @optionSelected="optionSelected"
  )
    template(v-slot:name)
      .nio-h3.text-primary-lightest {{ option.name }}
    template(v-slot:amount)
      .nio-jumbo-1.text-primary-dark {{ option.amount }}
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 	
  
</template>

<script>

import NioOptionsGridItem from './OptionsGridItem'


export default {
  name: 'nio-budget-option',
  props: {
    "option": { type: Object, required: true },
    "selected": { type: Boolean, required: false, default: false }
  },
  methods: {
    optionSelected() {
      this.$emit('selected', this.option)
    },
  },  
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGridItem }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-option'  
</style>
