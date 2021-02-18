<template lang="pug">
  v-expansion-panels.nio-filter-group(accordion)
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