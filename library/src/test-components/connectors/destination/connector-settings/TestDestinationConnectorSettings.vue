<template lang="pug">
  .test-destination-connector-settings
    NioDestinationConnectorSettings(
      v-model="model"
    )
      template(v-slot:settings-controls)
        NioConnectorSettingsControl(
          title="Test connector settings control"
          description="Test description"
        )
          template(v-slot:control)
            NioTextField(
              v-model="test"
              label="test"
            )
      template(v-slot:external-settings-control)
        NioConnectorSettingsControl(
          title="Test external settings control"
          description="Test description"
        )
          template(v-slot:control)
            NioTextField(
              v-model="test"
              label="test"
            )

</template>

<script>

import NioDestinationConnectorSettings from '../../../../components/connectors/destination/connector-settings/DestinationConnectorSettings'
import NioConnectorSettingsControl from '../../../../components/connectors/common/ConnectorSettingsControl'
import NioTextField from '../../../../components/TextField'

export default {
  components: {
    NioDestinationConnectorSettings,
    NioConnectorSettingsControl,
    NioTextField
  },
  data: () => ({
		test: null,
		model: {
			name: null,
			description: null
		}
  }),
  methods: {
    
	},
	mounted() {
		setTimeout(() => {
			this.model = {
				name: 'change',
				description: 'change'
			}
		}, 1500);
	},
	watch: {
		model(val) {
			console.log(val)
		}
	}
};
</script>

<style lang="sass" scoped>

@import '../../../../styles/global/_colors'

::v-deep .external-settings-control
  margin-top: 24px
  border: 1px solid $c-primary-lighter
  border-radius: 12px
  overflow: hidden
</style>