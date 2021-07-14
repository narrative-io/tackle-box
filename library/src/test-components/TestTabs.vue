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
      template(
        v-slot:tab3
      )
        .tab-content tab 3
    NioButton(
      normal-secondary
      @click="prevTab"
    ) Prev
    NioButton(
      normal-secondary
      @click="nextTab"
    ) Next
</template>

<script>

import NioTabs from '../components/Tabs'
import NioButton from '../components/Button'

export default {
  components: {
    NioTabs,
    NioButton
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
      },
      {
        name: 'tab3',
        label: 'Tab 3'
      }
    ],
    activeTab: 0
	}),
	methods: {
		nextTab() {
      this.activeTab++
    },
    prevTab() {
      this.activeTab--
		}
	}
};
</script>

<style lang="sass" scoped>
.test-tabs
  
</style>