import { $http } from "../index";

interface accountType {
  account: string;
  A_password: string;
}

enum loginAPI {
  AccountLogin = "login",
  users = "users/",
  role = "role/"
}

function accountLogin(account: accountType) {
  return $http.post({
    url: loginAPI.AccountLogin,
    data: {
      name: account.account,
      password: account.A_password
    }
  });
}
function getUserInfoById(id: number) {
  return $http.get({
    url: loginAPI.users + id
  });
}

function getUserMenuResById(id: number) {
  return $http.get({
    url: loginAPI.role + id + "/menu"
  });
}
export { accountType, accountLogin, getUserInfoById, getUserMenuResById };
