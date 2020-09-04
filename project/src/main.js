// import * as components from './components'
import NioButton from './components/Button/Button.vue'

const ComponentLibrary = {
  install(Vue) {
    Vue.component('nio-button', NioButton.default)
    // for (const componentName in components) {
      // const component = components[componentName]
      // Vue.component(component.name, component)
    // }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}