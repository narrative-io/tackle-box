<template lang="pug">
  .test-filters
    StringLimited
    StringMany
      
</template>

<script>

import StringLimited from './string-limited/StringLimited'
import StringMany from './string-many/StringMany'

export default {
  components: {
    StringLimited,
    StringMany
  }
}
</script>

<style lang="sass" scoped>
.test-filters
 
</style>