const Spark = { 
	name: "spark",
	type: "spark",
	title: "Spark Query",
	description: "Default description",
	value: 'custom',
	options: [
			{
			label: `Inlcude all values`,
			value: 'default',
		},
		{
			label: "Include if present",
			value: 'ifPresent',
		},
		{
			label: 'Custom',
			value: 'custom',
		}
	],
  customOption: {

  },
	expressions: ['age_v1 > 5']
}

const SparkMultipleExpressions = { 
	name: "spark",
	type: "spark",
	title: "Spark Query",
	description: "Default description",
	value: 'custom',
	options: [
			{
			label: `Inlcude all values`,
			value: 'default',
		},
		{
			label: "Include if present",
			value: 'ifPresent',
		},
		{
			label: 'Custom',
			value: 'custom',
		}
	],
  customOption: {

  },
	expressions: ['age_v1 > 5', 'age_v1 < 10', 'age_v1 > 15']
}

export default [Spark, SparkMultipleExpressions]