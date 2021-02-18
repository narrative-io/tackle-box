<template lang="pug">
  .nio-filter-group
    slot
</template>

<script>


export default {
  name: 'nio-filter-group',
  props: {
  },
  data: () => ({

	})
}
</script>

<style lang="sass" scoped>
	@import '@/styles/mixins/filter/_filter-group'  
</style>