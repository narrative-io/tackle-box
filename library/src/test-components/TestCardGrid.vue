<template lang="pug">
  .test-card-grid
     NioCardGrid
      NioCardGridItem
        .content
        template(v-slot:hover-controls)
          NioButton.more-info(normal-secondary) MORE INFO
          NioButton.quick-add(normal-primary) QUICK ADD
      NioCardGridItem
        .content
        template(v-slot:hover-controls)
          NioButton.more-info(normal-secondary) MORE INFO
          NioButton.quick-add(normal-primary) QUICK ADD
      NioCardGridItem.informational
        template(v-slot:informational) test
      NioCardGridItem
        .content
        template(v-slot:hover-controls)
          NioButton.more-info(normal-secondary) MORE INFO
          NioButton.quick-add(normal-primary) QUICK ADD
      NioCardGridItem
        .content
        template(v-slot:hover-controls)
          NioButton.more-info(normal-secondary) MORE INFO
          NioButton.quick-add(normal-primary) QUICK ADD
      NioCardGridItem
        .content
        template(v-slot:hover-controls)
          NioButton.more-info(normal-secondary) MORE INFO
          NioButton.quick-add(normal-primary) QUICK ADD                
</template>

<script>

import NioCardGrid from '../components-private/CardGrid'
import NioCardGridItem from '../components-private/CardGridItem'
import NioButton from '../components/Button'

export default {
  components: {
    NioCardGrid,
    NioCardGridItem,
    NioButton
  },
  data: () => ({
    
  })
};
</script>

<style lang="sass" scoped>
.test-card-grid
     
</style>