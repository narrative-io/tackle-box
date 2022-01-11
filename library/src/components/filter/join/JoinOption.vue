<template lang="pug">
  .nio-filter-join-option
    .join-type
      NioRadioGroup(v-model="filter.joinOption.value.joinType")
        NioRadioButton(value="include" label="Inculde")
        NioRadioButton(value="exclude" label="Exclude")
    NioDivider(horizontal-solo)
    .select-dataset
      NioSelect(
        :items="filter.joinOption.config.datasets"
        v-model="filter.joinOption.value.selectedDataset"
        item-text="name"
        item-value="id"
        label="Dataset to Join"
      )
    .join-message
      NioAlert(
        warning
        :visible="true"
        messageTitle="Joining datasets: "
        message="To perform a join, you’ll need to upload your dataset to Dataset Manager so you can pick it from the Dataset to Join menu."
        :dismissable="false"
      )
</template>

<script>

import NioSelect from '../../Select'
import NioRadioGroup from '../../RadioGroup'
import NioRadioButton from '../../RadioButton'
import NioDivider from '../../Divider'
import NioAlert from '../../Alert'

export default {
  name: 'nio-filter-join-option',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
  }),
  computed: {
  
  },
  mounted() {
  },
  watch: {
   
  },
  components: { NioSelect, NioRadioGroup, NioRadioButton, NioDivider, NioAlert }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-join-option'  
</style>