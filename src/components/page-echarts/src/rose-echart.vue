<template>
  <div class="pie-echart">
    <baseEChart :options="options"></baseEChart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import baseEChart from "@/base_ui/echart";
import { EChartsOption } from "echarts";
const props = withDefaults(
  defineProps<{
    roseData: EChartsOption;
  }>(),
  {}
);
const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "分类商品数量",
        type: "pie",
        radius: [20, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
});
</script>

<style scoped></style>
