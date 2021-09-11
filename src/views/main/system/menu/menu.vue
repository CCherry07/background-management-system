<template>
  <div class="menu">
    <pageContent :listConfig="listConfig" pageName="menu"></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { listConfig } from "./config/content.config";
export default defineComponent({
  name: "menus",
  components: {
    pageContent
  },
  setup() {
    return {
      listConfig
    };
  }
});
</script>

<style scoped></style>
