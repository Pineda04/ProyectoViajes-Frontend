import { viajesApi } from "../../../config/api";

export const getReservationsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/reservations?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getReservationsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/reservations/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deleteReservationAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/reservations/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const createReservationPackageAsync = async (reservation) => {
  try {
    const { data } = await viajesApi.post(`/reservations`, reservation);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};