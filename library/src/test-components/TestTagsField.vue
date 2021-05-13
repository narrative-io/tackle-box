<template lang="pug">
  .test-tags-field
    NioTagsField(v-model="model" key="1")
    NioTagsField(v-model="model1" :items="items" key="2")
</template>

<script>

import NioTagsField from '../components/TagsField'

export default {
  components: {
    NioTagsField
  },
  data: () => ({
   model: [],
   model1: [],
   items: ['test', 'another']
  })
};
</script>

<style lang="sass" scoped>
.test-tags-field
  
</style>