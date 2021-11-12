<template lang="pug">
  .nio-schema-properties(v-if="properties")
    .display-row.display-table
      .display-column.properties
        NioExpansionPanels(
          multiple
          v-model="openPanels"
        )
          NioExpansionPanel(
            v-for="(propertyName, index) of makeProperties(properties)"
            :key="index"
          )
            template(v-slot:header) 
              .header-content
                .header-summary
                  .nest-spacer(v-for="index in nest")
                  .nio-slat-image
                    NioIcon(
                      :name="dataTypeIconName(properties[propertyName].type)"
                      :size="24"
                      color="#AEB9E8"
                    )
                  .nio-slat-title-subtitle
                    .nio-slat-title.nio-h4.text-primary-darker.nio-bold(:style="{width: slatWidth}") {{ propertyName }}
                    .nio-slat-subtitle.nio-p.text-primary-dark(v-if="properties[propertyName].description" :style="{width: slatWidth}") {{ properties[propertyName].description }}
                .property-settings(v-if="!hideIndicators && displayOnly && properties[propertyName].type !== 'object' && properties[propertyName].type !=='array'")
                  .pills-container
                    NioPill(
                      list-item
                      prepend-icon
                      :iconName="properties[propertyName].deliverable ? 'utility-check-circle' : 'utility-times-circle'"
                      :iconColor="properties[propertyName].deliverable ? '#43B463' : '#AEB9E8'"
                      :class="properties[propertyName].deliverable ? '' : 'negative'"
                    ) Deliverable
                    NioPill(
                      list-item
                      prepend-icon
                      :iconName="properties[propertyName].filterable ? 'utility-check-circle' : 'utility-times-circle'"
                      :iconColor="properties[propertyName].filterable ? '#43B463' : '#AEB9E8'"
                      :class="properties[propertyName].filterable ? '' : 'negative'"
                    ) Filterable
                .property-actions(v-else-if="!hideIndicators && !displayOnly")
                  NioSwitch(
                    @click.stop=""
                    v-model="properties[propertyName].deliverable"
                    @update="updateRootPayload(properties[propertyName], 'deliverable', $event)"
                  )
                  .nio-p-small.text-primary-dark Deliverable
                  NioSwitch(
                    @click.stop=""
                    v-model="properties[propertyName].filterable"
                    @update="updateRootPayload(properties[propertyName], 'filterable', $event)"
                  ) 
                  .nio-p-small.text-primary-dark Filterable
            template(v-slot:content)  
              .display-row(v-if="properties[propertyName].properties")
                .nest-spacer(v-for="index in nest")
                SchemaProperties(
                  :properties="properties[propertyName].properties"
                  @updatePayload="updatePayload"
                  :displayOnly="displayOnly"
                  :nest="nest + 1"
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
                  
</template>

<script>

import { getReadableType, setSelectionRecursively, getDataTypeIconName } from '../../../modules/app/attribute/attributeModule'
import NioExpansionPanels from '../../../components/ExpansionPanels'
import NioExpansionPanel from '../../../components/ExpansionPanel'
import NioIcon from '../../../components/icon/Icon'
import NioPill from '../../../components/Pill'
import NioSwitch from '../../../components/Switch'

export default {
  props: {
    "properties": { type: Object, required: false, default: null},
    "display-only": { type: Boolean, required: false, default: false },
    "nest": { type: Number, required: true},
    "hideIndicators": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    openPanels: []
  }),
  computed: {
    slatWidth() {
      return `${ 500 - 24 * this.nest }px` 
    }
  },
  methods: {
    getPropertyType(property) {
      return getReadableType(property)
    },
    makeProperties(item) {
      return Object.keys(item)
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
    }
  },
  components: { SchemaProperties: () => import('./SchemaProperties.vue'), NioExpansionPanels, NioExpansionPanel, NioIcon, NioPill, NioSwitch }
}
</script>

<style lang="sass" scoped>

@import '../../../styles-private/schema/attributes/_schema-properties'

</style>
