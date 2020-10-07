<template lang="pug">
    .nio-icon
</template>

<script>
  export default {
    name: 'nio-icon',
    props: {
      "streamlineCollection": { required: true },
      "streamlineIconName": { required: true }
    },
    data: () => ({

    }),
    methods: {
		 
		},
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>

</style>