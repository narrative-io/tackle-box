<template lang="pug">
  .test-pills
    NioPill(
      text="new"
    )
    NioPill(
      text="value 1"
      selected-value
    )
    NioPill(
      text="tag value"
      tag
    )
    NioPill(
      price
    ) $1.50
    NioPill(
      text="tag value"
      tag
    )
    NioPill(
      text="tag value"
      tag
      append-icon
      iconName="utility-times"
    )
</template>

<script>

import NioPill from '../components/Pill'

export default {
  components: { NioPill }
};
</script>

<style lang="sass" scoped>
.test-pills
</style>