<template lang="pug">
  .test-tags-field
    NioTagsField(v-model="model")
</template>

<script>

import NioTagsField from '../components/TagsField'

export default {
  components: {
    NioTagsField
  },
  data: () => ({
   model: [],
  })
};
</script>

<style lang="sass" scoped>
.test-tags-field
  
</style>