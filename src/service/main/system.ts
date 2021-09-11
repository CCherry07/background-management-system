import { $http } from "../index";

const getPageListData = (pageUrl: string, queryInfo: any) => {
  const res = $http.post({
    url: pageUrl,
    data: queryInfo
  });
  return res;
};

const deletePageRow = (url: string) => {
  const res = $http.delete({
    url
  });
  return res;
};
const newConstructionService = (url: string, newInfo: any) => {
  console.log(newInfo);
  const res = $http.post({
    url,
    data: newInfo
  });
  return res;
};
const editService = (url: string, editInfo: any) => {
  const res = $http.patch({
    url,
    data: editInfo
  });
  return res;
};
export { getPageListData, deletePageRow, newConstructionService, editService };
