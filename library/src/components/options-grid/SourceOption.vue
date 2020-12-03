<template lang="pug">
  NioOptionsGridItem.nio-source-option(
    :option="option"
    :class="{'selected': selected}"
    @optionSelected="optionSelected"
  )
    template(v-slot:amount)
      NioIconFramer(
        :iconName="option.iconName"
      )
    template(v-slot:content)
      .nio-h3.text-primary-darker {{ option.title }}
      .nio-p.text-primary-dark {{ option.description }}
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
  @import '../../styles/mixins/options-grid/_source-option'  
</style>
