import { viajesApi } from "../../../config/api/viajesApi";

export const getTypesHostingsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/types_hosting?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const getTypesHostingsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/types_hosting/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const updateTypeHostingAsync = async (typeHosting) => {
  try {
    const { data } = await viajesApi.put(`/types_hosting/${typeHosting.id}`, typeHosting);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const deleteTypeHostingAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/types_hosting/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const createTypeHostingAsync = async (typeHosting) => {
  try {
    const { data } = await viajesApi.post(`/types_hosting`, typeHosting);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};