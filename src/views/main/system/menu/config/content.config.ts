export const listConfig = {
  showList: [
    { prop: "id", label: "ID", minwidth: "60" },
    { prop: "name", label: "菜单名称", minwidth: "60" },
    { prop: "type", label: "类型", minwidth: "60" },
    { prop: "url", label: "URL", minwidth: "180" },
    { prop: "icon", label: "icon", minwidth: "120" },
    { prop: "permission", label: "权限", minwidth: "120" },
    {
      prop: "createAt",
      label: "创建时间",
      minwidth: "200",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minwidth: "200",
      slotName: "updateAt"
    },
    {
      label: "操作",
      minwidth: "240px",
      slotName: "handler"
    }
  ],
  title: "菜单列表",
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  },
  showFooter: false
};
