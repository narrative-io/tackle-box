<template lang="pug">
  .nio-schema-properties(v-if="computedProperties")
    .display-row.display-table 
      .display-column.properties
        NioExpansionPanels(
          multiple
          v-model="openPanels"
        )
          NioExpansionPanel(
            v-for="(propertyName, index) of computedProperties"
            :key="index"
            :class="{ hidden: isHidden(propertyName) }"
          )
            template(v-slot:header) 
              .header-content
                .header-summary
                  .nest-spacer(v-for="index in nest")
                  .nio-slat-image
                    v-menu(
                      :open-delay="250"
                      :content-class="makeTooltipContentClass(properties[propertyName].type)"
                      right
                      open-on-hover
                      open-on-click
                    ) 
                      template(v-slot:activator="{ on, attrs }")
                        div(
                          v-bind="attrs"
                          v-on="on"
                        )
                          NioIcon(
                            :name="dataTypeIconName(properties[propertyName].type)"
                            :size="24"
                            color="#AEB9E8"
                          )
                      .content
                        .nio-h4.text-primary-darker Data type:
                        .nio-p.text-primary-dark {{ getPropertyType(properties[propertyName]) }} 
                  .nio-slat-title-subtitle
                    .nio-slat-title.nio-h4.text-primary-darker.nio-bold(
                      :style="{width: slatWidth}" 
                      :class="{'is-array-items': properties[propertyName].isArrayItems}"
                    ) {{ propertyName }}
                    .nio-slat-subtitle.nio-p.text-primary-dark(
                      v-if="properties[propertyName].description && !properties[propertyName].isArrayItems" :style="{width: slatWidth}"
                    ) {{ properties[propertyName].description }}
                .property-settings(v-if="!hideIndicators && !isArrayDescendant && disableInteractions && properties[propertyName].type !== 'object' && properties[propertyName].type !=='array'")
                  .pills-container
                    NioPill(
                      :iconName="properties[propertyName].deliverable ? 'utility-check-circle' : 'utility-times-circle'"
                      :iconColor="properties[propertyName].deliverable ? '#43B463' : '#AEB9E8'"
                      :class="properties[propertyName].deliverable ? '' : 'negative'"
                      list-item
                      prepend-icon
                    ) Deliverable
                    NioPill(
                      :iconName="properties[propertyName].filterable ? 'utility-check-circle' : 'utility-times-circle'"
                      :iconColor="properties[propertyName].filterable ? '#43B463' : '#AEB9E8'"
                      :class="properties[propertyName].filterable ? '' : 'negative'"
                      list-item
                      prepend-icon
                    ) Filterable
                .property-actions.potential-join-target(v-else-if="!hideIndicators && !disableInteractions && (isArrayDescendant && properties[propertyName].is_join_key)")
                  NioSwitch(
                    v-model="alwaysTrue"
                    @click.stop=""
                    disabled
                    @update="updateRootPayload(properties[propertyName], 'filterable', $event)"
                  ) 
                  .nio-p-small.text-primary-dark Filterable
                  NioTooltip.array-join-target(
                    message="This property can be joined to a dataset. If you have created a joinable dataset in Dataset manager then you will have the option to join this attribute to the dataset in the next step."
                    content-class="nio-array-join-target-tooltip"
                    open-on-hover
                  )
                .property-actions(v-else-if="!hideIndicators && !disableInteractions && !isArrayDescendant && !properties[propertyName].isArrayItems")
                  NioSwitch(
                    v-model="properties[propertyName].deliverable"
                    @click.stop=""
                    @update="updateRootPayload(properties[propertyName], 'deliverable', $event)"
                  )
                  .nio-p-small.text-primary-dark Deliverable
                  NioSwitch(
                    v-model="properties[propertyName].filterable"
                    @click.stop=""
                    @update="updateRootPayload(properties[propertyName], 'filterable', $event)"
                  ) 
                  .nio-p-small.text-primary-dark Filterable
            template(v-slot:content)  
              .display-row(v-if="properties[propertyName].properties || properties[propertyName].items")
                .nest-spacer(v-for="index in nest")
                SchemaProperties(
                  :properties="properties[propertyName].properties ? properties[propertyName].properties : { items: {...properties[propertyName].items, isArrayItems: true}} "
                  :disable-interactions="disableInteractions"
                  :nest="nest + 1"
                  :show-exported-only="showExportedOnly"
                  :hide-indicators="hideIndicators"
                  :is-array-descendant="isArrayDescendant || Boolean(properties[propertyName].items)"
                  @updatePayload="updatePayload"

                )
              .property-details(
                v-else 
              )
                .nest-spacer(v-for="index in nest")
                .details-content
                  .display-row.display-table
                    .display-column.type
                      .nio-h7.text-primary-darker Type
                      .nio-p.text-primary-dark {{ getPropertyType(properties[propertyName]) }}
                  .display-row.display-table
                    .display-column.enum
                      .nio-h7.text-primary-darker Supported Values
                      .nio-p.text-primary-dark(v-if="properties[propertyName].enum") 
                        .pills
                          NioPill(
                            tag
                            v-for="value of properties[propertyName].enum"
                          ) {{ value }}
                      .nio-p.text-primary-dark(v-else) Any value   
          .show-optional-properties-wrapper(v-if="optionalPropertiesHidden")
            .show-optional-properties(
              @click="optionalPropertiesHidden = false"
            ) 
              .nio-p.text-primary-darker.nio-bold Show Optional Properties
