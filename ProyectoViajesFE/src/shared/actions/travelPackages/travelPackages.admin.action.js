import { viajesApi } from "../../../config/api/viajesApi";

export const getTravelPackagesPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/travel_packages?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getTravelPackagesByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/travel_packages/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const updateTravelPackageAsync = async (travelPackage) => {
  try {
    const { data } = await viajesApi.put(`/travel_packages/${travelPackage.id}`, travelPackage);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deleteTravelPackageAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/travel_packages/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const createTravelPackageAsync = async (travelPackage) => {
  try {
    const { data } = await viajesApi.post(`/travel_packages`, travelPackage);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};