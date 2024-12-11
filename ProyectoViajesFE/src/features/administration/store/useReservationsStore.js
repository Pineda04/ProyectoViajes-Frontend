import { create } from "zustand";
import { createReservationPackageAsync, deleteReservationAsync, getReservationsByIdAsync, getReservationsPaginationAsync } from "../../../shared/actions/reservations/reservations.admin.action";

export const useReservationsStore = create((set, get) => ({
    selectedReservation: {},
    reservationsData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getReservationsPaginationAsync(searchTerm, page);
        if(result.status) {
            set({reservationsData: result.data});
            return;
        }
        set({reservationsData: null});
        return;
    },
    getReservation: async (id) => {
        const result = await getReservationsByIdAsync(id);
        if (result.status) {
            set({ selectedReservation: result.data });
            return result;
        }
        set({ selectedReservation: null });
        return result;
    },
    nextPage: async () => {
        const { reservationsData } = get();
        if (reservationsData.hasNextPage) {
            await get().loadData("", reservationsData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { reservationsData } = get();
        if (reservationsData.hasPreviousPage) {
            await get().loadData("", reservationsData.currentPage - 1);
        }
    },
    deleteReservation: async (id) => {
        const result = await deleteReservationAsync(id);
        if (result.status) {
          await get().loadData("", get().reservationsData.currentPage);
          return result;
        }
        return result;
      },
      createReservation: async (reservation) => {
        const result = await createReservationPackageAsync(reservation);
        if(result.status) {
          await get().loadData("", get().reservationsData.currentPage);
          return result;
        }
        return result;
      },
}));