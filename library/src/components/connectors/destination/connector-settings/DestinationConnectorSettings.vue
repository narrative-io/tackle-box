<template lang="pug">
  .nio-destination-connector-settings
    .sub-container
      .name.filter
        .title-description
          .filter-title.nio-h4.text-primary-darker Profile Name
          .description.nio-p.text-primary-dark Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.
        .filter-value
          NioTextField(
            label="Profile Name"
            v-model="model.name"
            @update="updateModel"
          )
      .description.filter
        .title-description
          .filter-title.nio-h4.text-primary-darker Description
          .description.nio-p.text-primary-dark Maecenas faucibus mollis interdum.
        .filter-value
          NioTextField(
            label="Profile Description"
            v-model="model.description"
            @update="updateModel"
          )

</template>

<script>

import NioTextField from '../../../TextField'

export default {
  name: 'nio-destination-connector-settings',
  props: {
    
  },
  data: () => ({
    model: {
      name: null,
      description: null
    }
  }),
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    updateModel() {
      this.$emit('detailsChanged', this.model)
    }
  }, 
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../../../styles/mixins/connectors/destination/connector-settings/_destination-connector-settings'
</style>