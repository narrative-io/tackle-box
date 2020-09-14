# Getting Started

## Installation

To get started with Tacklebox, install the npm package _@narrative.io/tackle-box_:

```
npm i @narrative.io/tackle-box
```

Alternately, you can download the library from the link below and import into your project inline:

<a style="text-align: center; display: block; margin: 50px auto; width: 100%; font-size: 20px" href="">cdn.narrative.io/wherever-we-deside-to-host-it</a>

```html
<html>
  <head>
    <script src="path-to-library/dist/tackle-box.umd.min.js"></script>
    <link src="path-to-library/dist/tackle-box.css">
  </head>	
  <body></body>
</html>	
```

## Setting Up

After Tacklebox is installed in your Vue project, it needs to be added to Vue before it can used in your components. There are two ways to acheive this:

### Importing Globally

Importing glbally will make all components available to the Vue instance. This allows the use of all Tacklebox components in your app without the need to declare components in each component in which they are used.

In the file that creates your Vue instance, import Tacklebox and call the Vue.use() method, passing Tacklbox as an argument:

```javascript
  import Tacklebox from "@narrative.io/tackle-box"

  Vue.use(Tacklebox)
  Vue.use(Vuetify); 

  new Vue({
    ...
  })

```

::: tip
Note that Vuetify is a dependency of Tacklebox and must be enabled in your app
:::

### Importing Features A-la-carte

If you only require a subset of the features of Tacklebox, components may be imported into your app individually as needed. In the component in which you would like to use a Tacklbox components, import the components and their stylesheets from _@narrative.io/tackle-box_ and register the component:

```vue
<template>  
  <NioButton>My Button Label</NioButton>
</template>

<script>

import NioButton from "@narrative.io/tackle-box/src/components/Button";

export default {
  name: 'my-component-name',
  components: {
    NioButton
  }
}
</script>
```