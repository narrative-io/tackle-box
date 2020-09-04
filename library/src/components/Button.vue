<template>
  <v-btn class="nio-button extra-large" :ripple="false" :class="[size, variant, {caps: caps}]">
    <slot></slot>
	</v-btn>	
</template>

<script>
  // import { VBtn } from 'vuetify/lib'
	console.log("button main")
	
	export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large" },
      "caps": { type: Boolean, required: false, default: false }
		},
		mounted() {
			console.log("mounted")
		},
    // components: { VBtn }
  }
</script>

<style lang="scss">

  .nio-button {
    display: block
	}

</style>