<template lang="pug">
  .test-text-field
    nio-textarea.text-field(small v-model="model" rows="5" label="label")
    nio-textarea.text-field(
      small 
      :rules="[rules.required]"
      validate-on-blur
      v-model="validateModel" 
      placeholder="stuff"
    )

</template>

<script>

import NioTextarea from '../components/Textarea'

export default {
  components: {
    NioTextarea
  },
  data: () => ({
    model: null,
    validateModel: null,
    rules: {
      required(value) {
        return !!value || 'Required'
      }
    }
  })
};
</script>

<style lang="sass" scoped>
  
</style>