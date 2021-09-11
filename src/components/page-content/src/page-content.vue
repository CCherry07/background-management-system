<template>
  <div class="content">
    <list-table
      :list="listData"
      :listCount="listCount"
      v-bind="listConfig"
      v-model:page="pageInfo"
    >
      <template #status="scope">
        <ElButton
          plain
          :type="scope.row.enable ? 'primary' : 'danger'"
          size="mini"
        >
          {{ scope.row.enable ? "已启用" : "已禁用" }}
        </ElButton>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.createAt) }} </span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handleBtns">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="mini"
            v-if="isUpdate"
            @click="handleEdit(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="mini"
            v-if="isDelete"
            @click="deleteRow(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <template #headerExtension>
        <ElButton
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="newConstruction"
        >
          新建
        </ElButton>
        <ElButton class="el-icon-time" v-if="isUpdate"></ElButton>
      </template>
      <template
        v-for="item of otherSlot"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </list-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { listTable } from "@/base_ui/index";
import { useAuth } from "@/hooks/useAuth";
export default defineComponent({
  components: {
    listTable
  },
  props: {
    listConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ["newConstruction", "handleEdit"],
  setup(props, { emit }) {
    const store = useStore();

    const isCreate = useAuth(props.pageName, "create");
    const isUpdate = useAuth(props.pageName, "update");
    const isDelete = useAuth(props.pageName, "delete");
    const isQuery = useAuth(props.pageName, "query");

    const pageInfo = ref({ currentPage: 0, pageSize: 10 });

    watch(pageInfo, () => request());
    const request = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageList", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      });
    };
    request();
    const listData = computed(() => {
      return store.getters["system/listData"](props.pageName);
    });
    const listCount = computed(() => {
      return store.getters["system/listCount"](props.pageName);
    });
    const existedSlot = ["status", "handler", "createAt", "updateAt"];
    const otherSlot = props.listConfig?.showList.filter((item: any) => {
      if (
        existedSlot.every((el) => {
          return el !== item.slotName;
        })
      ) {
        return true;
      } else {
        return false;
      }
    });

    const deleteRow = (row: any) => {
      store.dispatch("system/deleteRowById", {
        pageName: props.pageName,
        id: row.id
      });
    };

    const newConstruction = () => {
      emit("newConstruction");
    };
    const handleEdit = (row: any) => {
      emit("handleEdit", row);
    };
    return {
      listData,
      listCount,
      pageInfo,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      request,
      deleteRow,
      newConstruction,
      handleEdit
    };
  }
});
</script>

<style scoped>
.content {
  padding: 30px;
  border-top: 10px solid #f5f5f5;
}
</style>
