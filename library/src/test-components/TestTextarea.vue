<template lang="pug">
  .test-text-field
    nio-textarea.text-field(small v-model="model" rows="5")
    nio-textarea.text-field(
      small 
      :rules="[rules.required]"
      validate-on-blur
      v-model="model" 
    )

</template>

<script>

import NioTextarea from '../components/Textarea'

export default {
  components: {
    NioTextarea
  },
  data: () => ({
    model: "stuff",
    rules: {
      required(value) {
        return !!value || 'Required'
      }
    }
  })
};
</script>

<style lang="sass" scoped>
.test-textarea

  
</style>