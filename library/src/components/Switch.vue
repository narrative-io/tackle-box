<template lang="pug">
    v-switch.nio-switch(
      @change="update($event)"
      :rules="parsedRules"
      v-model="tempModel"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-switch-ref"
      :ripple="false"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
      slot  
</template>

<script>
  export default {
    name: 'nio-switch',
    props: {
      "model": { required: false },
      "rules": { required: false }
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
			parsedRules: [],
			tempModel: null
    }),
    methods: {
			update(val) {
				this.$emit('update', val)
			},
			parseRules() {
        if (this.rules) {
          this.rules.map((rule, index) => {
            let func = rule.toString()
            let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
            this.parsedRules[index] = new Function("value", funcBody)
          });
        }
      }
    },
    mounted() {	
			this.tempModel = this.model
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
		},
		watch: {
			rules() {
				this.parseRules()
			},
			model(val) {
				this.tempModel = val
			}
		}
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_switch'  
</style>
