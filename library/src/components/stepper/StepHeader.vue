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
            .step-number {{ stepIndex + 1 }}
          .step-name.nio-h6.text-primary-dark {{ stepName }}
      template(v-slot:summary v-if="summary && complete") 
        NioSummarySlat.summary(v-if="customSummary")
          template(v-slot:custom-content)
            slot(name="custom-summary")
        NioSummarySlat.summary(
          v-else-if="simpleSummary"
          :title="summary.title"
        )
        NioSummarySlat.summary(
          v-else
          :image-src="summary.imageSrc"
          :image-background="summary.imageBackground"
          :title="summary.title"
          :subtitle="summary.subtitle"
          :details-label="summary.detailsLabel"
          :details-value="summary.detailsValue"
          :details-annotation="summary.detailsAnnotation"
        )
      template(v-slot:action v-if="complete")
        NioIcon.expand(
          name="utility-chevron-down"
          color="#415298"
        )
</template>

<script>

import NioSlat from '../slat/Slat'
import NioIcon from '../icon/Icon'
import NioSummarySlat from '../../components/slat/types/SummarySlat'
import NioSlatGroup from '../../components/slat/SlatGroup'

export default {
  name: 'nio-step-header',
  components: { NioSlat, NioIcon,  NioSummarySlat, NioSlatGroup },
  props: {
    "stepName": { type: String, required: true },
    "complete": { type: Boolean, required: false, default: false },
    "locked": { type: Boolean, required: false, default: true },
    "stepIndex": { type: Number, requied: true },
    "isFirstStep": { type: Boolean, required: false, default: false },
    "isLastStep": { type: Boolean, required: false, default: false },
    "summary": { type: Object, required: false },
    "simpleSummary": { type: Boolean, required: false, default: false },
    "customSummary": { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step-header'  
</style>