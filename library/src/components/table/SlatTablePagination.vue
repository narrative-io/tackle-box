<template lang="pug">
	.nio-slat-table-pagination
		NioSelect(
			small
			:model="itemsPerPage"
			:items="itemsPerPageOptions"
			@change="$emit('itemsPerPageChange', $event)"
		)
			template(v-slot:selection="data") {{ data.item === -1 ? 'Show all' : `${data.item} items per page`}}
			template(v-slot:item="data") {{ data.item === -1 ? 'Show all' : `${data.item} items per page`}}
		.pages(v-if="numItems && itemsPerPage !== -1")
			.count.text-primary-dark.nio-p.nio-bold 
				span.start(v-if="currentPage * itemsPerPage - itemsPerPage + 1 !== numItems") {{ currentPage * itemsPerPage - itemsPerPage + 1 }}-
				span.end {{ Math.min(itemsPerPage * currentPage, numItems) }} 
				span.total of {{ numItems }}
			.actions
				.prev
					NioButton(
						container 
						@click="prevPage"
						:disabled="currentPage === 1"
					)
						NioIcon(
							name="utility-chevron-left"
							color="#415298"
						)
				.next
					NioButton(
						container 
						@click="nextPage"
						:disabled="numItems <= currentPage * itemsPerPage"
					)
						NioIcon(
							name="utility-chevron-right"
							color="#415298"
						)
</template>

<script>

import NioIcon from '../icon/Icon'
import NioSelect from '../Select'
import NioButton from '../Button'

export default {
  name: 'nio-slat-table-pagination',
  props: {
		"numItems": { type: Number, required: true },
		"itemsPerPage": { type: Number, required: true },
		"itemsPerPageOptions": { type: Array, required: true },
		"currentPage": { type: Number, required: true }
	},
	model: {
    prop: "itemsPerPage",
    event: "itemsPerPageChange"
  },
  data: () => ({
   
  }),
  mounted() {
  },
  methods: {
		itemsPerPageChange(val) {
      // this.$emit('itemsPerPageChange', val)
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prevPage')
      } 
    },
    nextPage() {
      if (this.numItems > this.currentPage * this.itemsPerPage) {
        this.$emit('nextPage')
      }
    },
  },
  watch: {
   
  },
  components: {
    NioIcon, 
    NioSelect,
    NioButton
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-pagination'  
</style>

<style lang="sass">
	.nio-slat-table-pagination
</style>

