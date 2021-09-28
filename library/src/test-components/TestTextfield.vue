<template lang="pug">
  .test-text-field
    nio-text-field.text-field(
      v-model="nullModel" 
      label="search" 
      placeholder="stuff"
      :rulesWithContext="[rules.required]"
      validate-on-blur
    )
    nio-text-field.text-field(
      v-model="minLengthModel" 
      label="search" 
      placeholder="stuff"
      :rules="[requiredMethod]"
      validate-on-blur
    )
    nio-text-field.text-field(small v-model="nullModel" label="search" placeholder="stuff")
    nio-text-field.text-field(small v-model="model" label="search" placeholder="stuff")
    nio-text-field.text-field(search-small v-model="model" label="search" placeholder="hello")
    nio-text-field.text-field(search-small-subdued v-model="model" label="search" placeholder="hello")
    nio-text-field.text-field(prepend iconName="utility-dollar-sign" :ref="'text'" v-model="model" :label="'Search'" solo)
    nio-text-field.text-field(prepend iconName="utility-check-circle" :ref="'text'" v-model="model" :label="'Search'")
    nio-text-field.text-field(:ref="'text'" v-model="model" value="test" :label="'Label'")
    nio-text-field.text-field(name="test" :ref="'text'" v-model="model" :label="'Label'" placeholder="test")
    nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" disabled)
    nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" error)
    nio-text-field.text-field(:ref="'text'" v-model="model" :label="'Label'" solo)
    nio-text-field.text-field(append iconName="utility-chevron-down" solo :ref="'text'" v-model="model" :label="'Search'")
    nio-text-field.text-field(append iconName="utility-chevron-down" :ref="'text'" v-model="model" :label="'Search'")
    nio-text-field.text-field(currency type="number" :ref="'text'" v-model="currency")
    nio-text-field(
      hide-details
      clearable
      solo
      append
      iconName="utility-search"
      v-model="model" label="search"
    )

</template>

<script>

import NioTextField from '../components/TextField'

export default {
  components: {
    NioTextField
  },
  data: () => ({
    model: "02-12-2021",
    minLength: 4,
    minLengthModel: null,
    currency: 1,
    nullModel: null,
    rules: {
      required: function(value) { 
        return !!value || 'Required' 
      }
    }
  }),
  methods: {
    requiredMethod(value) {
      if (!value) {
        return 'enter something'
      } else if (value.length < this.minLength) {
        return 'at least 4 characters required'
      } else {
        return true
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.test-text-field
  
</style>