<template lang="pug">
  .test-checkbox
    NioCheckbox(v-model="checkbox")
    .value value: {{ checkbox }}
    NioCheckbox(v-model="selected" label="John" value="John")
    NioCheckbox(v-model="selected" label="Jacob" value="Jacob")
    .value value: {{ selected }}
</template>

<script>

import NioCheckbox from '../components/Checkbox'

export default {
  components: {
    NioCheckbox
  },
  data: () => ({
    checkbox: true,
    selected: ['John']
  })
};
</script>

<style lang="sass" scoped>
.test-checkbox  
  .nio-checkbox
    margin-bottom: 10px
  .value
    margin-bottom: 20px
</style>