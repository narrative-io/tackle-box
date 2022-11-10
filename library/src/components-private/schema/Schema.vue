<template lang="pug">
  .nio-schema
    NioExpansionPanels.root-panels(
      v-if="openPanels"
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
                v-menu(
                  :content-class="makeTooltipContentClass(attribute.type)"
                  :open-delay="250"
                  open-on-hover
                  open-on-click
                  right
                ) 
                  template(v-slot:activator="{ on, attrs }")
                    div(
                      v-bind="attrs"
                      v-on="on"
                    )
                      NioIcon(
                        :name="dataTypeIconName(attribute)"
                        :size="24"
                        color="#AEB9E8"
                      )
                  .content
                    .nio-h4.text-primary-darker Data type:
                    .nio-p.text-primary-dark {{ getPropertyType(attribute) }} 
              .nio-slat-title-subtitle
                .nio-slat-title.nio-h4.text-primary-darker.nio-bold  {{ attribute.display_name }}
                .nio-slat-subtitle.nio-p.text-primary-dark(v-if="attribute.description") {{ attribute.description}}
            .property-settings(v-if="!hideIndicators && attributes")
              .pills-container(v-if="disableInteractions && attribute.type !== 'object' && attribute.type !=='array'")
                NioPill(
                  :iconName="attribute.deliverable ? 'utility-check-circle' : 'utility-times-circle'"
                  :iconColor="attribute.deliverable ? '#43B463' : '#AEB9E8'"
                  :class="attribute.deliverable ? '' : 'negative'"
                  list-item
                  prepend-icon
                ) Deliverable
                NioPill(
                  :iconName="attribute.filterable ? 'utility-check-circle' : 'utility-times-circle'"
                  :iconColor="attribute.filterable ? '#43B463' : '#AEB9E8'"
                  :class="attribute.filterable ? '' : 'negative'"
                  list-item
                  prepend-icon
                ) Filterable
              .property-actions(v-else-if="!disableInteractions")
                NioSwitch(
                  v-if="attribute.type !== 'binary'"
                  v-model="attribute.deliverable"
                  :check-descendant="checkIfDescendantSelected(attribute,'deliverable')"
                  @click.stop=""
                  @update="updateRootPayload(attribute, 'deliverable', $event)"
                )
                .nio-p-small.text-primary-dark(v-if="attribute.type !== 'binary'") Deliverable
                NioSwitch(
                  v-model="attribute.filterable"
                  :check-descendant="checkIfDescendantSelected(attribute,'filterable')"
                  @click.stop=""
                  @update="updateRootPayload(attribute, 'filterable', $event)"
                ) 
                .nio-p-small.text-primary-dark Filterable  
        template(v-slot:content) 
          .display-row.display-table(v-if="attribute.properties || attribute.items")
            NioSchemaProperties(
              :key="index"
              :disable-interactions="disableInteractions"
              :properties="attribute.properties ? attribute.properties : { items: {...attribute.items, isArrayItems: true }}"
              :nest="1"
              :hide-indicators="hideIndicators || !attributes ? true : false"
              :show-exportedOnly="!attributes || showExportedOnly"
              :is-array-descendant="Boolean(attribute.items)"
              :hide-optional-properties="hideOptionalProperties"
              :required-property-names="attribute.required"
              :expanded-by-default="expandedByDefault"
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

import { setSelectionRecursively, getReadableType, replacePropertyRefs, getDataTypeIconName, isExportable, checkIfDescendantSelected } from '../../modules/app/schema/attributeModule'
import NioSchemaProperties from './SchemaProperties'
import NioExpansionPanels from '../../components/ExpansionPanels'
import NioExpansionPanel from '../../components/ExpansionPanel'
import NioIcon from '../../components/icon/Icon'
import NioPill from '../../components/Pill'
import NioSwitch from '../../components/Switch'

export default {
  name: 'nio-schema',
  components: { NioSchemaProperties, NioExpansionPanels, NioExpansionPanel, NioIcon, NioPill, NioSwitch },
  props: {
    "attributes": { type: Array, required: false },
    "datasets": { type: Array, required: false },
    "columnSets": { type: Array, required: false },
    "disableInteractions": { type: Boolean, required: false, default: false },
    "hideIndicators": { type: Boolean, required: false, default: false },
    "showExportedOnly": { type: Boolean, required: false, default: false },
    "hideOptionalProperties": { type: Boolean, required: false, default: false },
    "expandedByDefault": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    openPanels: null,
    openPanelsInitialized: false
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
  watch: {
    computeAttributes(val) {
      this.initializeOpenPanels(val)
    }
  },
  mounted() {
    if (this.computeAttributes) {
      this.initializeOpenPanels(this.computeAttributes)
    }
  },
  methods: {
    checkIfDescendantSelected: checkIfDescendantSelected,
    initializeOpenPanels(attributes) {
      if (!this.openPanelsInitialized && attributes && attributes.length) {
        if (this.expandedByDefault) {
          this.openPanels = Array.from(Array(attributes.length).keys())      
        } else {
          this.openPanels = []
        }
        this.openPanelsInitialized = true
      }
    },
    makeTooltipContentClass(attributeType) {
      return `nio-field-type-tooltip ${attributeType}`
    },
    getPropertyType(property) {
      return getReadableType(property)
    },
    dataTypeIconName(property) {
      return getDataTypeIconName(property)
    },
    updateRootPayload(property, selectionType, value) {
      if (selectionType === 'deliverable') {
        setSelectionRecursively(property, 'filterable', value)
      }
      setSelectionRecursively(property, selectionType, value)
    }
  }
}
</script>

<style lang="sass">
@import "../../styles-private/schema/_field-type-tooltip"
</style>

<style lang="sass" scoped>
@import '../../styles-private/schema/_schema'
</style>