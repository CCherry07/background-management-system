import { RouteRecordRaw } from "vue-router";
export default function mapMenu(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  // webpack 的文件查找context方法 （文件路径 ，是否深度查找，匹配方式 ）
  const routeFiles = require.context("@/router/main", true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require("@/router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });
  // 根据userMenu获取需要添加的routes
  // 根据type的值判断是否添加路由
  const _getRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) {
          routes.push(route);
        } else {
          continue;
        }
      } else {
        _getRoute(menu.children);
      }
    }
  };
  _getRoute(userMenu);
  return routes;
}

export function getMenuLeaves(menuList: any) {
  const leaves: number[] = [];
  const recursionGetLeaves = (menuList: any) => {
    for (const menu of menuList) {
      if (menu.children) {
        recursionGetLeaves(menu.children);
      } else {
        leaves.push(menu.id);
      }
    }
  };
  recursionGetLeaves(menuList);
  return leaves;
}
