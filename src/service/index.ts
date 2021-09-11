import { createService } from "./request";
import { BASE_URL, TIME_OUT } from "./request/configEnv";
import { localCache } from "@/utils/index";
export const $http = createService({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache("token", "sessionStorage");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  }
});
