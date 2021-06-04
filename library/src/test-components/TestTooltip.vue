<template lang="pug">
  .test-tooltip
    NioTooltip(
      key="1"
      title="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )
    NioTooltip(
      key="2"
      open-on-hover
      title="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )
</template>

<script>

import NioTooltip from '../components/Tooltip'

export default {
  components: {
    NioTooltip
  },
  data: () => ({
  })
};
</script>

<style lang="sass" scoped>
.test-tooltip
  
</style>