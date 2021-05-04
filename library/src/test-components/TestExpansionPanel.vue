<template lang="pug">
  .test-expansion-panel
    NioExpansionPanels
      NioExpansionPanel
        template(v-slot:header) Header
        template(v-slot:content) Content
      NioExpansionPanel
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

  })
};
</script>

<style lang="sass" scoped>
.test-expansion-panel
     
</style>