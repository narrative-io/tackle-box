<template lang="pug">
  div.text-field
    nio-text-input(:model="input" :label="'Label'")
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