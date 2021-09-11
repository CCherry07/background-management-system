<template>
  <div class="pie-echart">
    <baseEChart :options="option"></baseEChart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import baseEChart from "@/base_ui/echart";
import { EChartsOption } from "echarts";
const props = withDefaults(
  defineProps<{
    pieData?: EChartsOption;
  }>(),
  {}
);
const option = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
