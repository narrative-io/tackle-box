<template lang="pug">
  v-expansion-panel-header.nio-step-header(
    :class="{'nio-step-complete': complete, 'locked': locked}"
  )
    NioSlat.nio-step-header-slat
      template(v-slot:content)
        .step
          NioIcon(  
            v-if="complete"
            name="utility-check-circle"
            color="#43B463"
            size="24"
          )
          .icon(v-else)
            .step-number {{ stepIndex }}
          .step-name.nio-h6.text-primary-dark {{ stepName }}
        slot(name="header-complete")
      template(v-slot:action)
        NioIcon(
          name="utility-chevron-down"
          color="#415298"
        )
</template>

<script>

import NioSlat from '../slat/Slat'
import NioIcon from '../icon/Icon'

export default {
  name: 'nio-step-header',
  props: {
    "stepName": { type: String, required: true },
		"complete": { type: Boolean, required: false, default: false },
		"locked": { type: Boolean, required: false, default: true },
    "stepIndex": { type: Number, requied: true },
    "isFirstStep": { type: Boolean, required: false, default: false },
    "isLastStep": { type: Boolean, required: false, default: false }
  },
  data: () => ({
  }),
  mounted() {
  },
  methods: {
    
  },
  components: { NioSlat, NioIcon }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step-header'  
</style>