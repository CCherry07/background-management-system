import { LocalCache } from "./cache";
import mapMenu from "./mapMenu";
import mapRoute from "./mapRoute";
import mapAuth from "./mapAuthority";
import { formatUtc } from "./date_format";
export const localCache = new LocalCache();
export { mapMenu, mapRoute, formatUtc, mapAuth };
