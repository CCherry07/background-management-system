import { useStore } from "vuex";

export function useAuth(pageName: string, handleName: string) {
  const store = useStore();
  const auth = store.state.login.authority;
  const authentication = `system:${pageName}:${handleName}`;
  return !!auth.find((item: any) => item === authentication);
}
