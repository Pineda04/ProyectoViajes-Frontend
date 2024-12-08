import { create } from "zustand";
import { createFlightAsync, deleteFlightAsync, getFlightsByIdAsync, getFlightsPaginationAsync, updateFlightAsync } from "../../../shared/actions/flights/flights.admin.action";

export const useFlightsStore = create((set, get) => ({
    selectedFlight: {},
    flightsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getFlightsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({flightsData: result.data});
            return;
        }
        set({flightsData: null});
        return;
    },

    getFlight: async (id) => {
        const result = await getFlightsByIdAsync(id);
        if (result.status) {
            set({ selectedFlight: result.data });
            return result;
        }
        set({ selectedFlight: null });
        return result;
    },

    nextPage: async () => {
        const { flightsData } = get();
        if (flightsData.hasNextPage) {
            await get().loadData("", flightsData.currentPage + 1);
        }
    },

    previousPage: async () => {
        const { flightsData } = get();
        if (flightsData.hasPreviousPage) {
            await get().loadData("", flightsData.currentPage - 1);
        }
    },
    updateFlight: async (flight) => {
        const result = await updateFlightAsync(flight);
        if(result.status) {
            set({selectedFlight: result.data});
            return result;
        }
        return result;
    },
    deleteFlight: async (id) => {
        const result = await deleteFlightAsync(id);
        if (result.status) {
          await get().loadData("", get().flightsData.currentPage);
          return result;
        }
        return result;
      },
      createFlight: async (flight) => {
        const result = await createFlightAsync(flight);
        if(result.status) {
          await get().loadData("", get().flightsData.currentPage);
          return result;
        }
        return result;
      },
}));