<template lang="pug">
  .test-tabs ActiveTab: {{ activeTab }}
    NioTabs(
      :tabs="tabs"
      v-model="activeTab"
    )
      template(
        v-slot:tab1
      )
        .tab-content tab 1
      template(
        v-slot:tab2
      )
        .tab-content tab 2
</template>

<script>

import NioTabs from '../components/Tabs'

export default {
  components: {
    NioTabs
  },
  data: () => ({
    tabs: ['tab1', 'tab2'],
    activeTab: 'tab1'
  })
};
</script>

<style lang="sass" scoped>
.test-tabs
  
</style>