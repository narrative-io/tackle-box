<template lang="pug">
  .nio-filter-join-option
    .join-type(v-if="!(selectedDatasetObj && selectedDatasetObj.format === 'geometry')")
      NioRadioGroup(
        v-model="joinOption.value.joinType"
      )
        NioRadioButton(
          value="include" 
          label="Include"
        )
        NioRadioButton(
          value="exclude" 
          label="Exclude"
          :disabled="selectedDatasetObj && selectedDatasetObj.format === 'geometry'"
        )
    .geometry-join-type(v-if="selectedDatasetObj && selectedDatasetObj.format === 'geometry'")
      NioSelect(
        v-model="joinOption.value.geometryType"
        :items="geometryTypes"
        label="Geometry join type"
      )
    NioDivider(horizontal-solo)
    .select-dataset
      NioSelect(
        v-model="joinOption.value.selectedDataset"
        :items="joinOption.config.datasets"
        item-text="name"
        item-value="id"
        label="Dataset to Join"
      )
    .join-message
      NioAlert(
        :visible="true"
        :dismissable="false"
        messageTitle="Joining datasets: "
        message="To perform a join, you’ll need to upload your dataset to Dataset Manager so you can pick it from the Dataset to Join menu."
        warning
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
  components: { NioSelect, NioRadioGroup, NioRadioButton, NioDivider, NioAlert },
  props: {
    "joinOption": { type: Object, required: true }
  },
  data: () => ({
    geometryTypes: ['Intersects', 'Contains'],
  }),
  computed: {
    selectedDatasetObj() {
      return this.joinOption.config.datasets.find(dataset => dataset.id === this.joinOption.value.selectedDataset)
    }
  },
  watch: {
    joinOption: {
      deep: true,
      handler() {
        if (this.selectedDatasetObj) {
          if (this.selectedDatasetObj.format === 'geometry') {
            this.joinOption.value.joinType === 'inclusion'
          }
        }
      }
    }
  },
  mounted() {
    if (!this.joinOption.value.selectedDataset) {
      this.joinOption.value.selectedDataset = this.joinOption.config.datasets[0].id
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-join-option'  
</style>