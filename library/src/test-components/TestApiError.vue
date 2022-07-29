<template lang="pug">
  TestApiError(
    error="Discover and install apps to unlock the full potential of the Narrative Data Commerce Platform"
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