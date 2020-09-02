<template lang="pug">
  div.buttons
    h3 Variant
    nio-button(:variant="'primary'") Primary
    nio-button(:variant="'secondary'") Secondary
    nio-button(:variant="'selected'") Selected
    nio-button(:variant="'error'") Error
    h3 Size
    nio-button(:size="'extra-large'") Extra-Large
    nio-button(:size="'large'") Large
    nio-button(:size="'normal'") Normal
    nio-button(:size="'small'") Small
    nio-button(:size="'extra-small'") Extra-Small
    h3 Caps
    nio-button(:caps="false") No caps
    nio-button(:caps="true") All Caps
</template>

<style lang="sass">
  .buttons
    padding: 30px 0px
    h3
      margin: 30px 0px
      text-decoration: underline
    & > *
      margin-top: 20px
</style>