<template lang="pug">
  TestApiError(
    error="Some error occured here"
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