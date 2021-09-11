import { mapGetters, createNamespacedHelpers } from "vuex";
import useMapper from "./useMapper";
export default function useGetters(
  mapper: string[] | string,
  moduleName?: string
) {
  moduleName = moduleName?.trim();
  if (moduleName) {
    const { mapGetters } = createNamespacedHelpers(moduleName);
    return useMapper(mapGetters, mapper);
  } else {
    return useMapper(mapGetters, mapper);
  }
}
