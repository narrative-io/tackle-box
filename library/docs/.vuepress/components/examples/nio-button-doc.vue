<template lang="pug">
  div.buttons
    h3 :variant
    nio-button(:variant="'primary'") Primary
    nio-button(:variant="'secondary'") Secondary
    nio-button(:variant="'selected'") Selected
    nio-button(:variant="'error'") Error
    h3 :size
    nio-button(:size="'extra-large'") Extra-Large
    nio-button(:size="'large'") Large
    nio-button(:size="'normal'") Normal
    nio-button(:size="'small'") Small
    nio-button(:size="'extra-small'") Extra-small
    h3 :caps
    nio-button(:caps="false") no caps
    nio-button(:caps="true") caps
</template>

<style lang="sass">
  @import '../../../../src/styles/mixins/_button'
  .buttons
    padding: 0px 0px 40px 0px
    h3
      margin: 30px 0px
      // color: #888
    & > *
      margin-top: 20px
</style>