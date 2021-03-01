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