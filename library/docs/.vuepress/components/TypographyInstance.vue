<template>
  <div class="color">
    <div class="example" :style="{fontSize: `${fontSize}px`, fontWeight: fontWeight, color: '#031553', backgroundColor: '#F4F7FB', textAlign: 'center', textTransform: textTransform === 'uppercase' ? 'uppercase' : 'none', fontFamily: fontFamily && fontFamily !== 'Euclid Circular A' ? 'Sans Serif' : 'Euclid Circular A'}">
      {{ exampleText }}
    </div>
    <div class="details">
      <div class="entry">
        <div class="label">
          CSS Class:
        </div>
        <div class="value">
          .{{ variableName }}
        </div>
      </div>	
      <div class="entry">
        <div class="label">
          Font Family:
        </div>
        <div class="value">
          {{ !fontFamily ? 'Euclid Circular A' : fontFamily }}
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
      <div class="entry">
        <div class="label">
          Text transform:
        </div>
        <div class="value">
          {{ !textTransform ? 'none' : textTransform }}
        </div>
      </div>	
    </div>
  </div>
</template>

<script>
export default {
  props: ['variableName', 'exampleText', 'fontSize', 'lineHeight', 'letterSpacing', 'fontWeight', 'fontFamily', 'textTransform']
};
</script>

<style lang="sass" scoped>
  @import '../../../src/styles/global/_fonts'
  .color
    box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)
    border-radius: 8px
    .example
      background-color: white
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      padding: 30px 15%
      display: flex
      justify-content: center
      align-items: center
    .details
      padding: 10px 15px
      height: 205px
      display: flex
      flex-direction: column
      justify-content: space-around
      .entry
        display: flex
        .label
          color: #010A28
          font-weight: bold
          width: 120px
          font-size: 14px
        .value 
          color: #031553
          font-size: 14px
</style>

