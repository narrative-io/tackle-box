<template lang="pug">
  .test-filters
    Summary
    Custom
    Object
    Array
    StringLimited
    StringMany
    EventTimestamp
    SimpleTimestamp
    Number
    Frequency
    Mapping
    Boolean
    Binary
</template>

<script>

import Custom from './custom/Custom'
import Object from './object/Object'
import Array from './array/Array'
import StringLimited from './string-limited/StringLimited'
import StringMany from './string-many/StringMany'
import EventTimestamp from './event-timestamp/EventTimestamp'
import SimpleTimestamp from './simple-timestamp/SimpleTimestamp'
import Number from './number/Number'
import Frequency from './frequency/Frequency'
import Mapping from './mapping/Mapping'
import Boolean from './boolean/Boolean'
import Binary from './binary/Binary'
import Summary from './summary/Summary.vue'

export default {
  components: {
    Custom,
    Object,
    Array,
    StringLimited,
    StringMany,
    EventTimestamp,
    SimpleTimestamp,
    Number,
    Frequency,
    Mapping,
    Boolean,
    Binary,
    Summary
  }
}
</script>

<style lang="sass" >
.test-filters
  h1 
    margin: 40px auto 20px auto
</style>