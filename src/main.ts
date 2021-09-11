import { createApp } from "vue";
import { registerApp } from "./global";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.css";
import { $http } from "./service/index";
import router from "./router";
import store from "./store";
import { setupStore } from "./store";
import { localCache } from "./utils/index";
import { registerProp } from "./global";
const token = localCache.getCache("token", "sessionStorage");
if (token) {
  setupStore();
}
const app = createApp(App);
registerProp(app);
app.use(registerApp);
app.use($http);
app.use(router);
app.use(store);
app.mount("#app");
