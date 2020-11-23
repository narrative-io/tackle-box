<template lang="pug">
  .nio-slat-table
  
</template>

<script>

export default {
  name: 'nio-slat-table',
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    "filters": { type: Array, required: false, default: []},
    "action": { type: String, required: false, default: "menu"}, // menu | link | expand
    "selection": { type: String, required: false, default: "none"}, // none | single | multiple
  },
  data: () => ({
    searchable: false,
    multiple: false
  }),
  mounted() {
  },
  methods: {
    applyHelperMethods() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('paginate')) {
        this.paginate = true
      }
      if (attributes.getNamedItem('filter')) {
        this.filter = true
      }
    }
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table'  
</style>