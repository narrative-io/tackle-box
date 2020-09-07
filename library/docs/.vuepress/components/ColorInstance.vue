<template>
  <div class="color">
    <div class="mask" :style="{backgroundColor: colorValue}"></div>
    <div class="details">
      <div class="entry">
        <div class="label">
          SASS variable:
        </div>
        <div class="value">
          {{ variableName }}
        </div>
      </div>	
      <div class="entry">
        <div class="label">
          Color value:
        </div>
        <div class="value">
          {{ colorValue }}
        </div>
      </div>	
    </div>
  </div>
</template>

<script>
export default {
  props: ['colorValue', 'variableName'],
  components: {
    NioButton: () => import("./components/Button.vue")
  }
};
</script>

<style lang="sass" scoped>
  .color
    box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)
    border-radius: 8px
    .mask 
      height: 200px
      background-color: blue
      border-top-left-radius: 8px
      border-top-right-radius: 8px
    .details
      height: 100px
      padding: 10px 15px
      display: flex
      flex-direction: column
      justify-content: space-around
      .entry
        display: flex
        .label
          color: #010A28
          font-weight: bold
          width: 110px
          font-size: 14px
        .value 
          color: #031553
          font-size: 14px
</style>

