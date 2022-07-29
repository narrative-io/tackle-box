<template lang="pug">
  TestApiError(
    error="test"
    imageUrl="/error.png"
    @close="goBack"
  ) 


</template>

<script>
import TestApiError from '../components-private/ApiError'
import NioButton from '../components/Button'
export default {
  components: {
    TestApiError,
    NioButton
  },
  methods: {
    goBack() {
      console.log("Testing go back");
    }
  }
}
</script>