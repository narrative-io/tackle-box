<template lang="pug">
  .test-filters
    StringLimited
    StringMany
    EventTimestamp
    Number
    Frequency
    Mapping
</template>

<script>

import StringLimited from './string-limited/StringLimited'
import StringMany from './string-many/StringMany'
import EventTimestamp from './event-timestamp/EventTimestamp'
import Number from './number/Number'
import Frequency from './frequency/Frequency'
import Mapping from './mapping/Mapping'

export default {
  components: {
    StringLimited,
    StringMany,
    EventTimestamp,
    Number,
    Frequency,
    Mapping
  }
}
</script>

<style lang="sass" >
.test-filters
  h1 
    margin: 40px auto 20px auto
</style>