<template>
  <div class="longinPanel">
    <!--标题 -->
    <h1 class="title">Cherry Blossoms</h1>
    <!-- 账号输入框 -->
    <el-tabs type="border-card" stretch v-model="inputName">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登陆</span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="email">
        <template #label>
          <span><i class="el-icon-eleme"></i> 邮箱登录</span>
        </template>
        <loginEmail />
      </el-tab-pane>
    </el-tabs>
    <!-- 账号控件 -->
    <div class="rememberPassword">
      <ElCheckbox
        label="记住密码"
        checked
        v-model="isKeepPassword"
      ></ElCheckbox>
      <el-link type="primary" underline href="https://www.bilibili.com/"
        >忘记密码</el-link
      >
    </div>
    <!-- 登录 -->
    <ElButton type="primary" class="gologin" @click="goLogin"
      >立即登录
    </ElButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import loginAccount from "./loginAccount.vue";
import loginEmail from "./loginEmail.vue";
export default defineComponent({
  components: {
    loginAccount,
    loginEmail
  },
  setup() {
    const isKeepPassword = ref(true);
    const inputName = ref<string>("account");
    const accountRef = ref<InstanceType<typeof loginAccount>>();
    const goLogin = () => {
      if (inputName.value === "account") {
        accountRef.value?.accountLogin(isKeepPassword.value);
      } else {
        console.log("email");
      }
    };
    return {
      isKeepPassword,
      inputName,
      accountRef,
      goLogin
    };
  }
});
</script>

<style lang="less" scoped>
.longinPanel {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .el-tabs {
    width: 320px;
  }
  .rememberPassword {
    width: 320px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .gologin {
    margin-top: 20px;
    width: 320px;
  }
}
</style>
