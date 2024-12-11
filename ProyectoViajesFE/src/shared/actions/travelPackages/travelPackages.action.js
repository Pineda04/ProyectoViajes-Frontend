import { viajesApi } from "../../../config/api";

export const getTravelPackagesList = async (searchTerm = "", page = 1, averageStars = 0) => {
  try {
    const { data } = await viajesApi.get(
      `/travel_packages?searchTerm=${searchTerm}&page=${page}&averageStars=${averageStars}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const getPopularTravelPackagesList = async (
  searchTerm = "", 
  averageStars = 0, 
  sortBy = "averageStars", 
  sortOrder = "desc"
) => {
  try {
    const queryParams = new URLSearchParams({
      searchTerm,
      averageStars,
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
    });

    const { data } = await viajesApi.get(`/travel_packages?${queryParams}`);
    return data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

// Obtener paquete de viaje por ID
export const getTravelPackageById = async (id) => {
  try {
    const { data } = await viajesApi.get(`/travel_packages/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};