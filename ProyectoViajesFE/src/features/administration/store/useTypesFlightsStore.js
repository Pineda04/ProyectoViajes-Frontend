import { create } from "zustand";
import { createTypeFlightAsync, deleteTypeFlightAsync, getTypesFlightsByIdAsync, getTypesFlightsPaginationAsync, updateTypeFlightAsync } from "../../../shared/actions/typesFlights/typesFlights.admin.action";

export const useTypesFlightsStore = create((set, get) => ({
    selectedTypeFlight: {},
    typesFlightsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getTypesFlightsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({typesFlightsData: result.data});
            return;
        }
        set({typesFlightsData: null});
        return;
    },

    getTypeFlight: async (id) => {
        const result = await getTypesFlightsByIdAsync(id);
        if (result.status) {
            set({ selectedTypeFlight: result.data });
            return result;
        }
        set({ selectedTypeFlight: null });
        return result;
    },

    nextPage: async () => {
        const { typesFlightsData } = get();
        if (typesFlightsData.hasNextPage) {
            await get().loadData("", typesFlightsData.currentPage + 1);
        }
    },

    previousPage: async () => {
        const { typesFlightsData } = get();
        if (typesFlightsData.hasPreviousPage) {
            await get().loadData("", typesFlightsData.currentPage - 1);
        }
    },
    updateTypeFlight: async (typeFlight) => {
        const result = await updateTypeFlightAsync(typeFlight);
        if(result.status) {
            set({selectedTypeFlight: result.data});
            return result;
        }
        return result;
    },
    deleteTypeFlight: async (id) => {
        const result = await deleteTypeFlightAsync(id);
        if (result.status) {
          await get().loadData("", get().typesFlightsData.currentPage);
          return result;
        }
        return result;
      },
      createTypeFlight: async (typeFlight) => {
        const result = await createTypeFlightAsync(typeFlight);
        if(result.status) {
          await get().loadData("", get().typesFlightsData.currentPage);
          return result;
        }
        return result;
      },
}));