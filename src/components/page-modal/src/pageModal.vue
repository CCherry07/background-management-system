<template>
  <div class="page-modal">
    <el-dialog
      destroy-on-close
      title="提示"
      v-model="centerDialogVisible"
      width="30%"
      center
    >
      <cherryFrom v-bind="modalConfig" v-model="formRow"></cherryFrom>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleDetermination">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import cherryFrom from "@/base_ui/from/CherryFrom.vue";
export default defineComponent({
  components: {
    cherryFrom
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultRow: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const centerDialogVisible = ref(false);
    const formRow = ref<any>({});
    watch(
      () => props?.defaultRow,
      (newValue: any) => {
        for (const item of props.modalConfig.formItems) {
          formRow.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    const store = useStore();

    const handleDetermination = () => {
      if (props?.defaultRow.id) {
        // 编辑
        console.log("编辑");
        store.dispatch("system/edit", {
          pageName: props.pageName,
          id: props.defaultRow.id,
          editInfo: { ...formRow.value, ...props.otherInfo }
        });
      } else {
        //新建
        console.log("新建");
        store.dispatch("system/newConstruction", {
          pageName: props.pageName,
          newInfo: { ...formRow.value, ...props.otherInfo }
        });
      }
      centerDialogVisible.value = false;
    };
    return {
      centerDialogVisible,
      formRow,
      handleDetermination
    };
  }
});
</script>

<style scoped></style>
