<template lang="pug">
  v-expansion-panel-header.nio-step-header(
    :class="{'nio-step-complete': complete}"
  )
    .slat-here
      .index {{ stepIndex }}
      .name {{ stepName }}

</template>

<script>


export default {
  name: 'nio-step-header',
  props: {
    "stepName": { type: Array, required: true},
    "stepIndex": { type: Number, required: true},
    "complete": { type: Boolean, required: false, default: false}
  },
  data: () => ({

  }),
  mounted() {

},
  methods: {
    
  },
  components: {  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step-header'  
</style>