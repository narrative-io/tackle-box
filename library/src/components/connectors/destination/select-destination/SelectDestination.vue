<template lang="pug">
  .nio-select-destination
    .destination-header
      h3.body-large.text-primary-dark Choose how you want to receive your data
    .loading(v-if="loading")
      v-progress-circular(
        v-if="loading" 
        indeterminate 
        :color="getThemeColor('primary')" 
        size="64"
      )
    .destinations-container(v-else)
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
                .filter-title.nio-h4.text-primary-darker Subscription Description
                .description.nio-p.text-primary-dark Enter a description for this subscription
              .filter-value           
                NioSelect(
                  v-model="destination.selectedProfile"
                  :items="destination.profiles"
                  label="App Profile"
                  item-text="name"
                  item-value="id"
                  :item-disabled="profileDisabled"
                  @change="setDisabledProfiles"
                )
            //- we'll use unique templates for each connector app until quick_settings contract gets solidified and is able to be generic enough to render programatically
            .control(v-for="setting in destination.quickSettings")    
              .title-description
                .filter-title.nio-h4.text-primary-darker {{ setting.display_name }} <span class="nio-p text-primary-dark" v-if="!setting.required">(optional)</span>
                .description.nio-p.text-primary-dark {{ setting.description }}
              .filter-value
                NioTextField(
                  v-model="destination.quickSettings[0].value"
                  @input="validateQuickSetting(setting)"
                  label="Choose Prefix"
                  :rules="[validateQuickSetting(setting)]"
                  validate-on-blur
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
      NioButton(normal-tertiary-append iconName="utility-chevron-right" @click="learnMore") Learn more about apps and connectors
    .actions
      NioButton.save-button(jumbo-primary-append iconName="utility-arrow-right" :disabled="!valid" @click="save") 
        .span Save and Continue
</template>	  

<script>

import NioButton from '../../../Button'
import NioExpansionPanels from '../../../ExpansionPanels'
import NioExpansionPanel from '../../../ExpansionPanel'
import NioTextField from '../../../TextField'
import NioImageTile from '../../../ImageTile'
import NioSwitch from '../../../Switch'
import { getThemeColor } from '../../../../modules/app/theme/theme'
import { NioOpenApiModule } from '../../../../modules/app/open-api-module'

export default {
  name: 'nio-select-destination',
  data() {
    return {
      loading: true,
      destinations: [],
      openPanels: []
    }
  },
  mounted() {
    NioOpenApiModule.initCallback(this.openApiInit)
  },
  computed: {
    valid() {
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
      return valid
    }
  },
  methods: {
    openApiInit() {
      this.makeDestinationOptions(this.$nioOpenApi).then(destinations => {
        this.destinations = destinations
        this.loading = false
      })
    },
    save(event) {
      this.$emit('save', this.destinations)
    },
    validateQuickSetting(setting) {
      const regex = new RegExp(String.raw`${setting.schema.pattern}`)
      if (!setting.value) {
        return setting.schema.required ? 'Required' : true
      } else if (regex && !regex.test(setting.value)) {
        return 'Invalid entry'
      } else {
        return true
      }
    },
    openPanel(destination) {
      if (destination.selected) {
        if (!this.openPanels.includes(destination.index)) {
          this.openPanels.push(destination.index)
        }
      }
      this.setDisabledProfiles()
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
    }
  },
  components: { NioButton, NioTextField, NioExpansionPanels, NioExpansionPanel, NioSwitch, NioImageTile }
}
</script>

<style lang="sass" scoped>
@import '../../../../styles/mixins/connectors/destination/select-destination/_select-destination'
</style>