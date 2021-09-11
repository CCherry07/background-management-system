import { computed } from "vue";
import { Computed, Mapper, useStore } from "vuex";
export default function useMapper(
  mapStateType: Mapper<Computed>,
  mapper: any
): any {
  const store = useStore();
  if (typeof mapper === "string") {
    mapper = [mapper];
  }
  const storeFns = mapStateType(mapper);
  const mapStore: any = {};
  Object.keys(storeFns).forEach((keys) => {
    const fn = storeFns[keys].bind({ $store: store });
    mapStore[keys] = computed(fn);
  });
  if (Object.keys(mapStore).length === 1) {
    return mapStore[mapper];
  }

  return mapStore;
}
