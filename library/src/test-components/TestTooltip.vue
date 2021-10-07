<template lang="pug">
  .test-tooltip
    NioTooltip.test(
      key="0"
      heading="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      linkText="more info"
      linkHref="http://www.google.com"
      iconName="utility-exclamation"
      iconColor="#FFFFFF"
      :iconSize="8"
      :iconBackground="'red'"
    )
    NioTooltip.test(
      key="1"
      heading="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )
    NioTooltip.test(
      key="2"
      open-on-hover
      heading="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )
    NioTooltip.test(
      key="3"
      open-on-hover
      heading="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    )
    NioTooltip.test(
      key="4"
      heading="Sed do eiusmod tempor incididunt ut"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      linkText="more info"
      linkHref="http://www.google.com"
    )
    NioTooltip.test(
      key="5"
    )
      .default-slot.text-primary-darker This is a custom template
    NioTooltip.test(
      key="6"
      :data="tooltipObj"
    )
</template>

<script>

import NioTooltip from '../components/Tooltip'

export default {
  components: {
    NioTooltip
  },
  data: () => ({
    tooltipObj: {
      heading: "Sed do eiusmod tempor incididunt ut",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      linkText: "more info",
      linkHref: "http://www.google.com"
    }
  })
};
</script>

<style lang="sass" scoped>
.test-tooltip
  .test
    display: block
    margin-top: 50px
</style>