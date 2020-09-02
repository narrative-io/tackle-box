<template lang="pug">
  div.buttons
    h3 variant
    nio-button(:variant="'primary'") primary
    nio-button(:variant="'secondary'") secondary
    nio-button(:variant="'selected'") selected
    nio-button(:variant="'error'") error
    h3 size
    nio-button(:size="'extra-large'") extra-Large
    nio-button(:size="'large'") large
    nio-button(:size="'normal'") normal
    nio-button(:size="'small'") small
    nio-button(:size="'extra-small'") extra-small
    h3 caps
    nio-button(:caps="false") false
    nio-button(:caps="true") true
</template>

<style lang="sass">
  .buttons
    padding: 30px 0px
    h3
      margin: 30px 0px
      color: #888
    & > *
      margin-top: 20px
</style>