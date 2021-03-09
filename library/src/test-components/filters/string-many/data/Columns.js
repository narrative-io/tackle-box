const Columns = [
	{
		name: "slat",
		props: {
			title: "name",
			subtitle: this.computeSubtitle
		}
	},
	{
		name: "listId",
		label: "List ID",
	},
	{
		name: "idCount",
		label: "ID Count",
		computed: this.computeIdCount
	} 
]

export default Columns