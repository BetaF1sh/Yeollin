<template>
	<div>
		<line-chart v-if="chartData.bool" :data="chartData" :options="chartOptions"/>
		<h3 v-else>연습 기록 없음</h3>
	</div>
</template>

<script>
import "tui-chart/dist/tui-chart.css";
import { lineChart } from "@toast-ui/vue-chart";

export default {
  name: "LineChart",
  components: { lineChart },
  data() {
    return {
      chartData: {
        bool: true,
        categories: ["1분", "2분", "3분", "4분", "5분"],
        series: [
          {
            name: "타속",
            data: [200, 140, 160, 200, 200]
          },
          {
            name: "점수",
            data: [100, 100, 100, 100, 100]
          }
        ]
      },
      chartOptions: {
        chart: {
          width: 600,
          height: 300
        },
        yAxis: {
          pointOnColumn: false
        },
        series: {
          showDot: true
        },
        legend: {
          align: "bottom"
        },
        chartExportMenu: {
          visible: false
        }
      }
    };
  }
};
</script>

<style lang="scss">
.tui-chart {
  padding-top: 1em;
}
</style>