</template>

<script>

import { getReadableType, setSelectionRecursively, getDataTypeIconName, isExportable } from '../../modules/app/schema/attributeModule'
import NioExpansionPanels from '../../components/ExpansionPanels'
import NioExpansionPanel from '../../components/ExpansionPanel'
import NioIcon from '../../components/icon/Icon'
import NioPill from '../../components/Pill'
import NioSwitch from '../../components/Switch'
import NioTooltip from '../../components/Tooltip'

export default {
  components: { SchemaProperties: () => import('./SchemaProperties.vue'), NioExpansionPanels, NioExpansionPanel, NioIcon, NioPill, NioSwitch, NioTooltip },
  props: {
    "properties": { type: Object, required: false, default: null},
    "disableInteractions": { type: Boolean, required: false, default: false },
    "nest": { type: Number, required: true },
    "hideIndicators": { type: Boolean, required: false, default: false },
    "showExportedOnly": { type: Boolean, required: false, default: false },
    "isArrayDescendant": { type: Boolean, required: false, default: false }, // temparary fix to disable controls on all descendants of array properties until filters are supported in the backend
    "hideOptionalProperties": { type: Boolean, required: false, default: false },
    "requiredPropertyNames": { type: Array, required: false }
  },
  data: () => ({
    openPanels: [],
    alwaysTrue: true,
    optionalPropertiesHidden: false
  }),
  computed: {
    slatWidth() {
      return `${ 500 - 24 * this.nest }px`
    },
    computedProperties() {
      let keys
      if (this.hideOptionalProperties && this.requiredPropertyNames && this.requiredPropertyNames.length > 0) {
        const tempKeys = Object.keys(this.properties)
        const requiredKeys = tempKeys.filter(key => this.requiredPropertyNames.includes(key))
        const optionalKeys = tempKeys.filter(key => !this.requiredPropertyNames.includes(key))
        keys = [...requiredKeys, ...optionalKeys]
      } else {
        keys = Object.keys(this.properties)
      }

      if (this.showExportedOnly) {
        const exportable = []
        keys.map(key => {
          if (isExportable(this.properties[key])) {
            exportable.push(key)
          }
        })
        return exportable
      } else {
        return keys
      }
    }
  },
  mounted() {
    if (this.hideOptionalProperties) {
      this.optionalPropertiesHidden = true
    }
  },
  methods: {
    makeTooltipContentClass(attributeType) {
      return `nio-field-type-tooltip ${attributeType}`
    },
    getPropertyType(property) {
      return getReadableType(property)
    }, 
    updateRootPayload(property, selectionType, value) {
      if (selectionType === 'deliverable') {
        setSelectionRecursively(property, 'filterable', value)
      }
      setSelectionRecursively(property, selectionType, value)
      this.updatePayload()
    },
    updatePayload(event) {
      this.$emit('updatePayload')
    },
    dataTypeIconName(dataType) {
      return getDataTypeIconName(dataType)
    },
    isHidden(propertyName) {
      if (this.hideOptionalProperties && this.optionalPropertiesHidden && this.requiredPropertyNames) {
        return !this.requiredPropertyNames.includes(propertyName)
      }
      return false
    }
  }
}
</script>

<style lang="sass">
@import "../../styles-private/schema/_field-type-tooltip"

.nio-array-join-target-tooltip
  transform: translateY(40px) !important
</style>

<style lang="sass" scoped>
@import '../../styles-private/schema/_schema-properties'
</style>
