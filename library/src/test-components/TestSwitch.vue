<template lang="pug">
  .test-switch
    NioSwitch(v-model="switch1" :input-value="switch1") 
    .value value: {{ switch1 }}
    NioSwitch(v-model="switch2" :input-value="switch2" value="John")
    NioSwitch(v-model="switch2" :input-value="switch2" value="Jacob")       
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
    switch2: ['Jacob', 'John']
  })
};
</script>

<style lang="sass" scoped>
.test-switch 
  .nio-switch
    margin-bottom: 10px
  .value
    margin-bottom: 20px
</style>