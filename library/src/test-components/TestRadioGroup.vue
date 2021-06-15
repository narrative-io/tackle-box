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
    radio: 'Jacob'
  })
};
</script>

<style lang="sass" scoped>
.test-radio-group
  .value
    margin-top: 10px
</style>