import type { App } from "vue";
import registerProperties from "./register_prop";
import register_element from "./register_element";
export function registerApp(app: App): void {
  register_element(app);
}
export function registerProp(app: App): void {
  return registerProperties(app);
}
