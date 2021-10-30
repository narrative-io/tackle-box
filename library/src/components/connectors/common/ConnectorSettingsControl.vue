<template lang="pug">
  .nio-destination-connector-settings-control.filter
    .title-description
      .filter-title.nio-h4.text-primary-darker {{ title }}
      .description.nio-p.text-primary-dark {{ description }}
    .filter-value
      slot(name="control")
</template>

<script>


export default {
  name: 'nio-destination-connector-settings-control',
  props: {
    "title": { type: String, required: true },
    "description": { type: String, required: false }
  },
  data: () => ({
    
  }),
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
  
  }, 
  destroyed() {
    this.$emit('destroyed')
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/connectors/common/_connector-settings-control'
</style>