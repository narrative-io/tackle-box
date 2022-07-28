<template lang="pug">
  TestError(
    error="test"
    imageUrl="/error.png"
    @close="goBack"
  ) 


</template>

<script>
import TestError from '../components-private/Error'
import NioButton from '../components/Button'
export default {
  components: {
    TestError,
    NioButton
  },
  methods: {
    goBack() {
      console.log("Testing go back");
    }
  }
}
</script>