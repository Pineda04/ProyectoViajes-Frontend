import { viajesApi } from "../../../config/api";

export const getPointsInterestPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/points_interest?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getPointsInterestByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/points_interest/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const updatePointInterestAsync = async (pointInterest) => {
  try {
    const { data } = await viajesApi.put(`/points_interest/${pointInterest.id}`, pointInterest);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deletePointInterestAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/points_interest/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const createPointInterestAsync = async (pointInterest) => {
  try {
    const { data } = await viajesApi.post(`/points_interest`, pointInterest);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};