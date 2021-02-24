<template lang="pug">
  .test-tabs
    NioTabs(
      :activeTab="activeTab"
    )
</template>

<script>

import NioTabs from '../components/Tabs'

export default {
  components: {
    NioTabs
  },
  data: () => ({
    activeTab: null
  })
};
</script>

<style lang="sass" scoped>
.test-tabs
  
</style>