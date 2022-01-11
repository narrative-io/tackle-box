<template lang="pug">
  .nio-filter-join-option
    .heading.nio-h5.text-primary-darker Your Datasets
    .description.nio-p.text-primary-dark Curabitur blandit tempus porttitor.
    .custom-option
      NioSelect(
        v-model="filter.joinOption.value"
        :items="filter.joinOption.datasets"
      )
</template>

<script>


export default {
  name: 'nio-filter-join-option',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
  }),
  computed: {
  
  },
  mounted() {
  },
  watch: {
   
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-join-option'  
</style>