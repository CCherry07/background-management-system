<template>
  <div class="loginEmail">
    <ElForm label-width="60px" :rules="EmailRules" :model="Email">
      <ElFormItem label="邮箱" prop="email">
        <ElInput v-model="Email.email" placeholder="请输入邮箱"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码" prop="E_password">
        <ElInput
          v-model="Email.E_password"
          placeholder="请输入密码"
          type="password"
        ></ElInput>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { EmailRules } from "./accountConfig";
export default defineComponent({
  setup() {
    const Email = reactive({
      email: "",
      E_password: ""
    });
    return {
      Email,
      EmailRules
    };
  }
});
</script>

<style lang="less" scoped></style>
