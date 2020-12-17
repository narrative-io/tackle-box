<template lang="pug">
  .nio-slat
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
  props: {

  },
  data: () => ({

  }),
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/slat/_slat'
</style>