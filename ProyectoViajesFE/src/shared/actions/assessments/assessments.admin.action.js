import { viajesApi } from "../../../config/api";

export const getAssessmentsPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await viajesApi.get(
      `/assessments?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const getAssessmentsByIdAsync = async (id) => {
  try {
    const { data } = await viajesApi.get(
      `/assessments/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const deleteAssessmentAsync = async (id) => {
  try {
    const { data } = await viajesApi.delete(`/assessments/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const updateAssessmentAsync = async (assessment) => {
  try {
    const { data } = await viajesApi.put(`/assessments/${assessment.id}`, assessment);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
export const createAssessmentAsync = async (assessment) => {
  try {
    const { data } = await viajesApi.post(`/assessments`, assessment);
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};