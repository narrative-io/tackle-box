import Vue from "vue";
import Vuetify from "vuetify/lib";

import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";
import AnimatedLoading from "./components/AnimatedLoading.vue";
import Selection from "./components/Selection.vue";
import NioButton from "./components/Button.vue";

Vue.use(Vuetify);

const Components = {
  HelloWorld,
  Footer,
  HamburgerMenu,
  AnimatedLoading,
	Selection,
	NioButton
};

Vue.component("HelloWorld", HelloWorld);
Vue.component("Footer", Footer);
Vue.component("HamburgerMenu", HamburgerMenu);
Vue.component("AnimatedLoading", AnimatedLoading);
Vue.component("Selection", Selection);
Vue.component("NioButton", NioButton);

export { HelloWorld };
export { Footer };
export { HamburgerMenu };
export { AnimatedLoading };
export { Selection };
export { NioButton };

// Export the library as a plugin
export default Components;
