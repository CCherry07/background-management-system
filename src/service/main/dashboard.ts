import { $http } from "../index";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}
export function getCategoryGoodsCount() {
  return $http
    .get({
      url: DashboardAPI.categoryGoodsCount
    })
    .then((value) => {
      value.type = "CategoryGoodsCount";
      return value;
    });
}
export function getCategoryGoodsSale() {
  return $http
    .get({
      url: DashboardAPI.categoryGoodsSale
    })
    .then((value) => {
      value.type = "CategoryGoodsSale";
      return value;
    });
}
export function getCategoryGoodsFavor() {
  return $http
    .get({
      url: DashboardAPI.categoryGoodsFavor
    })
    .then((value) => {
      value.type = "CategoryGoodsFavor";
      return value;
    });
}
export function getAddressGoodsSale() {
  return $http
    .get({
      url: DashboardAPI.addressGoodsSale
    })
    .then((value) => {
      value.type = "AddressGoodsSale";
      return value;
    });
}
