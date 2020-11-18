<template lang="pug">
  .icon-title-subtitle
		NioIconFramer(
			v-if="iconName"
			:iconName="iconName"
		)
		NioImageTile(
			v-ele
			:src="iconSrc"
			size="small"
		)
		.title-subtitle
			.title.nio-h5.text-primary-darker {{ title }}
				slot(name="title")
			.subtitle.nio-p-small.text-primary-dark {{ subtitle }}
				slot(name="subtitle")
</template>

<script>

import NioSlat from '../Slat'
import NioIcon from '../../icon/Icon'

export default {
  name: 'icon-name-description-offset',
  props: {
		"iconSrc": { type: String, required: false },
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