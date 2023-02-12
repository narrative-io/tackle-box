<template lang="pug">
  .test-ttd-taxonomy {{ error }}
    
</template>

<script>

import { getExistingTTDTaxonomy } from '@/modules/app/ttd-taxonomy/ttdTaxonomyModule'
import { headers, baseUrl, companyId} from '@/modules/app/ttd-taxonomy/auth'

export default {
  components: {
  },
  data: () => ({
    error: null
  }),
  async mounted() {
    try {
      const resp = getExistingTTDTaxonomy(headers, baseUrl, companyId)
      console.log(resp)
    } catch (error) {
      console.log("ERROR: ", error)
      this.error = error
    }
  },
  methods: {
    
  }
};
</script>

<style lang="sass" scoped>
</style>