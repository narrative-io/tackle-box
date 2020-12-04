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
    NioAlert(
      warning
      :visible="showWarning"
      :messageTitle="messageTitle"
      :message="longMessage"
      :dismissable="false"
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
    showWarning: true,
    messageTitle: 'The security of your data comes first. ',
    longMessage: 'Before uploading your data to Narrative’s servers, your data will be hashed from your computer, locally, to keep your data safe from prying eyes.'
  })
};
</script>

<style lang="sass" scoped>
.test-alert  
</style>