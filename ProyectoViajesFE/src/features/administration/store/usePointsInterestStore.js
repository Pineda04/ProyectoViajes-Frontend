import { create } from "zustand";
import { createPointInterestAsync, deletePointInterestAsync, getPointsInterestByIdAsync, getPointsInterestPaginationAsync, updatePointInterestAsync } from "../../../shared/actions/pointsInterest/pointsInterest.admin.action";

export const usePointsInterestStore = create((set, get) => ({
    selectedPointInterest: {},
    pointsInterestData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getPointsInterestPaginationAsync(searchTerm, page);
        if(result.status) {
            set({pointsInterestData: result.data});
            return;
        }
        set({pointsInterestData: null});
        return;
    },
    getPointInterest: async (id) => {
        const result = await getPointsInterestByIdAsync(id);
        if (result.status) {
            set({ selectedPointInterest: result.data });
            return result;
        }
        set({ selectedPointInterest: null });
        return result;
    },
    nextPage: async () => {
        const { pointsInterestData } = get();
        if (pointsInterestData.hasNextPage) {
            await get().loadData("", pointsInterestData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { pointsInterestData } = get();
        if (pointsInterestData.hasPreviousPage) {
            await get().loadData("", pointsInterestData.currentPage - 1);
        }
    },
    updatePointInterest: async (pointInterest) => {
        const result = await updatePointInterestAsync(pointInterest);
        if(result.status) {
            set({selectedPointInterest: result.data});
            return result;
        }
        return result;
    },
    deletePointInterest: async (id) => {
        const result = await deletePointInterestAsync(id);
        if (result.status) {
          await get().loadData("", get().pointsInterestData.currentPage);
          return result;
        }
        return result;
      },
      createPointInterest: async (pointInterest) => {
        const result = await createPointInterestAsync(pointInterest);
        if(result.status) {
          await get().loadData("", get().pointsInterestData.currentPage);
          return result;
        }
        return result;
      },
}));