<template lang="pug">
  div.text-field
    nio-text-field(v-model="input" :label="'Label'")
    .result Value: {{ input }}
</template>

<script>

export default {
  data: () => ({
    input: ""
  })
}	
</script>

<style lang="sass">
  @import '../../../../src/styles/mixins/_button'
  .buttons
    padding: 0px 0px 40px 0px
    h3
      margin: 30px 0px
      // color: #888
    & > *
      margin-top: 20px
</style>