export default function mapAuth(userMenus: any[]) {
  const auth: string[] = [];
  const _recursionAuth = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursionAuth(menu.children ?? []);
      } else if (menu.type === 3) {
        auth.push(menu.permission);
      }
    }
  };
  _recursionAuth(userMenus);
  return auth;
}
