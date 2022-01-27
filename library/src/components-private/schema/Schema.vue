<template lang="pug">
  .nio-schema
    NioExpansionPanels.root-panels(
      v-model="openPanels"
      multiple
    )
      NioExpansionPanel(
        v-for="(attribute, index) of computeAttributes"
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
            .property-settings(v-if="!hideIndicators && attributes")
              .pills-container(v-if="disableInteractions && attribute.type !== 'object' && attribute.type !=='array'")
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
              .property-actions(v-else-if="!disableInteractions")
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
          .display-row.display-table(v-if="attribute.properties || attribute.items")
            NioSchemaProperties(
              :key="index"
              :disableInteractions="disableInteractions"
              :properties="attribute.properties ? attribute.properties : { items: {...attribute.items, isArrayItems: true }}"
              :nest="1"
              :hideIndicators="hideIndicators || !attributes ? true : false"
              :showExportedOnly="!attributes || showExportedOnly"
              :isArrayDescendant="Boolean(attribute.items)"
            )
          .property-details(
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
                        v-for="value of attribute.enum"
                      ) {{ value }}
                  .nio-p.text-primary-dark(v-else) Any value
</template>

<script>

import { setSelectionRecursively, getReadableType, replacePropertyRefs, getDataTypeIconName, isExportable } from '../../modules/app/schema/attributeModule'
import NioSchemaProperties from './SchemaProperties'
import NioExpansionPanels from '../../components/ExpansionPanels'
import NioExpansionPanel from '../../components/ExpansionPanel'
import NioIcon from '../../components/icon/Icon'
import NioPill from '../../components/Pill'
import NioSwitch from '../../components/Switch'

export default {
  name: 'nio-schema',
  props: {
    "attributes": { type: Array, required: false },
    "datasets": { type: Array, required: false },
    "columnSets": { type: Array, required: false },
    "disableInteractions": { type: Boolean, required: false, default: false },
    "hideIndicators": { type: Boolean, required: false, default: false },
    "showExportedOnly": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    openPanels: []
  }),	
  computed: {
    computeAttributes() {
      if (this.attributes && this.attributes.length > 0) {
        if (this.showExportedOnly) {
          const exportable = []
          this.attributes.map(attribute => {
            if (isExportable(attribute)) {
              exportable.push(attribute)
            }
          })
          return exportable
        } else {
          return this.attributes
        }
      } else if (this.datasets && this.datasets.length > 0 && this.columnSets && this.columnSets.length > 0) { // TODO Add support for nested column sets when available in seller studio
        const attributes = []
        this.columnSets.forEach(columnSet => {
          const dataset = this.datasets.find(dataset =>  dataset.id === columnSet.dataset_id)
          columnSet.fields.forEach(field => {
            if (field.exported) {
              attributes.push({
                ...dataset.schema.properties[field.field],
                display_name: field.field
              })
            }
          })
        })
        return attributes
      }
    }
  },
  methods: {
    getPropertyType(property) {
      return getReadableType(property)
    },
    dataTypeIconName(dataType) {
      return getDataTypeIconName(dataType)
    },
    updateRootPayload(property, selectionType, value) {
      if (selectionType === 'deliverable') {
        setSelectionRecursively(property, 'filterable', value)
      }
      setSelectionRecursively(property, selectionType, value)
    }
  },
  components: { NioSchemaProperties, NioExpansionPanels, NioExpansionPanel, NioIcon, NioPill, NioSwitch }
}
</script>

<style lang="sass" scoped>
@import '../../styles-private/schema/_schema'
</style>