import { viajesApi } from "../../../config/api";

export const getUsersPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/users?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getUsersByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/users/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deleteUserAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/users/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};