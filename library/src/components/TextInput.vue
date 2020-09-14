<template lang="pug">
	v-text-field(:label="label" outlined @input="updateValue($event)")
</template>

<script>
  
  export default {
    name: 'nio-text-input',
    props: {
			"label": { type: String, required: false, default: "" },
    },
    methods: {
      updateValue: function (value) {
				console.log(value)
        this.$emit('input', value)
      }
    },
    components: {  }
  }
</script>

<style lang="sass">

</style>