<template>
  <div class="color">
    <div class="example" :style="{fontSize: `${fontSize}px`, fontWeight: fontWeight, color: '#031553', backgroundColor: '#F4F7FB', textAlign: 'center'}">
      {{ exampleText }}
    </div>
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
          Font size:
        </div>
        <div class="value">
          {{ fontSize }}px
        </div>
      </div>	
      <div class="entry">
        <div class="label">
          Font weight: 
        </div>
        <div class="value">
          {{ fontWeight }}
        </div>
      </div>	
      <div class="entry">
        <div class="label">
          Line height: 
        </div>
        <div class="value">
          {{ lineHeight }}px
        </div>
      </div>	
      <div class="entry">
        <div class="label">
          Letter spacing: 
        </div>
        <div class="value">
          {{ letterSpacing }}px
        </div>
      </div>	
    </div>
  </div>
</template>

<script>
export default {
  props: ['variableName', 'exampleText', 'fontSize', 'lineHeight', 'letterSpacing', 'fontWeight']
};
</script>

<style lang="sass" scoped>
  .color
    box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)
    border-radius: 8px
    .example
      background-color: white
      border-top-left-radius: 8px
      border-top-right-radius: 8px
    .details
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

