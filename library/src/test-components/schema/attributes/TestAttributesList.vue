<template lang="pug">
  .test-attributes-schema
    NioAttributesList(
      :attributes="attributes"
      :displayOnly="true"
      :hideIndicators="true"
    )

</template>

<script>

import NioAttributesList from '../../../components-private/schema/attributes/AttributesList'

export default {
  components: {
    NioAttributesList
  },
  data: () => ({
    attributes: [{ "id": 29, "description": "A catch-all field for any miscellaneous identifier.", "display_name": "Unique Identifier", "name": "unique_id", "type": "object", "properties": { "type": { "type": "string", "deliverable": true, "filterable": true }, "value": { "type": "string", "deliverable": true, "filterable": true }, "context": { "type": "string", "deliverable": true, "filterable": true } }, "required": [ "value" ], "deliverable": false, "filterable": false }, { "id": 45, "description": "The timestamp of a recorded event", "display_name": "Event Timestamp", "name": "event_timestamp_v2", "type": "timestamptz", "deliverable": true, "filterable": true }, { "id": 75, "description": "A string representing the device (can include model, os, os version, etc)", "display_name": "User Agent", "name": "user_agent", "type": "string", "deliverable": true, "filterable": true } ]
  })
};
</script>

<style lang="sass" scoped>
</style>