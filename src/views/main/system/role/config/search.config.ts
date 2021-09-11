import { IFormItem, IFrom } from "@/base_ui/index";
const formItems: IFormItem[] = [
  {
    field: "id",
    type: "input",
    label: "id",
    placeholder: "请输入角色Id"
  },
  {
    field: "name",
    type: "input",
    label: "角色",
    placeholder: "请输入角色名称"
  },
  {
    field: "intro",
    type: "input",
    label: "权限介绍",
    placeholder: "请输入权限"
  },
  {
    field: "createTime",
    type: "datePicker",
    label: "创建时间",
    placeholder: "请输入时间范围",
    otherOptions: {
      startPlaceholder: "开始时间",
      endPlaceholder: "结束时间",
      type: "daterange"
    }
  }
];
const labelWidth = "120px";
const itemStyle = {
  padding: "5px 40px"
};
const formConfig: IFrom = {
  formItems,
  labelWidth,
  itemStyle
};
export default formConfig;
