<template>
  <div class="login">
    <longinPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import longinPanel from "./cpns/loginPanel.vue";
export default defineComponent({
  components: {
    longinPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/img/login-bg.svg");
}
</style>
