import { App } from "vue";
import { formatUtc } from "../utils";
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtc(value);
    }
  };
}
