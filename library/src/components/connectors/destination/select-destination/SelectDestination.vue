<template lang="pug">
  .nio-select-destination
    NioExpansionPanels(
      v-model="openPanels"
      multiple
    )
      NioExpansionPanel(
        v-for="destination in destinations"
        :key="destination.index"
        :class="{'no-profiles': !destination.profiles || destination.profiles.length === 0}"
      )
        template(v-slot:header)
          NioImageTile(
            v-if="destination.name === 'Narrative Download'"
            :src="destination.icon"
            alt="Narrative Download Icon"
          )
          NioImageTile(
            v-else
            :src="`data:${destination.icon.imageType};base64, ${destination.icon.image}`"
            :alt="destination.icon.altText"
          )
          .destination-content
            h2.nio-h4.text-primary-darker.name {{ destination.name }}
            p.nio-p.text-primary-dark(v-if="destination.name !== 'Narrative Download' && destination.profiles.length > 1") <span class="nio-bold">Profile:</span> {{ getSelectedProfile(destination).name}}
          NioSwitch(
            v-model="destination.selected"
            :disabled="destination.name === 'Narrative Download'"
            @click.stop="openPanel(destination)"
          )
        template(
          v-slot:content
        )
          .control(v-if="destination.profiles && destination.profiles.length > 1")
            .title-description
              .filter-title.nio-h4.text-primary-darker Connector Profile
            .filter-value
              NioSelect(
                v-model="destination.selectedProfile"
                :items="destination.profiles"
                :item-disabled="profileDisabled"
                label="App Profile"
                item-text="name"
                item-value="id"
                @change="setDisabledProfiles"
              )
          //- we'll use unique templates for each connector app until quick_settings contract gets solidified and is able to be generic enough to render programatically
          template(v-if="destination.appId === 11")
            .control.advertisers
              .title-description
                .filter-title.nio-h4.text-primary-darker Advertisers
                .description.nio-p.text-primary-dark Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .filter-value
                NioTagsField(
                  v-model="destination.quickSettings[0].value"
                  :rules="[validateQuickSetting(destination.quickSettings[0])]"
                  label="Advertiser IDs"
                  validate-on-blur
                )
            .control.revenue-share
              .title-description
                .filter-title.nio-h4.text-primary-darker Revenue Share
                .description.nio-p.text-primary-dark Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .filter-value
                NioTextField.small-input(
                  v-model="destination.quickSettings[1].value"
                  :rules="[validateQuickSetting(destination.quickSettings[1])]"
                  type="number"
                  validate-on-blur
                )
            .control.cpm-cap
              .title-description
                .filter-title.nio-h4.text-primary-darker CPM Cap
                .description.nio-p.text-primary-dark Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              .filter-value
                NioTextField.small-input(
                  v-model="destination.quickSettings[2].value"
                  :rules="[validateQuickSetting(destination.quickSettings[2])]"
                  type="number"
                  prepend
                  currency
                  validate-on-blur
                )
          .control(v-else v-for="setting in destination.quickSettings")
            .title-description
              .filter-title.nio-h4.text-primary-darker {{ setting.display_name }} <span class="nio-p text-primary-dark" v-if="!setting.required">(optional)</span>
              .description.nio-p.text-primary-dark {{ setting.description }}
            .filter-value
              NioTextField(
                v-model="destination.quickSettings[0].value"
                :rules="[validateQuickSetting(setting)]"
                :label="setting.display_name"
                validate-on-blur
                @input="globalValidateQuickSettings($event)"
              )
          NioButton.remove-profile(
            v-if="canDeleteProfile(destination)"
            caution-text
            @click="deleteProfile(destination)"
          ) Remove this profile
          NioButton.additional-profile(
            v-if="showAddProfile(destination)"
            normal-secondary
            @click="addProfile(destination)"
          ) Add an additional profile
    .connectors-cta
      h3.nio-h3.text-primary-darker Connect to more destinations
      p.nio-p.text-primary-dark.description Install destination connectors to streamline your data delivery.
      NioButton(
        normal-tertiary-append
        icon-name="utility-chevron-right"
        @click="learnMore"
      ) Learn more about apps and connectors
</template>

<script>

import NioButton from '../../../Button'
import NioExpansionPanels from '../../../ExpansionPanels'
import NioExpansionPanel from '../../../ExpansionPanel'
import NioImageTile from '../../../ImageTile'
import NioTagsField from '../../../TagsField'
import NioTextField from '../../../TextField'
import NioSwitch from '../../../Switch'
import NioSelect from '../../../Select'
import { getThemeColor } from '../../../../modules/app/theme/theme'
import { makeDestinationOptions } from '../../../../modules/app/destinations/destinationsModule'

