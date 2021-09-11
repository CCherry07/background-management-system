const showList = [
  { prop: "id", label: "ID", minwidth: "60" },
  { prop: "name", label: "用户名", minwidth: "60" },
  { prop: "realname", label: "姓名", minwidth: "60" },
  { prop: "cellphone", label: "电话", minwidth: "180" },
  { prop: "enable", label: "状态", minwidth: "120", slotName: "status" },
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

export const userListConfig = {
  showList,
  showSerialNumber,
  showSelect,
  title
};
