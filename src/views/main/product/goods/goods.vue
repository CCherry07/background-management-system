<template>
  <div class="goods">
    <page-search></page-search>
    <page-content :listConfig="listConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">
        {{ `￥${scope.row.oldPrice}` }}
      </template>
      <template #newPrice="scope">
        {{ `￥${scope.row.newPrice}` }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import pageSearch from "@/components/page-search";
import { listConfig } from "./config/content.config";
export default defineComponent({
  name: "goods",
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return {
      listConfig
    };
  }
});
</script>

<style scoped></style>
