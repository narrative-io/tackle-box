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
    border: 1px solid #DDD
    .mask 
      height: 200px
      background-color: blue
    .details
      height: 100px
      padding: 10px 20px
      display: flex
      flex-direction: column
      justify-content: space-around
      .entry
        display: flex
        .label
          color: #010A28
          font-weight: bold
          width: 120px
        .value 
          color: #010A28
</style>

