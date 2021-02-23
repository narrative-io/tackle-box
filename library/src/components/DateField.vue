<template lang="pug">
    .nio-date-field
      v-menu(
        v-model="fromDateMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      )
        template(v-slot:activator="{ on }")
          v-text-field(
            label="From Date"
            prepend-icon="event"
            readonly
            :value="fromDateDisp"
            v-on="on"
          )
        v-date-picker(
          locale="en-in"
          :min="minDate"
          :max="maxDate"
          v-model="fromDateVal"
          no-title
          @input="fromDateMenu = false"
        )  
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
    fromDateMenu: false,
    fromDateVal: null,
    minDate: "2019-07-04",
    maxDate: "2019-08-30"
  }),
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
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

