<template>
  <div
    ref="eChartInitRef"
    :style="{
      width: width,
      height: height
    }"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue";
import useEChart from "../hooks/useEchart";
import type { EChartsOption } from "echarts";
//props定义及默认值
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
const eChartInitRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions } = useEChart(eChartInitRef.value!);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
