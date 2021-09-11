<template>
  <div class="pageSearch">
    <cherry-from v-bind="searchFormconfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="footer">
          <ElButton type="primary" @click="reset">重置</ElButton>
          <ElButton type="primary" @click="search">搜索</ElButton>
        </div>
      </template>
    </cherry-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CherryFrom } from "@/base_ui/index";
export default defineComponent({
  props: {
    searchFormconfig: {
      type: Object,
      reuqird: true
    }
  },
  components: {
    CherryFrom
  },
  emits: ["reset", "search"],
  setup(props, { emit }) {
    //搜索的字段
    const fromData = props.searchFormconfig?.formItems ?? [];
    const fromDataItems: any = {};
    for (const item of fromData) {
      fromDataItems[item.field] = "";
    }
    const formData = ref(fromDataItems);
    const reset = () => {
      for (const key in fromDataItems) {
        formData.value[key] = fromDataItems[key];
      }
      emit("reset");
    };
    const search = () => {
      emit("search", formData.value);
    };
    return {
      formData,
      reset,
      search
    };
  }
});
</script>

<style scoped>
.footer {
  text-align: right;
  margin: 0 50px 0 0;
  padding-bottom: 20px;
}
</style>
