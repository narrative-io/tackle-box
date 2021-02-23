<template lang="pug">
  .test-date-field
    NioDateField(
      v-model="date"
    )
</template>

<script>

import NioDateField from '../components/DateField'

export default {
  components: {
    NioDateField
  },
  data: () => ({
    date: "2021-02-12"
  })
};
</script>

<style lang="sass" scoped>
.test-date-field 
</style>