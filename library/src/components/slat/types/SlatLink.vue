<template lang="pug">
  .nio-slat-link(@click="click")
    slot
</template>

<script>

export default {
  name: 'nio-slat-link',
  props: {
    
  },
  data: () => ({

  }),
  mounted() {
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_slat-link'
</style>