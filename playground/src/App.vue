<template lang="pug">
  .v-application--wrap
    nio-text-field.text-field(v-model="model" :label="'Label'")
</template>

<script>
import { NioButton, NioTextField } from "../../library/dist/tackle-box.umd";
export default {
  name: 'App',
  data: () => ({
    model: ""
  }),
  methods: {
  
  },
  components: { NioButton, NioTextField }
}
</script>

<style lang="sass" scoped>
@import '../../library/src/styles/global/_breakpoints'
@import '../../library/src/styles/global/_fonts'
@import '../../library/src/styles/global/_typography'
@import '../../library/src/styles/mixins/_button'
@import '../../library/src/styles/mixins/_text-field.sass'
* 
  font-family: 'Euclid Circular A'
</style>
