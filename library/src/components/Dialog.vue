<template lang="pug">
  .nio-dialog(v-if="model" :class="{visible: model}" ref="dialog")
    .nio-dialog-scrim
    transition(appear)
      .nio-dialog-content(v-if="model && visible" :style="{maxWidth: maxWidth}")
        slot
</template>

<script>
  export default {
    name: 'nio-dialog',
    props: {
      "model": { required: false },
      "maxWidth": { type: String, required: false, default: '100%' }
    },
    model: {
      prop: "model"
    },
    data: () => ({
			visible: false,
			dialogId: null
    }),
    methods: {
			makeid() {
				let result = '';
				let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				let charactersLength = characters.length;
				for (let i = 0; i < 16; i++ ) {
						result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}
				return result;
			}
    },
    mounted() {	
			this.dialogId = this.makeid()
			this.visible = true
			this.$emit('mounted')
		},
		watch: {
			model(val) {
				if (val === true) {
					this.$nextTick(() => {
						this.nioAddHeightTrackedElement(this.dialogId, this.$refs.dialog) 
					})	
				} else {
					this.$nextTick(() => {
						this.nioRemoveHeightTrackedElement(this.dialogId) 
					})	
				}
			}
		},
    destroyed() {
			this.nioRemoveHeightTrackedElement(this.dialogId)
      this.$emit('destroyed')
    },
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_dialog'
</style>
