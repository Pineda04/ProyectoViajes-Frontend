import { create } from "zustand";
import { createHostingAsync, deleteHostingAsync, getHostingsByIdAsync, getHostingsPaginationAsync, updateHostingAsync } from "../../../shared/actions/hostings/hostings.admin.action";

export const useHostingsStore = create((set, get) => ({
    selectedHosting: {},
    hostingsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getHostingsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({hostingsData: result.data});
            return;
        }
        set({hostingsData: null});
        return;
    },

    getHosting: async (id) => {
        const result = await getHostingsByIdAsync(id);
        if (result.status) {
            set({ selectedHosting: result.data });
            return result;
        }
        set({ selectedHosting: null });
        return result;
    },

    nextPage: async () => {
        const { hostingsData } = get();
        if (hostingsData.hasNextPage) {
            await get().loadData("", hostingsData.currentPage + 1);
        }
    },

    previousPage: async () => {
        const { hostingsData } = get();
        if (hostingsData.hasPreviousPage) {
            await get().loadData("", hostingsData.currentPage - 1);
        }
    },
    updateHosting: async (hosting) => {
        const result = await updateHostingAsync(hosting);
        if(result.status) {
            set({selectedHosting: result.data});
            return result;
        }
        return result;
    },
    deleteHosting: async (id) => {
        const result = await deleteHostingAsync(id);
        if (result.status) {
          await get().loadData("", get().hostingsData.currentPage);
          return result;
        }
        return result;
      },
      createHosting: async (hosting) => {
        const result = await createHostingAsync(hosting);
        if(result.status) {
          await get().loadData("", get().hostingsData.currentPage);
          return result;
        }
        return result;
      },
}));