<template lang="pug">
	.nio-slat
		.content
			slot(name="content")
		.action
			slot(name="action")
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