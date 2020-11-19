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
    "stepName": { type: String, required: true},
    "stepIndex": { type: String, required: true},
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