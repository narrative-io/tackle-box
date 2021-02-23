<template lang="pug">
	.test-text-field
		//- nio-text-field.text-field(small v-model="model" label="search" placeholder="hello")
		//- nio-text-field.text-field(search-small v-model="model" label="search" placeholder="hello")
		//- nio-text-field.text-field(search-small-subdued v-model="model" label="search" placeholder="hello")
		//- nio-text-field.text-field(prepend iconName="utility-dollar-sign" :ref="'text'" v-model="model" :label="'Search'" solo)
		//- nio-text-field.text-field(prepend iconName="utility-dollar-sign" :ref="'text'" v-model="model" :label="'Search'")
		//- nio-text-field.text-field(:ref="'text'" v-model="model" value="test" :label="'Label'")
		//- nio-text-field.text-field(name="test" :ref="'text'" v-model="model" :label="'Label'")
		//- nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" disabled)
		//- nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" error)
		//- nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" solo)
		nio-text-field.text-field(append iconName="utility-chevron-down" solo :ref="'text'" v-model="model" :label="'Search'")
		nio-text-field.text-field(append iconName="utility-chevron-down" :ref="'text'" v-model="model" :label="'Search'")
</template>

<script>

import NioTextField from '../components/TextField'

export default {
  components: {
    NioTextField
  },
  data: () => ({
		model: "02-12-2021"
  })
};
</script>

<style lang="sass" scoped>
.test-text-field
  
</style>