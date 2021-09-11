<template>
  <div>
    <baseEChart :options="option"></baseEChart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";
import baseEChart from "@/base_ui/echart";
import * as echarts from "echarts";
const props = withDefaults(
  defineProps<{
    xLabels: string[];
    values: any[];
  }>(),
  {}
);
const option = computed(() => {
  return {
    title: {
      text: "Cherry7",
      subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
    },
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.values
      }
    ]
  };
});
</script>

<style scoped></style>
