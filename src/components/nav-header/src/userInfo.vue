<template>
  <div class="user-info">
    <ElDropdown class="eldropdwon">
      <span class="el-dropdown-link">
        <el-avatar
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          size="small"
        >
        </el-avatar>
        <span> cherry </span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <el-dropdown-item @click="handleExit">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户权限</el-dropdown-item>
          <el-dropdown-item divided>=</el-dropdown-item>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { localCache } from "@/utils";
export default defineComponent({
  setup() {
    const router = useRouter();
    const handleExit = () => {
      const res = (function () {
        try {
          localCache.deleteCache("token", "sessionStorage");
          localCache.deleteCache("userMenu", "localStorage");
          localCache.deleteCache("userInfo", "localStorage");
          return true;
        } catch (error) {
          return error;
        }
      })();
      if (res) {
        router.push("/login");
      } else {
        console.log(res);
      }
    };
    return { handleExit };
  }
});
</script>

<style scoped lang="less">
.user-info .eldropdwon .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  &:focus-visible {
    outline: none;
  }
}
</style>
