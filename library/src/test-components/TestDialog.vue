<template lang="pug">
  .test-dialog
    NioDialog(v-model="dialog1" @destroyed="destroyed")
      button(@click="dialog1 = false") Close
    NioDialog(v-model="dialog2" maxWidth="400px")
    NioDialog(v-model="dialog3" maxWidth="700px")
      .long-container
    button(@click="dialog1 = true") Launch 1
    br
    button(@click="dialog2 = true") Launch 2
    br
    button(@click="dialog3 = true") Launch 3
</template>

<script>

import NioDialog from '../components/Dialog'

export default {
  components: {
    NioDialog
  },
  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false
  }),
  methods: {
    destroyed() {
      console.log("destroyed")
    }
  }
};
</script>

<style lang="sass" scoped>
.test-dialog
  .long-container
    height: 1500px
    background-color: #efefef
</style>