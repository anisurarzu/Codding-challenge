import { coreAxios } from "../utilities/axios";

export const getUserInfo = async (batchID, requisitionID) => {
  const { data } = await coreAxios.get(`/usersDetailInfo`);
  return data;
};
