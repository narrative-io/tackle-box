<template lang="pug">
ag-charts-vue(:options="fullOptions")
</template>


<script>
import { AgChartsVue } from "ag-charts-vue";
export default {
  components: {
    AgChartsVue,
  },
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      fullOptions: {},
      defaultSeries: {
        type: "histogram",
        fill: "#4F64AF",
        strokeWidth: 1,
        stroke: "white",
        shadow: {
          enabled: false,
        },
        highlightStyle: {
          item: {
            strokeWidth: 0,
            fill: "#AEB9E8",
          },
        },
      },
      defaultOptions: {
        width: 400,
        height: 200,
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        data: [],
        series: [],
        legend: {
          enabled: false,
        },
        axes: [
          {
            type: "number",
            position: "bottom",
            min: 0,
            max: 100,
            gridStyle: {
              stroke: "#fff",
              lineDash: [0, 0],
            },
            tick: {
              width: 0,
            },
            line: {
              width: 2,
              color: "#AEB9E8",
            },
            label: {
              color: "#4F64AF",
              fontSize: 10,
              fontWeight: "normal",
              formatter: ({ value }) => {
                return value === 0 || value === 100 ? `${value}` : undefined;
              },
            },
          },
          {
            type: "number",
            position: "left",
            line: {
              width: 0,
            },
            tick: {
              width: 0,
            },
            label: {
              color: "#fff",
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.fullOptions = {
      ...this.defaultOptions,
      ...this.options,
      series: Array.isArray(this.options.series) ? this.options.series.map(s => ({...this.defaultSeries, ...s})) : []
    };
    console.log("here",this.options.series, this.fullOptions);
  },
};
</script>