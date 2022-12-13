import { coreAxios } from "../utilities/axios";

export const getSectors = async (batchID, requisitionID) => {
  const { data } = await coreAxios.get(`/sectorsDropdown`);
  return data;
};