export default {
  name: 'nio-select-destination',
  components: { NioButton, NioTagsField, NioTextField, NioExpansionPanels, NioExpansionPanel, NioSwitch, NioImageTile, NioSelect },
  props: {
    destinations: { type: Array, required: true }
  },
  data() {
    return {
      loading: true,
      openPanels: []
    }
  },
  mounted() {
    this.globalValidateQuickSettings()
  },
  methods: {
    globalValidateQuickSettings() {
      let valid = true
      this.destinations.forEach(destination => {
        if (destination.selected) {
          if (destination.quickSettings) {
            destination.quickSettings.forEach(setting => {
              const settingValid = this.validateQuickSetting(setting)
              if (settingValid !== true) {
                valid = false
              }
            })
          }
        }
      })
      this.$emit('validChanged', valid)
    },
    validateQuickSetting(setting) {
      const regex = new RegExp(String.raw`${setting.schema.pattern}`)
      if (!setting.value) {
        return setting.schema.required ? 'Required' : true
      } else if (setting.schema.type === "array") {
        // NB: we don't bother recursively validating array elements in this hacky implementation
        return this.validateArray(setting)
      } else if (setting.schema.type === "number") {
        return this.validateNumber(setting)
      } else if (regex && !regex.test(setting.value)) {
        return 'Invalid entry'
      } else {
        return true
      }
    },
    validateArray(setting) {
      const minItems = setting.schema.minItems
      const maxItems = setting.schema.maxItems
      if (minItems !== undefined && minItems !== null && setting.value.length < minItems) {
        return `Invalid length: at least ${minItems} items required`
      }
      if (maxItems !== undefined && maxItems !== null && setting.value.length > maxItems) {
        return `Invalid length: at most ${maxItems} items allowed`
      }
      return true
    },
    validateNumber(setting) {
      const min = setting.schema.minimum
      const max = setting.schema.maximum
      const value = Number(setting.value)
      if (value === undefined || value === null) {
        return `Invalid value: must be a number`
      }
      if (min !== undefined && min !== null && value < min) {
        return `Invalid value: minimum is ${setting.schema.minimum}`
      }
      if (max !== undefined && max !== null && value > max) {
        return `Invalid value: maximum is ${setting.schema.maximum}`
      }
      return true
    },
    openPanel(destination) {
      if (destination.selected) {
        if (!this.openPanels.includes(destination.index)) {
          this.openPanels.push(destination.index)
        }
      }
      this.setDisabledProfiles()
      this.globalValidateQuickSettings()
    },
    addProfile(destination) {
      const usedProfiles = this.findUsedAppProfileIds(destination.appId)
      const remainingProfiles = destination.profiles.filter(profile => !usedProfiles.includes(profile.id))
      const destinationIndex = this.destinations.map(el => el.appId).lastIndexOf(destination.appId)
      const newDestination = {
        ...destination,
        quickSettings: destination.quickSettings.map(setting => {
          return {
            ...setting,
            value: null // dereference value property from previous destination
          }
        }),
        profiles: destination.profiles,
        selected: true,
        selectedProfile: remainingProfiles[0].id
      }
      this.destinations.splice(destinationIndex + 1, 0, newDestination)
      this.recalculateIndices()
      this.setDisabledProfiles()
      this.openPanels = [destinationIndex + 1]
    },
    deleteProfile(destination) {
      this.destinations.splice(destination.index, 1)
      this.recalculateIndices()
      this.setDisabledProfiles()
    },
    recalculateIndices() {
      this.destinations.forEach((currDestination, index) => {
        currDestination.index = index
      })
    },
    profileDisabled(item) {
      return item.disabled
    },
    getSelectedProfile(destination) {
      return destination.profiles.find(profile => profile.id === destination.selectedProfile)
    },
    setDisabledProfiles() {
      this.destinations.forEach(destination => {
        const usedProfileIds = this.findUsedAppProfileIds(destination.appId)
        if (destination.profiles) {
          destination.profiles.forEach(profile => {
            if (usedProfileIds.includes(profile.id)) {
              profile.disabled = true
            } else {
              profile.disabled = false
            }
          })
        }
      })
    },
    findUsedAppProfileIds(appId) {
      return this.destinations.reduce((acc, destination) => {
        if (appId === destination.appId) {
          return [...acc, destination.selectedProfile]
        } else {
          return acc
        }
      }, [])
    },
    showAddProfile(destination) {
      return destination.profiles && this.findUsedAppProfileIds(destination.appId).length < destination.profiles.length
    },
    canDeleteProfile(destination) {
      return destination.profiles && this.findUsedAppProfileIds(destination.appId).length > 1
    },
    learnMore() {
      window.open('https://kb.narrative.io/what-is-a-narrative-outbound-connector', '_blank')
    },
    getThemeColor(colorName) {
      return getThemeColor(colorName)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../../styles/mixins/connectors/destination/select-destination/_select-destination'

.control
  .filter-value
    .nio-text-field.small-input
      min-width: 140px
      width: 25% !important
</style>
