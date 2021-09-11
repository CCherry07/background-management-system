const showList = [
  { prop: "id", label: "ID", minwidth: "60" },
  { prop: "name", label: "商品名称", minwidth: "60" },
  { prop: "oldPrice", label: "旧价格", minwidth: "60", slotName: "oldPrice" },
  { prop: "newPrice", label: "新价格", minwidth: "180", slotName: "newPrice" },
  { prop: "imgUrl", label: "商品图片", minwidth: "120", slotName: "image" },
  { prop: "address", label: "产地", minwidth: "120" },
  { prop: "enable", label: "在售状态", minwidth: "120", slotName: "status" },
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
const title = "商品列表";

export const listConfig = {
  showList,
  showSerialNumber,
  showSelect,
  title
};
