<template lang="pug">
  .nio-destination-connector-settings
    .sub-container
      .name.filter
        .title-description
          .filter-title.nio-h4.text-primary-darker Profile Name
          .description.nio-p.text-primary-dark The name used to identify your bucket during profile management and checkout processes.
        .filter-value
          NioTextField(
            v-model="localModel.name"
            :rules="[rules.required]"
            label="Profile Name"
            validate-on-blur
          )
      .description.filter
        .title-description
          .filter-title.nio-h4.text-primary-darker Description
          .description.nio-p.text-primary-dark A short description of this profile.
        .filter-value
          NioTextarea(
            v-model="localModel.description"
            :rules="[rules.required]"
            label="Profile Description"
            validate-on-blur
          )
      slot(name="settings-controls")
    .external-settings-control(v-if="$slots['external-settings-control']")
      slot(name="external-settings-control")
</template>

<script>

import NioTextField from '../../../TextField'
import NioTextarea from '../../../Textarea'

export default {
  name: 'nio-destination-connector-settings',
  components: { NioTextField, NioTextarea },
  props: {
    "model": { required: true }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    localModel: {
      name: null,
      description: null
    },
    rules: {
      required: function(value) { return !!value || 'Required' }
    }
  }),
  watch: {
    localModel: {
      deep: true,
      handler(val) {
        this.update(val)
      }
    },
    model: {
      deep: true,
      handler(val) {
         this.localModel = val
      }
    }
  },
  mounted() {
    this.localModel = this.model
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    update() {
      this.$emit('update', this.localModel)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../../styles/mixins/connectors/destination/connector-settings/_destination-connector-settings'
</style>