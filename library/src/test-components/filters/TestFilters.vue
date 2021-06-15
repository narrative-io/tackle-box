<template lang="pug">
  .test-filters
    StringLimited
    StringMany
    EventTimestamp
    SimpleTimestamp
    Number
    Frequency
    Mapping
    Boolean
</template>

<script>

import StringLimited from './string-limited/StringLimited'
import StringMany from './string-many/StringMany'
import EventTimestamp from './event-timestamp/EventTimestamp'
import SimpleTimestamp from './simple-timestamp/SimpleTimestamp'
import Number from './number/Number'
import Frequency from './frequency/Frequency'
import Mapping from './mapping/Mapping'
import Boolean from './boolean/Boolean'

export default {
  components: {
    StringLimited,
    StringMany,
    EventTimestamp,
    SimpleTimestamp,
    Number,
    Frequency,
    Mapping,
    Boolean
  }
}
</script>

<style lang="sass" >
.test-filters
  h1 
    margin: 40px auto 20px auto
</style>