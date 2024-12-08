import { viajesApi } from "../../../config/api/viajesApi";

export const getFlightsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/flights?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const getFlightsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/flights/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const updateFlightAsync = async (flight) => {
  try {
    const { data } = await viajesApi.put(`/flights/${flight.id}`, flight);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const deleteFlightAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/flights/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const createFlightAsync = async (flight) => {
  try {
    const { data } = await viajesApi.post(`/flights`, flight);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};