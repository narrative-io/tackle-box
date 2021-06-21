<template lang="pug">
  .test-expansion-panel model: {{ openPanels }}
    NioExpansionPanels(v-model="openPanels" multiple)
      NioExpansionPanel(:key="0")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="1")
        template(v-slot:header) Header
        template(v-slot:content) Content
    .controls
      NioButton(@click="openAPanel(0)") Open Panel 1
      NioButton(@click="openAPanel(1)") Open Panel 2
    .model(style="margin-top:30px") model: {{ openPanel }}	
    NioExpansionPanels(v-model="openPanel" :multiple="false")
      NioExpansionPanel(:key="0")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="1")
        template(v-slot:header) Header
        template(v-slot:content) Content
    .controls
      NioButton(@click="openPanel = 0") Open Panel 1
      NioButton(@click="openPanel = 1") Open Panel 2
</template>

<script>

import NioExpansionPanel from '../components/ExpansionPanel'
import NioExpansionPanels from '../components/ExpansionPanels'
import NioButton from '../components/Button'

export default {
  components: {
    NioExpansionPanel,
    NioExpansionPanels,
    NioButton
  },
  data: () => ({
    openPanels: [],
    openPanel: 0
  }),
  methods: {
    openAPanel(val) {
      if (!this.openPanels.includes(val)) {
        this.openPanels.push(val)
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.test-expansion-panel
  .nio-button
   margin: 24px 8px
  .controls
    display: flex
     
</style>