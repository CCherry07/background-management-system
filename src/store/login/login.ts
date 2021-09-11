import { Module } from "vuex";
import { localCache, mapMenu, mapAuth } from "@/utils/index";
import {
  accountLogin,
  getUserInfoById,
  getUserMenuResById,
  accountType
} from "@/service/login/login";
import router from "@/router";
interface I_loginModule {
  token: string;
  userInfo: any;
  userMenu: any;
  authority: any[];
}
const loginModule: Module<I_loginModule, any> = {
  namespaced: true,
  state() {
    return {
      token: "Cherry Blossoms",
      userInfo: {},
      userMenu: [],
      authority: []
    };
  },
  mutations: {
    setToken(state, token: string) {
      state.token = `"${token}"`;
    },
    setUserInfo(state, data: any) {
      state.userInfo = data;
    },
    setUserMenuRes(state, data: any) {
      state.userMenu = data;
      const routes = mapMenu(data);
      for (let i = 0; i < routes.length; i++) {
        router.addRoute("main", routes[i]);
      }
      const auth = mapAuth(data);
      state.authority = auth;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: accountType) {
      // 获取token
      const loginRes = (await accountLogin(payload)) as any;
      const { id, token } = loginRes.data;
      commit("setToken", token);
      localCache.setCache("token", `${token}`, "sessionStorage");
      // 请求用户信息
      dispatch("getInitData", null, { root: true });

      const userInfoRes = (await getUserInfoById(id)) as any;
      commit("setUserInfo", userInfoRes.data);
      localCache.setCache("userInfo", userInfoRes, "localStorage");
      //请求用户菜单
      const userMenuRes = (await getUserMenuResById(
        userInfoRes.data.id
      )) as any;
      const userMenu = userMenuRes.data;
      commit("setUserMenuRes", userMenu);
      localCache.setCache("userMenu", userMenu, "localStorage");
    },
    async emailLoginAction({ commit }, payload: accountType) {
      alert("后端api未实现");
    },

    initStore({ commit, dispatch }) {
      const token = localCache.getCache("token", "sessionStorage");
      if (token) {
        commit("setToken", token);
      }
      dispatch("getInitData", null, { root: true });
      const userInfo = localCache.getCache("userInfo", "localStorage");
      if (userInfo) {
        commit("setUserInfo", userInfo);
      }
      const userMenu = localCache.getCache("userMenu", "localStorage");
      if (token) {
        commit("setUserMenuRes", userMenu);
      }
    }
  }
};
export default loginModule;
