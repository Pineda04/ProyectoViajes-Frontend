import { viajesApi } from "../../../config/api/viajesApi";

export const getTypesFlightsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/types_flight?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const getTypesFlightsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/types_flight/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const updateTypeFlightAsync = async (typeFlight) => {
  try {
    const { data } = await viajesApi.put(`/types_flight/${typeFlight.id}`, typeFlight);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const deleteTypeFlightAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/types_flight/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const createTypeFlightAsync = async (typeFlight) => {
  try {
    const { data } = await viajesApi.post(`/types_flight`, typeFlight);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};