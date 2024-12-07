import { create } from "zustand";
import { createTravelPackageAsync, deleteTravelPackageAsync, getTravelPackagesByIdAsync, getTravelPackagesPaginationAsync, updateTravelPackageAsync } from "../../../shared/actions/travelPackages/travelPackages.admin.action";

export const useTravelPackagesStore = create((set, get) => ({
    selectedTravelPackage: {},
    travelPackagesData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getTravelPackagesPaginationAsync(searchTerm, page);
        if(result.status) {
            set({travelPackagesData: result.data});
            return;
        }
        set({travelPackagesData: null});
        return;
    },
    getTravelPackage: async (id) => {
        const result = await getTravelPackagesByIdAsync(id);
        if (result.status) {
            set({ selectedTravelPackage: result.data });
            return result;
        }
        set({ selectedTravelPackage: null });
        return result;
    },
    nextPage: async () => {
        const { travelPackagesData } = get();
        if (travelPackagesData.hasNextPage) {
            await get().loadData("", travelPackagesData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { travelPackagesData } = get();
        if (travelPackagesData.hasPreviousPage) {
            await get().loadData("", travelPackagesData.currentPage - 1);
        }
    },
    updateTravelPackage: async (travelPackage) => {
        const result = await updateTravelPackageAsync(travelPackage);
        if(result.status) {
            set({selectedTravelPackage: result.data});
            return result;
        }
        return result;
    },
    deleteTravelPackage: async (id) => {
        const result = await deleteTravelPackageAsync(id);
        if (result.status) {
          await get().loadData("", get().travelPackagesData.currentPage);
          return result;
        }
        return result;
      },
      createTravelPackage: async (travelPackage) => {
        const result = await createTravelPackageAsync(travelPackage);
        if(result.status) {
          await get().loadData("", get().travelPackagesData.currentPage);
          return result;
        }
        return result;
      },
}));