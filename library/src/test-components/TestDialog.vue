<template lang="pug">
  .test-dialog
    NioDialog(v-model="dialog")

    button(@click="dialog = true") Launch
</template>

<script>

import NioDialog from '../components/Dialog'

export default {
  components: {
    NioDialog
  },
  data: () => ({
    dialog: false
  })
};
</script>

<style lang="sass" scoped>
.test-dialog
</style>