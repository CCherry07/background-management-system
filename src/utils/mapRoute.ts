interface IBreadcrumbs {
  name: string;
  path?: string;
}
export default function mapRoute(
  menus: any[],
  currentPath: string,
  isDeep?: boolean
): any {
  const crumbs: IBreadcrumbs[] = [];
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu = mapRoute(menu.children ?? [], currentPath);
      if (findMenu) {
        if (isDeep) {
          crumbs.push({ name: menu.name });
          crumbs.push({ name: findMenu.name });
          return crumbs;
        }
        return findMenu;
      }
    }
    if (menu.type === 2 && currentPath === menu.url) {
      return menu;
    }
  }
}
