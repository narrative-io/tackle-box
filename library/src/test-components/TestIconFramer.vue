<template lang="pug">
  .test-icon-framer
    NioIconFramer(iconName="display-new")
    NioIconFramer(small iconName="display-new")
    NioIconFramer(extra-small iconName="utility-font")
    NioIconFramer(extra-small iconName="utility-toggle")
    NioIconFramer(extra-small iconName="utility-hashtag")
    NioIconFramer(extra-small iconName="utility-clock")
    NioIconFramer(extra-small iconName="utility-asterisk")
</template>

<script>

import NioIconFramer from '../components/icon/IconFramer'
import NioIcon from '../components/icon/Icon'
export default {
  components: {
    NioIconFramer,
    NioIcon
  },
  data: () => ({
   
  })
};
</script>

<style lang="sass" scoped>
.test-icon-framer
 
</style>