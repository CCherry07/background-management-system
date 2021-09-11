import * as ECharts from "echarts";
import chinaMapData from "../data/china.json";
ECharts.registerMap("chinaMap", chinaMapData);
export default function useECharts(el: HTMLElement) {
  const eChartsInit = ECharts.init(el);
  const setOptions = (options: ECharts.EChartsOption) => {
    eChartsInit.setOption(options);
  };
  const setResize = () => {
    eChartsInit.resize();
  };
  window.addEventListener("resize", () => {
    eChartsInit.resize();
  });
  return {
    eChartsInit,
    setOptions,
    setResize
  };
}
