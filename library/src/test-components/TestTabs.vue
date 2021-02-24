<template lang="pug">
  .test-tabs Test {{ activeTab }}
    NioTabs(
      v-model="activeTab"
    )
      NioTab(
        :key="1"
      )
        .tab-content tab 1
      NioTab(
        :key="2"
      )
        .tab-content tab 2
</template>

<script>

import NioTabs from '../components/Tabs'
import NioTab from '../components/Tab'

export default {
  components: {
    NioTabs,
    NioTab
  },
  data: () => ({
    activeTab: 1
  })
};
</script>

<style lang="sass" scoped>
.test-tabs
  
</style>