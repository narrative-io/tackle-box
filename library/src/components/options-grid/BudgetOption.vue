<template lang="pug">
  NioOptionsGridItem.nio-budget-option(
    :option="option"
    :class="{'selected': selected, 'disabled': option.disabled}"
    @optionSelected="optionSelected"
  )
    template(v-slot:name)
      .nio-h3.text-primary-lightest {{ option.name }}
    template(v-slot:amount)
      .nio-jumbo-1.text-primary-dark ${{ formatNumber(option.amount) }}
    template(
      v-for="(index, name) in $scopedSlots" 
      v-slot:[name]="data"
    )
      slot(
        v-bind="data"
        :name="name" 
      ) 	
</template>

<script>

import NioOptionsGridItem from './OptionsGridItem'
import numeral from 'numeral'

export default {
  name: 'nio-budget-option',
  components: { NioOptionsGridItem },
  props: {
    "option": { type: Object, required: true },
    "selected": { type: Boolean, required: false, default: false },
    "disabled": { type: Boolean, required: false, default: false }
  },
  methods: {
    formatNumber(number) {
      return numeral(number).format('0,0')
    },
    optionSelected() {
      this.$emit('selected', this.option)
    },
  },  
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-option'  
</style>
