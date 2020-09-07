<template>
  <div class="color-pallette">
    <section class="primary-section">
      <h2>Primary Colors</h2>
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

const colors = {
  primary: [
    {
      variableName: '$nio-c-primary',
      colorValue: '#0032e6'
    },
    {
      variableName: '$nio-c-primary-dark',
      colorValue: '#4B5FA7'
    }
  ],
  secondary: [],
  utility: []
}

export default {
  data: () => ({
    colors: {
      primary: [
        {
          variableName: '$nio-c-primary',
          colorValue: '#0032e6'
        },
        {
          variableName: '$nio-c-primary-dark',
          colorValue: '#4B5FA7'
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
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
      

      
</style>

