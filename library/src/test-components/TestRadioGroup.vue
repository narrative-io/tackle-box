<template lang="pug">
  .test-radio-group
    NioRadioGroup(v-model="radio")
      NioRadioButton(value="John" label="John")
      NioRadioButton(value="Jacob" label="Jacob")
    .value value: {{ radio }}
    NioRadioGroup(slat v-model="radio")
      NioRadioButton(value="John" label="John")
      NioRadioButton(value="Jacob" label="Jacob")
    .value value: {{ radio }}
    NioRadioGroup(slat v-model="radioLong")
      NioRadioButton(value="John" label="John")
      NioRadioButton(value="Jacob" label="Jacob")
      NioRadioButton(value="Bob" label="Bob")
      NioRadioButton(value="Cindy" label="Cindy")
    .value value: {{ radioLong }}
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
    radioLong: 'Jacob'
  }),
  mounted() {
    setTimeout(() => {
      this.radioLong = "Bob"
    }, 1500);
  }
};
</script>

<style lang="sass" scoped>
.test-radio-group
  .value
    margin-top: 10px
</style>