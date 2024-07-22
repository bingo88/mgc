<template>
  <div :id="chartId" class="chart"></div>
</template>
    
    <script>
import * as echarts from "echarts";
export default {
  name: "MyChart",
  props: {
    chartId: {
      type: String,
      default: "main",
    },
    title: {
      type: String,
      default: "",
    },
    subtext: {
      type: String,
      default: "",
    },
    seriesName: {
      type: String,
      default: "",
    },
    seriesData: {
      type: Array,
      default: () => [],
    },
    radius: {
      type: String,
      default: "60%",
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom = document.getElementById(this.chartId);
      var myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: this.title,
          subtext: this.subtext,
          textStyle: {
            fontSize: 16,
            width: 300,
            overflow: "break",
          },
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top:'20%',
          right: "0%",
          icon: "circle", 
          itemHeight: 12,
          orient: "vertical",
          textStyle: {
            rich: {
              // 通过富文本rich给每个项设置样式，下面的oneone、twotwo、threethree可以理解为"每一列"的样式
              oneone: {
                // 设置文字、数学、英语这一列的样式
                width: 70,
                color: "#000000",
                fontSize: 12,
                fontWeight: "bolder",
              },
              twotwo: {
                // 设置10分、20分、30分这一列的样式
                width: 30,
                color: "#333",
                fontSize: 12,
              },
              threethree: {
                // 设置百分比这一列的样式
                width: 20,
                color: "rgb(155 155 160)",
                fontSize: 12,
              },
            },
          },
          formatter: (name) => {
            // formatter格式化函数动态呈现数据
            console.log(name);
            let value = 0;
            let percent = 0;
            let total = 0;
            this.seriesData.forEach((item) => {
              total += item.value;
              if (item.name === name) {
                value = item.value;
              }
            });
            percent = ((value / total) * 100).toFixed(2);
            return `{oneone|${name}}  {twotwo|${value}人}   {threethree|${percent}%}`;
          },
        },
        series: [
          {
            name: this.seriesName,
            type: "pie",
            center:['30%','60%'],
            radius: this.radius,
            data: this.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
    
  <style scoped lang="scss">
.chart {
  width: 440px;
  height: 150px;
}
</style>
    