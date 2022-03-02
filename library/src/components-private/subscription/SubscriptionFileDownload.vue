<template lang="pug">
.nio-subscription-file-download
  .download-container(v-if="fileDeliveries && fileDeliveries.length")
    .preparing-download(v-if="preparingDownload")
      v-progress-circular(
        :color="primaryColor"
        indeterminate
      )
    NioSlatTable(
      v-if="columns && fileDeliveries"
      :items="fileDeliveries"
      :columns="columns"
      :initial-items-per-page="5"
      action="custom"
      pagination
    )
      template(v-slot:custom-action="slotProps") 
        NioButton(
          normal-secondary
          @click="downloadFile(slotProps.item)"
        ) Download
  .no-downloads(
    v-else-if="!loading && fileDeliveries && !fileDeliveries.length"
  )
    NioIconFramer(iconName="display-sources")
    h3.nio-h3.text-primary-darker Your order is being processed
    p.nio-p.text-primary-dark When your first file is ready it will appear here. This might take up to 24 hours.
    NioButton(
      normal-secondary
      @click="learnMore"
    ) Learn about file deliveries
  .loading(
    v-else
  )
    v-progress-circular(
      :color="primaryColor"
      indeterminate
    )
</template>

<script>

import NioButton from '../../components/Button'
import NioIconFramer from '../../components/icon/IconFramer'
import NioSlatTable from '../../components/table/SlatTable'
import { getThemeColor } from '@/modules/app/theme/theme'
import axios from 'axios'

export default {
  name: 'nio-subscription-file-download',
  components: { NioButton, NioIconFramer, NioSlatTable },
  props: {
    subscription: { type: Object, required: true },
    openApiToken: { type: String, required: true },
    openApiBaseUrl: { type: String, required: true }
  },
  data: () => ({
    fileDeliveries: null,
    loading: null,
    preparingDownload: false
  }),
  computed: {
    primaryColor() {
      return getThemeColor('primary')
    }
  },
  mounted() {
    this.reqHeaders = {
      headers: {
        'Authorization': `Bearer ${this.openApiToken}`
      }
    }
    this.getDeliveries()
    this.makeColumns()
  },
  methods: {
    getDeliveries() {
      axios.get(`${this.openApiBaseUrl}/data-shops/subscriptions/${this.subscription.id}/deliveries`, this.reqHeaders).then(resp => {
        this.fileDeliveries = resp.data.records
        this.loading = false
      })
    },
    makeColumns() {
      this.columns = [
        {
          name: "slat",
          props: {
            title: 'filename',
            subtitle: this.computeFilename
          }
        },
        {
          name: "type",
          label: "Expiration",
          computed: this.computeExpiration
        }
      ]
    },
    
// 		const a = '2022-02-08T19:51:00Z'

    // const momentDate = moment.utc(a).format("YYYY-MM-DD")

    // const timestamp = new Date(a)
    // const year = timestamp.getUTCFullYear()
    // let month = timestamp.getUTCMonth() + 1
    // month = String(month).length === 1 ? `0${month}` : month
    // let date = timestamp.getUTCDate()
    // date = String(date).length === 1 ? `0${date}` : date
    // const js = `${year}-${month}-${date}`

    // console.log("moment")
    // console.log(momentDate)
    // console.log("js")
    // console.log(js)
    computeFilename(item) {
      if (item.file) {
        return item.file
      }
      const timestamp = new Date(a)
      const year = timestamp.getUTCFullYear()
      let month = timestamp.getUTCMonth() + 1
      month = String(month).length === 1 ? `0${month}` : month
      let date = timestamp.getUTCDate()
      date = String(date).length === 1 ? `0${date}` : date
      const deliveryDate = `${year}-${month}-${date}`
            /*
       * `transactionBatchId` is a UUID. The first 8 characters of the UUID encode the the lowest 32 bits of the time
       * input to the UUID generation algorithm. It'll be safe for a long time to assume that no two batch ids for the
       * same order will be generated at the same microsecond, and we'd expect to only see collisions after ~2^16
       * deliveries for the same order **in a single day**. So this is fine.
       */
      const identifier = item.transactionBatchId.slice(0, 8)
      return `${this.subscription.name}-${deliveryDate}-${identifier}.csv`
    },
    computeExpiration(item) {
      const expiration = new Date(item.timestamp)
      expiration.setDate(expiration.getDate() + 30)
      return `${this.dateDiff(expiration, new Date())} days from today`
    },
    dateDiff(d2, d1) {
      let t2 = d2.getTime()
      let t1 = d1.getTime()
      return Math.floor((t2-t1)/(24*3600*1000));
    },
    downloadFile(fileDelivery) {
      this.preparingDownload = true
      // Only way we have to check if this is a datastream
      if (fileDelivery.file) {
        let req = {
          transaction_batch_id: fileDelivery.transaction_batch_id,
          file: fileDelivery.file,
          file_name_override: this.computeFilename(fileDelivery)
        }
        axios.post(`${this.openApiBaseUrl}/data-shops/subscriptions/${this.subscription.id}/deliveries/download`, req, this.reqHeaders).then(resp => {
          this.downloadUrl(resp.data.download_url)
        })
        return
      }
    },
    downloadUrl(url) {
      const a = document.createElement('a')
      a.href = url
      // NB: we can't overwrite the file name here because the request is cross origin and the Content-Disposition
      // header is part of what AWS signs to verify the presigned S3 download URL so we can't tamper with it.
      a.download = ''
      a.style.display = 'none';
      document.body.append(a)
      a.click()

      // According to the interwebz: Chrome requires this timeout
      this.delay(500)
        .then(() => {
          a.remove()
          this.preparingDownload = false
        })
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    learnMore() {
      window.open('https://kb.narrative.io/narrative-file-downloads', '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>

@import "../../styles-private/subscription/_subscription-file-download"
  
</style>