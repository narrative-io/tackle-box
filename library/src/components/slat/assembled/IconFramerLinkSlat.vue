<template lang="pug">
  NioSlatLink.nio-icon-framer-link-slat
		ImageTitleSubtitle(
			:iconName="iconName"
		)
			template(v-slot:title)
				slot(name="title")
			template(v-slot:subtitle)
				slot(name="subtitle")
</template>

<script>

import NioSlatLink from '../types/SlatLink'

export default {
  name: 'icon-name-description-offset',
  props: {
		"iconName": { type: String, required: false }
  },
  data: () => ({

  }),
  mounted() {
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
  components: { NioSlat, NioIcon }
}
</script>

<style lang="sass" scoped>

</style>