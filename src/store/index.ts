import { createStore } from "vuex";
import login from "./login/login";
import system from "./main/system";
import dashboard from "./dashboard/dashboard";
import { getPageListData } from "@/service/main/system";
const store = createStore({
  state() {
    return {
      name: "Cherry Blossoms",
      departmentList: [],
      roleList: [],
      menuList: []
    };
  },
  mutations: {
    setDepartmentList(state, departmentList: any) {
      state.departmentList = departmentList;
    },
    setRoleList(state, roleList: any) {
      state.roleList = roleList;
    },
    setMenuList(state, menuList: any) {
      state.menuList = menuList;
    }
  },
  getters: {},
  actions: {
    async getInitData({ commit }) {
      console.log("数据初始化");
      const resDepartment = await getPageListData("/department/list", {
        offset: 0,
        size: 100
      });
      const resRole = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      });
      const resMenu = await getPageListData("/menu/list", {});
      const { list: menuList } = resMenu.data;
      commit("setMenuList", menuList);
      commit("setDepartmentList", resDepartment.data.list);
      commit("setRoleList", resRole.data.list);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});
export function setupStore() {
  store.dispatch("dashboard/getDataCount");
  store.dispatch("login/initStore");
}

export default store;
