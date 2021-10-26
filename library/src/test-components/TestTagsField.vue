<template lang="pug">
  .test-tags-field
    NioTagsField(v-model="model" key="1")
    NioTagsField(v-model="model1" :items="items" key="2")
    NioTagsField(v-model="filledModel" key="3")
    NioTagsField(v-model="intModel" dataType="long" key="4")
    NioTagsField(v-model="floatModel" dataType="double" key="5")
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
   intModel: [],
   floatModel: [],
   filledModel: ['test', 'stuff'],
   delayModel: ['sometimes', 'orange', 'yes'],
   items: ['test', 'another']
  }),
  mounted() {
    setTimeout(() => {
      this.filledModel = this.delayModel
    }, 1000)
  }
};
</script>

<style lang="sass" scoped>

</style>