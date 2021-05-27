<template lang="pug">
  .test-expansion-panel {{ openPanels }}
    NioExpansionPanels(v-model="openPanels" multiple)
      NioExpansionPanel(:key="0")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="1")
        template(v-slot:header) Header
        template(v-slot:content) Content
    .model(style="margin-top:30px") {{ openPanel }}	
    NioExpansionPanels(v-model="openPanel" :multiple="false")
      NioExpansionPanel(:key="0")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="1")
        template(v-slot:header) Header
        template(v-slot:content) Content
</template>

<script>

import NioExpansionPanel from '../components/ExpansionPanel'
import NioExpansionPanels from '../components/ExpansionPanels'

export default {
  components: {
    NioExpansionPanel,
    NioExpansionPanels
  },
  data: () => ({
    openPanels: [],
    openPanel: 0
  })
};
</script>

<style lang="sass" scoped>
.test-expansion-panel
     
</style>