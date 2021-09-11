<template>
  <div class="user">
    <pageSearch
      :searchFormconfig="userFormConfig"
      @reset="reset"
      @search="search"
    />
    <pageContent
      :listConfig="userListConfig"
      pageName="users"
      ref="pageContentRef"
      @handleEdit="handleEdit"
      @newConstruction="newConstruction"
    />
    <pageModal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="users"
      :defaultRow="defaultRow"
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import pageSearch from "@/components/page-search";
import pageContent from "@/components/page-content";
import pageModal from "@/components/page-modal";

import userFormConfig from "./config/userSearch.config";
import { userListConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import usePageContent from "@/hooks/pageContent";
import userPageModal from "@/hooks/usePageModal";
import { useState } from "@/vuex_hooks";
export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const { pageContentRef, reset, search } = usePageContent();
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = false;
    };
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = true;
    };
    const { pageModalRef, newConstruction, handleEdit, defaultRow } =
      userPageModal(newCallBack, editCallBack);

    const departmentList = useState("departmentList");
    const roleList = useState("roleList");
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === "departmentId";
      });
      departmentItem!.options = departmentList.value.map((item: any) => {
        return { title: item.name, value: item.id };
      });

      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === "roleId";
      });
      roleItem!.options = roleList.value.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });

    return {
      userFormConfig,
      userListConfig,
      modalConfigRef,

      pageContentRef,
      pageModalRef,

      defaultRow,

      reset,
      search,
      newConstruction,
      handleEdit
    };
  }
});
</script>

<style scoped></style>
