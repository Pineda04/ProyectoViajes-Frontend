import { viajesApi } from "../../../config/api";

// Ver todos
export const getDestinationsList = async (searchTerm = "", page = 1) => {
  try {
    const { data } = await viajesApi.get(
      `/destinations?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

// Ver por id
export const getDestinationById = async (id) => {
  try {
    const { data } = await viajesApi.get(`/destinations/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
