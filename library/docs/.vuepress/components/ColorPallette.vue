<template>
  <div class="color-pallette">
    <section class="primary-section">
      <h3>Primary Colors</h3>
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
      <h3>Secondary Colors</h3>
      <div class="color-instances">
        <ColorInstance
          v-for="color of colors.secondary"
          :variableName="color.variableName"
          :colorValue="color.colorValue"
        ></ColorInstance>	
      </div>  
    </section>

    <section class="utility-section">
      <h3>Utility Colors</h3>
      <div class="color-instances">
        <ColorInstance
          v-for="color of colors.utility"
          :variableName="color.variableName"
          :colorValue="color.colorValue"
        ></ColorInstance>	
      </div>  
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
        },
        {
          variableName: '$nio-c-gray-darker',
          colorValue: '#626262'
        },
        {
          variableName: '$nio-c-gray-dark',
          colorValue: '#A1A1A1'
        },
        {
          variableName: '$nio-c-gray-light',
          colorValue: '#CECECE'
        },
        {
          variableName: '$nio-c-gray-lightest',
          colorValue: '#E6E6E6'
        },
        {
          variableName: '$nio-c-black',
          colorValue: '#000000'
        },
        {
          variableName: '$nio-c-white',
          colorValue: '#FFFFFF'
        },
        {
          variableName: '$nio-c-canvas',
          colorValue: '#F4F7FB'
        },
        {
          variableName: '$nio-c-footer',
          colorValue: '#ECF1F9'
        }
      ],
      secondary: [
        {
          variableName: '$nio-c-turquoise-dark',
          colorValue: '#4DB26A'
        },
        {
          variableName: '$nio-c-turquoise-light',
          colorValue: '#68E08A'
        },
        {
          variableName: '$nio-c-tangerine-dark',
          colorValue: '#EF7955'
        },
        {
          variableName: '$nio-c-tangerine-light',
          colorValue: '#F7AFBB'
        },
        {
          variableName: '$nio-c-seagreen-dark',
          colorValue: '#4DB26A'
        },
        {
          variableName: '$nio-c-seagreen-light',
          colorValue: '#68E08A'
        },
        {
          variableName: '$nio-c-purple-dark',
          colorValue: '#7D5D9D'
        },
        {
          variableName: '$nio-c-purple-light',
          colorValue: '#BE93E8'
        },
        {
          variableName: '$nio-c-mustard-dark',
          colorValue: '#E0A340'
        },
        {
          variableName: '$nio-c-mustard-light',
          colorValue: '#FCECD2'
        },
        {
          variableName: '$nio-c-sand-dark',
          colorValue: '#9E9878'
        },
        {
          variableName: '$nio-c-sand-light',
          colorValue: '#E7E3CE'
        }
      ],
      utility: [
        {
          variableName: '$nio-c-success',
          colorValue: '#67AC5B'
        },
        {
          variableName: '$nio-c-alert',
          colorValue: '#4896EC'
        },
        {
          variableName: '$nio-c-warning',
          colorValue: '#F6C244'
        },
        {
          variableName: '$nio-c-error',
          colorValue: '#FF2054'
        }
      ]
    }
  })
};
</script>

<style lang="sass" scoped>
  .color-pallette
    section
      h3
        margin: 40px 0px 30px 0px
      .color-instances
        display: grid
        grid-gap: 10px
        margin-bottom: 10px
        &:not(.primary-main)
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
        .color.primary-main
          width: 100%
        
      
</style>