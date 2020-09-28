<template lang="pug">
    v-radio-group.nio-radio-group(
      @change="$emit('update', $event)"
      :model="model" 
      :rules="parsedRules"
      :value="model"
      :ripple="false"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-radio-group-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")
      slot  
</template>

<script>
  export default {
    name: 'nio-radio-group',
    props: {
      "model": { required: false },
      "rules": { required: false }
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
      parsedRules: []
    }),
    methods: {
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
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>
