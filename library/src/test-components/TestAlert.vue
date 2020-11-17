<template lang="pug">
  .test-alert
    NioAlert(
      info
      :visible="showInfo"
      message="Your mom"
      @dismiss="showInfo = false"
    )
    NioAlert(
      warning
      :visible="showWarning"
      message="Your mom"
      @dismiss="showWarning = false"
    )
</template>

<script>

import NioAlert from '../components/Alert'

export default {
  components: {
    NioAlert
  },
  data: () => ({
    showInfo: true,
    showWarning: true
  })
};
</script>

<style lang="sass" scoped>
.test-alert  
</style>