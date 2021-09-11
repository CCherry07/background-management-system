import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/service/main/dashboard";
const dashboardModule = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  getters: {},
  mutations: {
    setCategoryGoodsCount(state: any, data: any) {
      state.categoryGoodsCount = data;
    },
    setCategoryGoodsSale(state: any, data: any) {
      state.categoryGoodsSale = data;
    },
    setCategoryGoodsFavor(state: any, data: any) {
      state.categoryGoodsFavor = data;
    },
    setAddressGoodsSale(state: any, data: any) {
      state.addressGoodsSale = data;
    }
  },
  actions: {
    async getDataCount(ctx: any) {
      const request = await Promise.all([
        getCategoryGoodsCount(),
        getCategoryGoodsFavor(),
        getAddressGoodsSale(),
        getCategoryGoodsSale()
      ]);
      request.forEach((item) => {
        ctx.commit(`set${item.type}`, item.data);
      });
    }
  }
};
export default dashboardModule;
