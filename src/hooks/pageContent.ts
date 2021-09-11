import { ref } from "vue";
import pageContent from "@/components/page-content";
export default function usePageContent() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();
  const reset = () => {
    pageContentRef.value?.request();
  };
  const search = (plod: any) => {
    pageContentRef.value?.request(plod);
  };
  return {
    pageContentRef,
    reset,
    search
  };
}

export { usePageContent };
