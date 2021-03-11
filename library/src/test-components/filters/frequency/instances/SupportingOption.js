const Default = {
  name: "deduplication",
  type: "frequency",
  title: "Deduplication",
  description: "Detail how often you want to buy the same data point.",
  value: "default",
  options: [
    {
      label: `Inlclude all Data Points`,
      value: 'default',
    },
    {
      label: 'Custom',
      value: 'custom',
    }
  ],
  customOption: {
    heading: 'Deduplication Strategy',
    description: 'Exclude irrelevant or redundant data even when you buy from multiple suppliers.',
    frequency: {
      config: {
        periodOptions: [
          {
            label: 'Days',
            value: 'day'
          },
          {
            label: 'Weeks',
            value: 'week'
          },
          {
            label: 'Months',
            value: 'months'
          }
        ]  
      },
      value: [15, {
        label: 'Days',
        value: 'day'
      }]
    },
    supportingOption: {		
      config: {
        items: [
          {
            label: 'Days',
            value: 'day'
          },
          {
            label: 'Weeks',
            value: 'week'
          },
          {
            label: 'Months',
            value: 'months'
          }
        ]
      },
      value: [{
        label: 'Days',
        value: 'day'
      }]
    }
  }
}

export default Default