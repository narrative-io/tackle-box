<template lang="pug">
  .nio-slat
    template(v-if="$scopedSlots['custom-content']")
      slot(name="custom-content")
    template(v-else)
      .nio-slat-content
        slot(name="content")
      .nio-slat-summary
        slot(name="summary")
      .nio-slat-action
        slot(name="action")
      .nio-slat-loading(v-if="$scopedSlots.loading")
        slot(name="loading")
</template>

<script>

export default {
  name: 'nio-slat',
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/slat/_slat'
</style>