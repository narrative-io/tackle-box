<template lang="pug">
  .test-switch
    NioSwitch(v-model="switch1" label="Select value") 
    .value value: {{ switch1 }}
    NioSwitch(v-model="switch2" value="John")
    NioSwitch(v-model="switch2" value="Jacob")       
    .value value: {{ switch2 }}
</template>

<script>

import NioSwitch from '../components/Switch'

export default {
  components: {
    NioSwitch
  },
  data: () => ({
    switch1: true,
    switch2: ['Jacob']
	}),
	mounted() {
    setTimeout(() => {
			this.switch2 = ['John']
			this.switch1 = false
    }, 1500);
  }
};
</script>

<style lang="sass" scoped>
.test-switch 
  .nio-switch
    margin-bottom: 10px
  .value
    margin-bottom: 20px
</style>