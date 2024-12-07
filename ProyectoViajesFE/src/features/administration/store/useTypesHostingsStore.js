import { create } from "zustand";
import { createTypeHostingAsync, deleteTypeHostingAsync, getTypesHostingsByIdAsync, getTypesHostingsPaginationAsync, updateTypeHostingAsync } from "../../../shared/actions/typesHostings/typesHostings.admin.action";

export const useTypesHostingsStore = create((set, get) => ({
    selectedTypeHosting: {},
    typesHostingsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getTypesHostingsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({typesHostingsData: result.data});
            return;
        }
        set({typesHostingsData: null});
        return;
    },

    getTypeHosting: async (id) => {
        const result = await getTypesHostingsByIdAsync(id);
        if (result.status) {
            set({ selectedTypeHosting: result.data });
            return result;
        }
        set({ selectedTypeHosting: null });
        return result;
    },

    nextPage: async () => {
        const { typesHostingsData } = get();
        if (typesHostingsData.hasNextPage) {
            await get().loadData("", typesHostingsData.currentPage + 1);
        }
    },

    previousPage: async () => {
        const { typesHostingsData } = get();
        if (typesHostingsData.hasPreviousPage) {
            await get().loadData("", typesHostingsData.currentPage - 1);
        }
    },
    updateTypeHosting: async (typeHosting) => {
        const result = await updateTypeHostingAsync(typeHosting);
        if(result.status) {
            set({selectedTypeHosting: result.data});
            return result;
        }
        return result;
    },
    deleteTypeHosting: async (id) => {
        const result = await deleteTypeHostingAsync(id);
        if (result.status) {
          await get().loadData("", get().typesHostingsData.currentPage);
          return result;
        }
        return result;
      },
      createTypeHosting: async (typeHosting) => {
        const result = await createTypeHostingAsync(typeHosting);
        if(result.status) {
          await get().loadData("", get().typesHostingsData.currentPage);
          return result;
        }
        return result;
      },
}));