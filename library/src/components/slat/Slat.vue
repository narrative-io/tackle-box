<template lang="pug">
	.nio-slat
		.nio-slat-content
			slot(name="content")
		.nio-slat-action
			slot(name="action")
</template>

<script>

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
    
  }
}
</script>

<style lang="sass" scoped>
	@import '../../styles/mixins/slat/_slat'
</style>