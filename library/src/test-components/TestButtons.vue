<template lang="pug">
	.test-buttons
		NioButton(:variant="'primary'") Primary
		NioButton(:variant="'primary'" disabled) Primary
		NioButton(:variant="'secondary'") Secondary
		NioButton(:variant="'secondary'" disabled) Secondary
		NioButton(:variant="'tertiary'") Tertiary
		NioButton(:variant="'tertiary'" disabled) Tertiary
		NioButton(normal-primary) Quick Add
		NioButton(normal-secondary) View Details
		NioButton(normal-tertiary) Forgot Password
		NioButton(normal-primary-prepend disabled iconName="utility-plus") New Onboarding
		NioButton(normal-secondary-prepend disabled iconName="utility-chevron-left") Previous
		NioButton(normal-tertiary-prepend disabled iconName="utility-arrow-left") Back to Main
		NioButton(normal-primary-append iconName="utility-plus") Checkout
		NioButton(normal-secondary-append iconName="utility-chevron-right") More Options
		NioButton(normal-tertiary-append iconName="utility-chevron-left") View All Suppliers
		NioButton(jumbo-icon iconName="utility-plus")
		NioButton(normal-icon iconName="utility-plus")
		NioButton(:variant="'selected'") Primary
		NioButton.test(jumbo-primary) Test Me
		NioButton(jumbo-primary-prepend disabled iconName="utility-arrow-left") Back to Main
		NioButton(jumbo-primary-append iconName="utility-plus") Checkout
</template>

<script>

import NioButton from '../components/Button'

export default {
  components: {
   NioButton
  },
  data: () => ({
    
  })
};
</script>

<style lang="sass" scoped>
.test-buttons
  .nio-h6
    margin-bottom: 20px
  .nio-button
    margin-bottom: 10px      
</style>