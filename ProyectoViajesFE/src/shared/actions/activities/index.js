import { viajesApi } from "../../../config/api";

export const getActivitiesPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/activities?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const getActivitiesByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/activities/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const updateActivityAsync = async (activity) => {
  try {
    const { data } = await viajesApi.put(`/activities/${activity.id}`, activity);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const deleteActivityAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/activities/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};

export const createActivityAsync = async (activity) => {
  try {
    const { data } = await viajesApi.post(`/activities`, activity);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};