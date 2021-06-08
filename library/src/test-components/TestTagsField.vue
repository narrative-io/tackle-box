<template lang="pug">
  .test-tags-field
    NioTagsField(v-model="model" key="1")
    NioTagsField(v-model="model1" :items="items" key="2")
    NioTagsField(v-model="filledModel" key="3")
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
   filledModel: ['test', 'stuff'],
   items: ['test', 'another']
  })
};
</script>

<style lang="sass" scoped>
.test-tags-field
  
</style>