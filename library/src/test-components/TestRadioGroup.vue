<template lang="pug">
  .test-radio-group
    //- NioRadioGroup(v-model="radio")
    //-   NioRadioButton(value="John" label="John")
    //-     template(v-slot:label)
    //-       p this doesn't do anything
    //-   NioRadioButton(value="Jacob" label="Jacob")
    //- .value value: {{ radio }}
    //- NioRadioGroup(slat v-model="radio")
    //-   NioRadioButton(value="John" label="John")
    //-   NioRadioButton(value="Jacob" label="Jacob")
    //- .value value: {{ radio }}
    //- NioRadioGroup(slat v-model="radioLong")
    //-   NioRadioButton(value="John" label="John")
    //-   NioRadioButton(value="Jacob" label="Jacob")
    //-   NioRadioButton(value="Bob" label="Bob")
    //-   NioRadioButton(value="Cindy" label="Cindy")
    //- .value value: {{ radioLong }}
    //- .test NEW
    NioRadioGroup(
      v-model="adAccount"
    )
      NioRadioButton(
        v-for="n in 3"
        label="''"
        :value="n"
      )
        template(v-slot:label)
          p this doesn't do anything
</template>

<script>

import NioRadioGroup from '../components/RadioGroup'
import NioRadioButton from '../components/RadioButton'

export default {
  components: {
    NioRadioGroup,
    NioRadioButton
  },
  data: () => ({
    radio: 'Jacob',
    radioLong: 'Jacob',
    adAccount: '1',
    sortedAdAccounts: [],
    test: null
  }),
  mounted() {
    setTimeout(() => {
      this.radioLong = "Bob"
      this.sortedAdAccounts = ['1', '2']
    }, 1500);
  }
};
</script>

<style lang="sass" scoped>
.test-radio-group
  .value
    margin-top: 10px
</style>