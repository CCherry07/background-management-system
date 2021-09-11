import { ref } from "vue";
import pageModal from "@/components/page-modal";
type cb = (row?: any) => void;
export default function usePageModal(newCb?: cb, editCb?: cb) {
  const defaultRow = ref({});
  const pageModalRef = ref<InstanceType<typeof pageModal>>();
  const newConstruction = () => {
    defaultRow.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    newCb && newCb();
  };
  const handleEdit = (row: any) => {
    defaultRow.value = { ...row };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
    }
    editCb && editCb(row);
  };
  return {
    pageModalRef,
    defaultRow,
    newConstruction,
    handleEdit
  };
}
