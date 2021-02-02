<template lang="pug">
  v-app
    slot
</template>

<script>

export default {
  name: "nio-application",
  mounted() {
    this.nioInitializeApplication(this)
  }
};
</script>

<style lang="sass" scoped>

</style>