import { create } from "zustand";
import { createDestinationAsync, deleteDestinationAsync, getDestinationsByIdAsync, getDestinationsPaginationAsync, updateDestinationAsync } from "../../../shared/actions/destinations/destinations.admin.action";

export const useDestinationsStore = create((set, get) => ({
    selectedDestination: {},
    destinationsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getDestinationsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({destinationsData: result.data});
            return;
        }
        set({destinationsData: null});
        return;
    },
    getDestination: async (id) => {
        const result = await getDestinationsByIdAsync(id);
        if (result.status) {
            set({ selectedDestination: result.data });
            return result;
        }
        set({ selectedDestination: null });
        return result;
    },
    nextPage: async () => {
        const { destinationsData } = get();
        if (destinationsData.hasNextPage) {
            await get().loadData("", destinationsData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { destinationsData } = get();
        if (destinationsData.hasPreviousPage) {
            await get().loadData("", destinationsData.currentPage - 1);
        }
    },
    updateDestination: async (destination) => {
        const result = await updateDestinationAsync(destination);
        if(result.status) {
            set({selectedDestination: result.data});
            return result;
        }
        return result;
    },
    deleteDestination: async (id) => {
        const result = await deleteDestinationAsync(id);
        if (result.status) {
          await get().loadData("", get().destinationsData.currentPage);
          return result;
        }
        return result;
      },
      createDestination: async (destination) => {
        const result = await createDestinationAsync(destination);
        if(result.status) {
          await get().loadData("", get().destinationsData.currentPage);
          return result;
        }
        return result;
      },
}));