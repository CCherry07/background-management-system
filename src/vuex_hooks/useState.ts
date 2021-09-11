import { mapState, createNamespacedHelpers } from "vuex";
import useMapper from "./useMapper";
export default function useState(
  mapper: string[] | string,
  moduleName?: string
) {
  moduleName = moduleName?.trim();
  if (moduleName) {
    const { mapState } = createNamespacedHelpers(moduleName);
    return useMapper(mapState, mapper);
  } else {
    return useMapper(mapState, mapper);
  }
}
