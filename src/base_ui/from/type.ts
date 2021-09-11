type IFormType = "input" | "password" | "select" | "datePicker";

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  placeholder?: any;
  rules?: any[];
  options?: any[];
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IFrom {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
