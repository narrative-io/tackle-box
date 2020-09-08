# Breakpoints

Narrative's responsive breakpoints 

::: warning
Importing this file will globally overrwrite the default Vuetify breakpoints contained in Vuetify's **$grid-breakpoints** SASS variable
:::

## Usage

Import the **_breakpoints.sass** stylesheet from the _src/styles_ directory of the _tackle-box_ package

```sass
import 'tackle-box/src/styles/global/_breakpoints.sass'
```

### Details

| Device      | Code | Types                  | Range
|-------------|------|------------------------|-----------------
| Extra-small | xs   | small to large handset | < 600px
| Small       | sm   | small to medium tablet | 600px > < 768px
| Medium      | md   | large tablet to laptop | 768px > < 992px
| Large       | lg   | desktop                | 992px > < 1200px
| Extra-large | xl   | 4k and ultra-wides     | > 1200px

::: tip
For more details regarding Vuetify's responsive breakpoints, see <a href="https://vuetifyjs.com/en/customization/breakpoints/">https://vuetifyjs.com/en/customization/breakpoints/</a>
:::