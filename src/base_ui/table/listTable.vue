<template>
  <div class="cherry-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="headerExtension">
          <slot name="headerExtension"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="list"
      border
      style="width: 100%"
      stripe
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <ElTableColumn
        v-if="showSelct"
        type="selection"
        width="60px"
        align="center"
      ></ElTableColumn>
      <ElTableColumn
        v-if="showSerialNumber"
        type="index"
        label="序号"
        align="center"
        width="80px"
      ></ElTableColumn>
      <template v-for="item of showList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <div class="footerExtension">
          <ElPagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :total="listCount"
            :current-page="page.currentPages"
            :page-size="10"
            :page-sizes="[10, 20, 30, 50]"
            layout="total,sizes,pager,next,jumper"
          ></ElPagination>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    showList: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    showSerialNumber: {
      type: Boolean,
      defalut: false
    },
    showSelct: {
      type: Boolean,
      defalut: false
    },
    title: {
      type: String,
      defalut: ""
    },
    page: {
      type: Object,
      defalut: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      defalut: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ["handleSelectChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit("handleSelectChange", value);
    };
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage });
    };
    return {
      handleSelectChange,
      handleCurrentChange,
      handleSizeChange
    };
  }
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer {
  float: right;
}
</style>
