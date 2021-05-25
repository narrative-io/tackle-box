<template lang="pug">
  .test-expansion-panel {{ openPanels }}
    NioExpansionPanels(v-model="openPanels" multiple)
      NioExpansionPanel(:key="0")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="1")
        template(v-slot:header) Header
        template(v-slot:content) Content

				
    NioExpansionPanels(:multiple="false")
      NioExpansionPanel(:key="2")
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel(:key="3")
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
		openPanels: []
  })
};
</script>

<style lang="sass" scoped>
.test-expansion-panel
     
</style>