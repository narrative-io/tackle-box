<template lang="pug">
  .nio-ttd-rate-card-summary(
    v-if="item.effectivePrice"
    :class="[{'pill': asPill, 'not-buyable': !item.buyable}]"
  )
    .content
      .nio-p {{ item.effectivePrice }}
    .mask(v-if="asPill")
  .nio-ttd-rate-card-summary.root.nio-p.text-primary-dark(
    v-else-if="isRootNode"
  ) ROOT
</template>

<script>

import { PathDelimiter } from '@/modules/app/ttd-taxonomy/ttdTaxonomyModule'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    asPill: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'global'
    }
  },
  computed: {
    isRootNode() {
      return this.item.fullPath.split(PathDelimiter).length === 1
    }
  }
};
</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/common/ttd-connector/_ttd-rate-card-summary'

</style>