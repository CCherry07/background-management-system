<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFlod ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="switchIcon"
    ></i>
    <div class="content">
      <div>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <template v-for="item of breadcrumbs" :key="item.name">
            <el-breadcrumb-item :to="{ path: item.path }">{{
              item.name
            }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
      <div>
        <userInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import userInfo from "./userInfo.vue";
import { mapRoute } from "@/utils/index";
import { useState } from "@/vuex_hooks";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    userInfo
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const route = useRoute();
    const breadcrumbs = computed(() => {
      let userMenus = useState("userMenu", "login");
      const routePath = route.path;
      return mapRoute(userMenus.value, routePath, true);
    });
    let isFlod = ref(false);
    const switchIcon = () => {
      isFlod.value = !isFlod.value;
      emit("foldChange", isFlod.value);
    };
    return {
      isFlod,
      breadcrumbs,
      switchIcon
    };
  }
});
</script>

<style scoped lang="less">
.fold-menu {
  font-size: 25px;
  cursor: pointer;
}
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
