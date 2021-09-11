type cacheType = "localStorage" | "sessionStorage" | "all";

class LocalCache {
  setCache(key: string, value: any, type: cacheType) {
    if (type === "localStorage") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    if (type === "sessionStorage") {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }
  getCache(key: string, type: cacheType) {
    if (type === "localStorage") {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    }
    if (type === "sessionStorage") {
      const value = window.sessionStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    }
  }
  deleteCache(key: string, type: cacheType) {
    try {
      if (type === "localStorage") {
        window.localStorage.removeItem(key);
      } else {
        window.sessionStorage.removeItem(key);
      }
      return true;
    } catch (error) {
      return error;
    }
  }
  clearCache(type: cacheType = "all") {
    try {
      if (type === "localStorage") {
        window.localStorage.clear();
      }
      if (type === "sessionStorage") {
        window.sessionStorage.clear();
      }
      if (type === "all") {
        window.localStorage.clear();
        window.sessionStorage.clear();
      }
      return true;
    } catch (error) {
      return error;
    }
  }
}
export { LocalCache };
