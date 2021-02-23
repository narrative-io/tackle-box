<template lang="pug">
    v-date-picker.nio-date-field(
   
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
      slot  
</template>

<script>

export default {
  name: 'nio-date-field',
  props: {
    "model": { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
   
  }),
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      // if (attributes.getNamedItem('append')) {
      //   this.appendAttr = true
      // }	
    },
  },
  mounted() {	
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_date-field'  
</style>

