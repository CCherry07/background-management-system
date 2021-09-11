<template>
  <div class="dashboard">
    <ElRow :gutter="20">
      <ElCol :span="7">
        <CherryCard title="分类商品数量（饼图）">
          <pieEChart :pieData="categoryGoodsCount"></pieEChart>
        </CherryCard>
      </ElCol>
      <ElCol :span="10">
        <CherryCard title="不同城市商品销量">
          <mapEChart :mapData="addressGoodsSale"></mapEChart>
        </CherryCard>
      </ElCol>
      <ElCol :span="7">
        <CherryCard title="分类商品数量（玫瑰图）">
          <roseEChart :roseData="categoryGoodsCount"></roseEChart>
        </CherryCard>
      </ElCol>
    </ElRow>
    <ElRow :gutter="20" class="_elbow">
      <ElCol :span="12">
        <CherryCard title="分类商品销量">
          <lineEChart v-bind="categoryGoodsSale"></lineEChart>
        </CherryCard>
      </ElCol>
      <ElCol :span="12">
        <CherryCard title="分类商品收藏">
          <barEChart v-bind="categoryGoodsFavor"></barEChart>
        </CherryCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import CherryCard from "@/base_ui/card";

import {
  pieEChart,
  roseEChart,
  lineEChart,
  barEChart,
  mapEChart
} from "@/components/page-echarts";

import { useState } from "@/vuex_hooks";
export default defineComponent({
  name: "dashboard",
  components: {
    CherryCard,
    pieEChart,
    roseEChart,
    lineEChart,
    barEChart,
    mapEChart
  },
  setup() {
    const categoryGoodsCount = computed(() => {
      return useState("categoryGoodsCount", "dashboard").value.map(
        (item: any) => {
          return {
            name: item.name,
            value: item.goodsCount
          };
        }
      );
    });

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoods = useState("categoryGoodsSale", "dashboard");
      for (const item of categoryGoods.value) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }
      return {
        xLabels,
        values
      };
    });
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const categoryGoodsFavor = useState("categoryGoodsFavor", "dashboard");
      for (const item of categoryGoodsFavor.value) {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      }
      return {
        xLabels,
        values
      };
    });

    const addressGoodsSale = computed(() => {
      return useState("addressGoodsSale", "dashboard").value.map(
        (item: any) => {
          return {
            name: item.address,
            value: item.count
          };
        }
      );
    });
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  }
});
</script>

<style scoped>
._elbow {
  margin-top: 20px;
}
</style>
