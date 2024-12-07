import { create } from "zustand";
import { createActivityAsync, deleteActivityAsync, getActivitiesByIdAsync, getActivitiesPaginationAsync, updateActivityAsync } from "../../../shared/actions/activities";

export const useActivitiesStore = create((set, get) => ({
    selectedActivity: {},
    activitiesData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getActivitiesPaginationAsync(searchTerm, page);
        if(result.status) {
            set({activitiesData: result.data});
            return;
        }
        set({activitiesData: null});
        return;
    },

    getActivity: async (id) => {
        const result = await getActivitiesByIdAsync(id);
        if (result.status) {
            set({ selectedActivity: result.data });
            return result;
        }
        set({ selectedActivity: null });
        return result;
    },

    nextPage: async () => {
        const { activitiesData } = get();
        if (activitiesData.hasNextPage) {
            await get().loadData("", activitiesData.currentPage + 1);
        }
    },

    previousPage: async () => {
        const { activitiesData } = get();
        if (activitiesData.hasPreviousPage) {
            await get().loadData("", activitiesData.currentPage - 1);
        }
    },
    updateActivity: async (activity) => {
        const result = await updateActivityAsync(activity);
        if(result.status) {
            set({selectedActivity: result.data});
            return result;
        }
        return result;
    },
    deleteActivity: async (id) => {
        const result = await deleteActivityAsync(id);
        if (result.status) {
          await get().loadData("", get().activitiesData.currentPage);
          return result;
        }
        return result;
      },
      createActivity: async (activity) => {
        const result = await createActivityAsync(activity);
        if(result.status) {
          await get().loadData("", get().activitiesData.currentPage);
          return result;
        }
        return result;
      },
}));