import { create } from "zustand";
import { deleteUserAsync, getUsersByIdAsync, getUsersPaginationAsync } from "../../../shared/actions/users/users.admin.action";

export const useUsersStore = create((set, get) => ({
    selectedUser: {},
    usersData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },
    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getUsersPaginationAsync(searchTerm, page);
        if(result.status) {
            set({usersData: result.data});
            return;
        }
        set({usersData: null});
        return;
    },
    getUser: async (id) => {
        const result = await getUsersByIdAsync(id);
        if (result.status) {
            set({ selectedUser: result.data });
            return result;
        }
        set({ selectedUser: null });
        return result;
    },
    nextPage: async () => {
        const { usersData } = get();
        if (usersData.hasNextPage) {
            await get().loadData("", usersData.currentPage + 1);
        }
    },
    previousPage: async () => {
        const { usersData } = get();
        if (usersData.hasPreviousPage) {
            await get().loadData("", usersData.currentPage - 1);
        }
    },
    deleteUser: async (id) => {
        const result = await deleteUserAsync(id);
        if (result.status) {
          await get().loadData("", get().usersData.currentPage);
          return result;
        }
        return result;
      }
}));