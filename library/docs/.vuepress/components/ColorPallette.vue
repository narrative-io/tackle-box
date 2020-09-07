<template>
  <div class="color-pallette">
    <section class="primary-section">
      <h2>Primary Colors</h2>
      <div class="color-instances primary-main">
        <ColorInstance
          :variableName="colors.primaryMain.variableName"
          :colorValue="colors.primaryMain.colorValue"
        ></ColorInstance>	
      </div>
      <div class="color-instances">
        <ColorInstance
          v-for="color of colors.primary"
          :variableName="color.variableName"
          :colorValue="color.colorValue"
        ></ColorInstance>	
      </div>  
    </section>

    <section class="secondary-section">
      
    </section>

    <section class="utility-section">
      
    </section>
  </div>
</template>

<script>

export default {
  data: () => ({
    colors: {
      primaryMain: {
        variableName: '$nio-c-primary',
        colorValue: '#0032e6'
      },
      primary: [
        {
          variableName: '$nio-c-primary-lightest',
          colorValue: '#F2F4FE'
        },
        {
          variableName: '$nio-c-primary-lighter',
          colorValue: '#BDCAF9'
        },
        {
          variableName: '$nio-c-primary-light',
          colorValue: '#849BF4'
        },
        {
          variableName: '$nio-c-primary-dark',
          colorValue: '#4B5FA7'
        },
        {
          variableName: '$nio-c-primary-darker',
          colorValue: '#031553'
        },
        {
          variableName: '$nio-c-primary-darkest',
          colorValue: '#010A28'
        }
      ],
      secondary: [],
      utility: []
    }
  }),	
  components: {
    NioButton: () => import("./components/Button.vue")
  }
};
</script>

<style lang="sass" scoped>
  .color-pallette
    section
      h2
        margin: 30px 0px 20px 0px
      .color-instances
        display: grid
        grid-gap: 10px
        margin-bottom: 10px
        &:not(.primary-main)
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
        .color.primary-main
          width: 100%
        
      
</style>