<template lang="pug">
  .test-destination-connector-settings
    NioDestinationConnectorSettings(
      @detailsChanged="detailsChanged($event)"
    )
      template(v-slot:settings-controls)
        NioConnectorSettingsControl(
          title="Test title"
          description="Test description"
        )
          template(v-slot:control)
            .test Hello

</template>

<script>

import NioDestinationConnectorSettings from '../../../../components/connectors/destination/connector-settings/DestinationConnectorSettings'
import NioConnectorSettingsControl from '../../../../components/connectors/common/ConnectorSettingsControl'

export default {
  components: {
    NioDestinationConnectorSettings,
    NioConnectorSettingsControl
  },
  data: () => ({
   
  }),
  methods: {
    detailsChanged(event) {
      console.log(event)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>