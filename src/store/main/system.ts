import { Module } from "vuex";
import {
  getPageListData,
  deletePageRow,
  newConstructionService,
  editService
} from "@/service/main/system";
interface I_systemModule {
  menuList: any[];
  menuCount: number;
  goodsCount: number;
  goodsList: any[];
  usersList: any[];
  usersCount: number;
  roleList: any[];
  roleCount: number;
}
const systemModule: Module<I_systemModule, any> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,

      roleList: [],
      roleCount: 0,

      goodsList: [],
      goodsCount: 0,

      menuList: [],
      menuCount: 0
    };
  },
  getters: {
    listData(state: any) {
      return (pageName: string) => {
        const listName = `${pageName}List`;
        return state[listName];
      };
    },
    listCount(state: any) {
      return (pageName: string) => {
        const countName = `${pageName}Count`;
        return state[countName];
      };
    }
  },
  mutations: {
    setUsersList(state, list: any[]) {
      state.usersList = list;
    },
    setUsersCount(state, userCount: number) {
      state.usersCount = userCount;
    },
    setRoleList(state, list: any[]) {
      state.roleList = list;
    },
    setRoleCount(state, totalCount: number) {
      state.roleCount = totalCount;
    },
    setGoodsCount(state, totalCount: number) {
      state.goodsCount = totalCount;
    },
    setGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    setMenuCount(state, totalCount: number) {
      state.menuCount = totalCount;
    },
    setMenuList(state, list: any[]) {
      state.menuList = list;
    }
  },
  actions: {
    async getPageList({ commit }, payload: any) {
      const { pageName, queryInfo } = payload;
      const newPageUrl = `/${pageName.toLowerCase()}/list`;
      const pageListData = await getPageListData(newPageUrl, queryInfo);
      const { list, totalCount } = pageListData.data;
      const newPageName = pageName.replace(
        pageName[0],
        pageName[0].toUpperCase()
      );
      commit(`set${newPageName}List`, list);
      commit(`set${newPageName}Count`, totalCount);
    },
    async deleteRowById({ dispatch }: any, payload: any) {
      const { pageName, id } = payload;
      const url = `/${pageName}/${id}`;
      const res = await deletePageRow(url);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
      return res;
    },

    async newConstruction({ dispatch }, payload) {
      const { pageName, newInfo } = payload;
      const url = `/${pageName}`;
      await newConstructionService(url, newInfo);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async edit({ dispatch }, payload) {
      const { pageName, editInfo, id } = payload;
      const url = `/${pageName}/${id}`;
      await editService(url, editInfo);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
