<template lang="pug">
  .test-expansion-panel
    NioExpansionPanel
      template(v-slot:header) Header
      template(v-slot:content) Content
    NioExpansionPanel
      template(v-slot:header) Header
      template(v-slot:content) Content
</template>

<script>

import NioExpansionPanel from '../components/ExpansionPanel'

export default {
  components: {
    NioExpansionPanel
  },
  data: () => ({

  })
};
</script>

<style lang="sass" scoped>
.test-expansion-panel
     
</style>