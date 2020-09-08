<template>
  <div class="typography-list">
    <TypographyInstance
      :variableName="'nio-jumbo-1'"
      :exampleText="'Aa'"
      :fontSize="'160'"
      :lineHeight="'203'"
      :letterSpacing="'normal'"
      :fontWeight="'600'"
    ></TypographyInstance>
  </div>
</template>

<script>
import TypographyInstance from './TypographyInstance'
export default {
  data: () => ({
    test: 'test'
  }),
  components: { TypographyInstance }
};
</script>

<style lang="sass" scoped>
  .typography-list
    padding: 40px 0px
    .typography-instance
      display: grid
      grid-gap: 10px
      margin-bottom: 10px
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))        
      
</style>