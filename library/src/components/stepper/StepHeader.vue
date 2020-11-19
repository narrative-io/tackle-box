<template lang="pug">
  v-expansion-panel-header.nio-step-header(
    :class="{'nio-step-complete': complete}"
  )
    NioSlat.nio-step-header-slat
      template(v-slot:content)
        .step
          .icon
            NioIcon(  
              v-if="complete"
              iconName="utility-times"
              color="#F4F7FB"
            )
            .step-number(v-else) {{ stepIndex }}
          .step-name
        slot(name="completed-content")
      template(v-slot:action)
        NioIcon(
          name="utility-chevron-down"
          color="#415298"
        )

</template>

<script>

import NioSlat from '../slat/Slat'

export default {
  name: 'nio-step-header',
  props: {
    "stepName": { type: String, required: true},
    "stepIndex": { type: String, required: true},
    "complete": { type: Boolean, required: false, default: false}
  },
  data: () => ({

  }),
  mounted() {

},
  methods: {
    
  },
  components: { NioSlat }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step-header'  
</style>