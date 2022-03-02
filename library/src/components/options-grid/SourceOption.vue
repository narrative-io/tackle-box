<template lang="pug">
  NioOptionsGridItem.nio-source-option(
    :option="option"
    :class="{'selected': selected, 'disabled': option.status && option.status === 'coming', 'has-status': option.status}"
    @optionSelected="optionSelected"
  )
    template(v-slot:amount)
      NioIconFramer(
        :icon-name="option.iconName"
      )
    template(v-slot:content)
      .nio-h3.text-primary-darker {{ option.title }}
      .nio-p.text-primary-dark {{ option.description }}
      NioPill(
        v-if="option.status"
        :text="option.status"
      )

</template>

<script>

import NioOptionsGridItem from './OptionsGridItem'
import NioIconFramer from '../icon/IconFramer'
import NioPill from '../Pill'

export default {
  name: 'nio-budget-option',
  components: { NioOptionsGridItem, NioIconFramer, NioPill },
  props: {
    "option": { type: Object, required: true },
    "selected": { type: Boolean, required: false, default: false }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    optionSelected() {
      if (!this.option || !this.option.status || this.option.status !== 'coming') {
        this.$emit('selected', this.option)
      }  
    },
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_source-option'  
</style>
