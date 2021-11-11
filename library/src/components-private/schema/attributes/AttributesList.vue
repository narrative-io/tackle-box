<template lang="pug">
  .nio-attributes-list
    NioExpansionPanels.root-panels(
      v-model="openPanels"
      multiple
    )
      NioExpansionPanel(
        v-for="(attribute, index) of attributes"
        :key="index"
      )
        template(v-slot:header) 
          .header-content
            .header-summary
              .nio-slat-image
                NioIcon(
                  :name="dataTypeIconName(attribute.type)"
                  :size="24"
                  color="#AEB9E8"
                )
              .nio-slat-title-subtitle
                .nio-slat-title.nio-h4.text-primary-darker.nio-bold  {{ attribute.display_name }}
                .nio-slat-subtitle.nio-p.text-primary-dark(v-if="attribute.description") {{ attribute.description}}
            .property-settings(v-if="!hideIndicators")
              .pills-container(v-if="displayOnly && attribute.type !== 'object' && attribute.type !=='array'")
                NioPill(
                  list-item
                  prepend-icon
                  :iconName="attribute.deliverable ? 'utility-check-circle' : 'utility-times-circle'"
                  :iconColor="attribute.deliverable ? '#43B463' : '#AEB9E8'"
                  :class="attribute.deliverable ? '' : 'negative'"
                ) Deliverable
                NioPill(
                  list-item
                  prepend-icon
                  :iconName="attribute.filterable ? 'utility-check-circle' : 'utility-times-circle'"
                  :iconColor="attribute.filterable ? '#43B463' : '#AEB9E8'"
                  :class="attribute.filterable ? '' : 'negative'"
                ) Filterable
              .property-actions(v-else-if="!displayOnly")
                NioSwitch(
                  @click.stop=""
                  v-model="attribute.deliverable"
                  @update="updateRootPayload(attribute, 'deliverable', $event)"
                )
                .nio-p-small.text-primary-dark Deliverable
                NioSwitch(
                  @click.stop=""
                  v-model="attribute.filterable"
                  @update="updateRootPayload(attribute, 'filterable', $event)"
                ) 
                .nio-p-small.text-primary-dark Filterable  
        template(v-slot:content) 
          .display-row.display-table(v-if="attribute.properties")
            NioAttributeProperties(
              :key="index"
              displayOnly
              :properties="attribute.properties"
              :nest="1"
              :hideIndicators="hideIndicators"
            )
          .attribute-details(
            v-else 
          )
            .details-content
              .display-row.display-table
                .display-column.type
                  .nio-h7.text-primary-darker Type
                  .nio-p.text-primary-dark {{ getPropertyType(attribute) }}
              .display-row.display-table
                .display-column.enum
                  .nio-h7.text-primary-darker Supported Values
                  .nio-p.text-primary-dark(v-if="attribute.enum") 
                    .pills
                      NioPill(
                        tag
                        v-for="value of propertiesattribute.enum"
                      ) {{ value }}
                  .nio-p.text-primary-dark(v-else) Any value
</template>

<script>

import { getReadableType, replacePropertyRefs, getDataTypeIconName } from '../../../modules/app/attribute/attributeModule'
import NioAttributeProperties from './AttributeProperties'
import NioExpansionPanels from '../../../components/ExpansionPanels'
import NioExpansionPanel from '../../../components/ExpansionPanel'
import NioIcon from '../../../components/icon/Icon'
import NioPill from '../../../components/Pill'
import NioSwitch from '../../../components/Switch'

export default {
  props: {
    "attributes": { type: Array, required: true },
    "displayOnly": { type: Boolean, required: false, default: false },
    "hideIndicators": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    openPanels: []
  }),	
  methods: {
    getPropertyType(property) {
      return getReadableType(property)
    },
    dataTypeIconName(dataType) {
      return getDataTypeIconName(dataType)
    }
  },
  components: { NioAttributeProperties, NioExpansionPanels, NioExpansionPanel, NioIcon, NioPill, NioSwitch }
}
</script>

<style lang="sass" scoped>
@import '../../../styles-private/schema/attributes/_attributes-list'
</style>