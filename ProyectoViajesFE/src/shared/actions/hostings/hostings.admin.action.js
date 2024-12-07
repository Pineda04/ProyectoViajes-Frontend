import { viajesApi } from "../../../config/api/viajesApi";

export const getHostingsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/hostings?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const getHostingsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/hostings/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const updateHostingAsync = async (hosting) => {
  try {
    const { data } = await viajesApi.put(`/hostings/${hosting.id}`, hosting);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const deleteHostingAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/hostings/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const createHostingAsync = async (hosting) => {
  try {
    const { data } = await viajesApi.post(`/hostings`, hosting);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};