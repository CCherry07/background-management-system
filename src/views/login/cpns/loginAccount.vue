<template>
  <div class="loginAccount">
    <ElForm
      label-width="60px"
      :rules="accountRules"
      :model="account"
      ref="formRef"
    >
      <ElFormItem label="账号" prop="account">
        <ElInput v-model="account.account" placeholder="请输入账号"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码" prop="A_password">
        <ElInput
          v-model="account.A_password"
          placeholder="请输入密码"
          type="password"
          show-password
        ></ElInput>
      </ElFormItem>
    </ElForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { accountRules } from "./accountConfig";
import type { ElForm } from "element-plus";
import { localCache } from "@/utils";
import { useRouter } from "vue-router";
import { useState } from "@/vuex_hooks";
export default defineComponent({
  setup() {
    const router = useRouter();
    const account = reactive({
      account: localCache.getCache("account", "localStorage"),
      A_password: localCache.getCache("A_password", "localStorage")
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const store = useStore();

    const accountLogin = (isKeepPassword: boolean) => {
      formRef.value?.validate(async (valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache("account", account.account, "localStorage");
            localCache.setCache(
              "A_password",
              account.A_password,
              "localStorage"
            );
          } else {
            localCache.deleteCache("account", "localStorage");
            localCache.deleteCache("A_password", "localStorage");
          }
          await store.dispatch("login/accountLoginAction", { ...account });
          const token = window.sessionStorage.getItem("token");
          if (token === store.state.login.token) {
            router.push("/main");
          } else {
            router.push("/login");
          }
        } else {
          localCache.deleteCache("account", "localStorage");
          localCache.deleteCache("A_password", "localStorage");
        }
      });
    };
    return {
      formRef,
      account,
      accountRules,
      accountLogin
    };
  }
});
</script>

<style lang="less" scoped></style>
