<template lang="pug">
	NioSlatLink.nio-slat.nio-slat-link(v-if="type === 'link'")
		
</template>

<script>

import NioSlatLink from './types/SlatLink'

export default {
  name: 'nio-slat',
  props: {
    "type": { type: String, required: false, default: 'link' },
  },
  data: () => ({

  }),
  mounted() {
  },
  methods: {
    
  },
  components: { NioSlatLink  }
}
</script>

<style lang="sass" scoped>
	@import '../../styles/mixins/slat/_slat'
</style>