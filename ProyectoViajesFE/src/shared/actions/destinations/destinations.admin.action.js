import { viajesApi } from "../../../config/api";

export const getDestinationsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/destinations?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getDestinationsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/destinations/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const updateDestinationAsync = async (destination) => {
  try {
    const { data } = await viajesApi.put(`/destinations/${destination.id}`, destination);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deleteDestinationAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/destinations/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const createDestinationAsync = async (destination) => {
  try {
    const { data } = await viajesApi.post(`/destinations`, destination);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};