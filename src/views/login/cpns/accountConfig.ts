export const accountRules = {
  account: [
    { required: true, message: "账号必填内容", trigger: "blur" },
    {
      pattern: /^[A-Za-z0-9]{5,10}$/,
      message: "用户名必须是5-10个字符或数字",
      trigger: "blur"
    }
  ],
  A_password: [
    { required: true, message: "密码必填内容", trigger: "blur" },
    {
      pattern: /^[A-Za-z0-9]{5,10}$/,
      message: "密码必须是5-10个字符或数字",
      trigger: "blur"
    }
  ]
};

export const EmailRules = {
  email: [
    { required: true, message: "邮箱必填内容", trigger: "blur" },
    {
      pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: "邮箱必须是5个以上的字符或数字",
      trigger: "blur"
    }
  ],
  E_password: [
    { required: true, message: "密码必填内容", trigger: "blur" },
    {
      pattern: /^[A-Za-z0-9]{5,}$/,
      message: "密码必须是5个以上的字符或数字",
      trigger: "blur"
    }
  ]
};
