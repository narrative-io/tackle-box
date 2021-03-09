<template lang="pug">
  .test-filters
    StringLimited
    StringMany
    EventTimestamp
    Number
</template>

<script>

import StringLimited from './string-limited/StringLimited'
import StringMany from './string-many/StringMany'
import EventTimestamp from './event-timestamp/EventTimestamp'
import Number from './number/Number'

export default {
  components: {
    StringLimited,
    StringMany,
    EventTimestamp,
    Number
  }
}
</script>

<style lang="sass" >
.test-filters
  h1 
    margin: 40px auto 20px auto
</style>