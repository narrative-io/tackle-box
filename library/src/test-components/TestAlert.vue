<template lang="pug">
  .test-alert
    NioAlert(
      :key="0"
      info
      :visible="showInfo"
      message="Your mom"
      @dismiss="showInfo = false"
    )
    NioAlert(
      :key="1"
      warning
      :visible="showWarning"
      message="Your mom"
      @dismiss="showWarning = false"
    )
    NioAlert(
      :key="2"
      warning
      :visible="showWarning"
      :messageTitle="messageTitle"
      :message="longMessage"
      :dismissable="false"
      :linkText="'MORE INFO'"
      :linkHref="'http://www.google.com'"
    )
    NioAlert(
      :key="3"
      :visible="showInfo"
      @dismiss="showInfo = false"
    )
      .nio-p.text-primary-darker Custom Content Dismissable

    NioAlert(
      :key="4"
      :visible="showInfo"
      @dismiss="showInfo = false"
      :dismissable="false"
    )
      .nio-p.text-primary-darker Custom Content Non-Dismissable
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
</style>