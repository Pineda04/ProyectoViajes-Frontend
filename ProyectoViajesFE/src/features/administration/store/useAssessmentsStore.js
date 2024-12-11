import { create } from "zustand";
import { createAssessmentAsync, deleteAssessmentAsync, getAssessmentsByIdAsync, getAssessmentsPaginationAsync, updateAssessmentAsync } from "../../../shared/actions/assessments/assessments.admin.action";

export const useAssessmentsStore = create((set, get) => ({
    selectedAssessment: {},
    assessmentsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getAssessmentsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({assessmentsData: result.data});
            return;
        }
        set({assessmentsData: null});
        return;
    },
    getAssessment: async (id) => {
        const result = await getAssessmentsByIdAsync(id);
        if (result.status) {
            set({ selectedAssessment: result.data });
            return result;
        }
        set({ selectedAssessment: null });
        return result;
    },
    nextPage: async () => {
        const { assessmentsData } = get();
        if (assessmentsData.hasNextPage) {
            await get().loadData("", assessmentsData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { assessmentsData } = get();
        if (assessmentsData.hasPreviousPage) {
            await get().loadData("", assessmentsData.currentPage - 1);
        }
    },
    deleteAssessment: async (id) => {
        const result = await deleteAssessmentAsync(id);
        if (result.status) {
          await get().loadData("", get().assessmentsData.currentPage);
          return result;
        }
        return result;
      },
    createAssessment: async (assessment) => {
        const result = await createAssessmentAsync(assessment);
        if(result.status) {
          await get().loadData("", get().activitiesData.currentPage);
          return result;
        }
        return result;
      },
      updateAssessment: async (assessment) => {
        const result = await updateAssessmentAsync(assessment);
        if(result.status) {
            set({selectedAssessment: result.data});
            return result;
        }
        return result;
    },
}));