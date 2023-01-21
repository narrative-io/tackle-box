<template lang="pug">
  .test-copy-to-clipboard
    .wrapper
      NioTextarea(
        v-model="text"
      )
      NioCopyToClipboard(
        :text="text"
      )
    .wrapper
      NioTextarea(
        v-model="JSON.stringify(jsonText, null, 2)"
      )
      NioCopyToClipboard(
        :text="JSON.stringify(jsonText)"
      )
         
</template>

<script>

import NioTextarea from '../components/Textarea'
import NioCopyToClipboard from '../components/CopyToClipboard'

export default {
  components: {
    NioCopyToClipboard,
    NioTextarea
  },
  data: () => ({
    text: 'Copy this text',
    jsonText: {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: {
            AWS: "arn:aws:iam::704349335716:role/narrative-s3-connector-dev"
          },
          Action: [
            "s3:DeleteObject",
            "s3:PutObject"
          ],
          Resource: "arn:aws:s3:::asdfasdfasdfadsfadsf/*"
        },
        {
          Effect: "Allow",
          Principal: {
            AWS: "arn:aws:iam::704349335716:role/narrative-s3-connector-dev"
          },
          Action: [
            "s3:List*",
            "s3:GetBucketTagging"
          ],
          Resource: "arn:aws:s3:::asdfasdfasdfadsfadsf"
        }
      ]
    }
  })
};
</script>

<style lang="sass" scoped>
  .wrapper
    position: relative
    .nio-copy-to-clipboard
      position: absolute
      top: 8px
      right: 8px
      z-index: 1
</style>