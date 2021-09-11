<template>
  <div class="role">
    <page-search :searchFormconfig="searchFormConfig"></page-search>
    <pageContent
      :listConfig="listConfig"
      pageName="role"
      @handleEdit="handleEdit"
      @newConstruction="newConstruction"
    ></pageContent>
    <pageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      pageName="role"
      :defaultRow="defaultRow"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="collectionOptions"
        >
        </el-tree>
      </div>
    </pageModal>
  </div>
</template>

<script lang="ts">
import type { ElTree } from "element-plus";

import { defineComponent, ref, nextTick } from "vue";

import { listConfig } from "./config/content.config";
import searchFormConfig from "./config/search.config";
import { modalConfig } from "./config/modal.config";

import pageModal from "@/components/page-modal";
import pageContent from "@/components/page-content";
import pageSearch from "@/components/page-search";

import usePageModal from "@/hooks/usePageModal";
import { getMenuLeaves } from "@/utils/mapMenu";
import { useState } from "@/vuex_hooks";
export default defineComponent({
  components: {
    pageContent,
    pageSearch,
    pageModal
  },
  name: "role",
  setup() {
    //处理pagemodal的hooks
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editHooks = (item: any) => {
      const leafKeys = getMenuLeaves(item.menuList);
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const { defaultRow, handleEdit, newConstruction, pageModalRef } =
      usePageModal(undefined, editHooks);
    const menuList = useState("menuList");
    const otherInfo = ref({});
    const collectionOptions = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      listConfig,
      searchFormConfig,
      modalConfig,

      defaultRow,
      pageModalRef,
      elTreeRef,
      menuList,
      otherInfo,

      newConstruction,
      handleEdit,
      collectionOptions
    };
  }
});
</script>

<style scoped>
.menu-tree {
  margin: 0 50px;
}
</style>
