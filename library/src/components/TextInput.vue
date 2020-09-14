<template lang="pug">
	v-text-field(v-model="model" :label="label" outlined)
</template>

<script>
  
  export default {
    name: 'nio-text-input',
    props: {
			"model": { type: Object, required: true },
			"label": { type: String, required: false, default: "" },
    },
    methods: {
      
    },
    components: {  }
  }
</script>

<style lang="sass">

</style>