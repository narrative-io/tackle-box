<template lang="pug">
  .attributes-list
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
            .property-settings
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
    "displayOnly": { type: Boolean, required: false, default: false }

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

@import "../../../styles/global/_colors"
@import "../../../styles-private/schema/attributes/_display-row"
@import "../../../styles-private/schema/attributes/_property-settings"

.attributes-list
  margin-top: 1rem
  .nio-expansion-panels.root-panels
    margin-top: 0.5rem
    width: 100%
    border-radius: 0rem
    border-left: none
    border-right: none
    overflow: hidden
    .nio-expansion-panel
      background-color: $c-canvas
      padding-right: 1rem
  ::v-deep .v-expansion-panel-header
    padding-left: 0rem
    padding-right: 0rem
  ::v-deep .v-expansion-panel-content__wrap
    padding: 0rem !important
  .root-panels ::v-deep .v-expansion-panel-header
    display: flex
    justify-content: space-between
  ::v-deep .v-expansion-panel-content
    padding: 0rem !important
    background-color: $c-canvas !important
  .attribute-details
    padding: 1.5rem 0rem 2rem 0rem
    display: flex
    .details-content
      display: flex
      flex-direction: column
      flex-grow: 2
  .display-row // TODO Refactor into mixin
    +nio-display-row
    .enum
      margin-top: 1.5rem
  .header-content
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
    flex-grow: 2
    .header-summary // TODO refactor into mixin
      display: flex
      align-items: center
      height: 100%
      .nio-slat-image 
        margin-right: 1rem  
        width: 3rem
        height: 3rem 
        justify-content: center
        align-items: center
        display: flex
        background-color: $c-canvas
        border: 0.0625rem solid $c-primary-lighter
        border-radius: 0.25rem            
      .nio-slat-title-subtitle
        display: flex
        flex-direction: column
        justify-content: center
        .nio-slat-title
          white-space: pre-wrap
          width: 33.75rem
        .nio-slat-subtitle
          white-space: pre-wrap
          width: 33.75rem
          margin-top: 0.25rem
    .property-settings
      +nio-property-settings
</style>