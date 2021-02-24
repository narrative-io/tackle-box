<template lang="pug">
  .test-tabs ActiveTab: {{ activeTab.name }}
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
    tabs: [
      {
        name: 'tab1',
        label: 'Tab 1'
      },
      {
        name: 'tab2',
        label: 'Tab 2'
      }
    ],
    activeTab: 'tab1'
  })
};
</script>

<style lang="sass" scoped>
.test-tabs
  
</style>