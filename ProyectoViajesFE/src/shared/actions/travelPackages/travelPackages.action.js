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
