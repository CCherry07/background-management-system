const showList = [
  { prop: "id", label: "ID", minwidth: "60" },
  { prop: "name", label: "角色", minwidth: "60" },
  { prop: "intro", label: "intro", minwidth: "60" },
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
];
const showSerialNumber = true;
const showSelect = true;
const title = "用户列表";

export const listConfig = {
  showList,
  showSerialNumber,
  showSelect,
  title
};
