import { create } from "zustand";
import { dashboardAsync } from "../../../shared/actions/dashboard";

export const useDashboardStore = create((set) => ({
  dashboardData: {
    usersCount: 0,
    activitiesCount: 0,
    assessmentsCount: 0,
    destinationsCount: 0,
    flightsCount: 0,
    hostingsCount: 0,
    pointsInterestCount: 0,
    reservationsCount: 0,
    travelPackagesCount: 0,
    typesFlightsCount: 0,
    typesHostingsCount: 0,
    activities: [],
    destinations: [],
    pointsInterest: [],
    travelPackages: [],
    typesFlights: [],
    typesHostings: [],
    hostings: [],
  },
  loadData: async () => {
    const result = await dashboardAsync();
    if (result.status) {
      set({ dashboardData: result.data });
      return;
    }
    set({ dashboardData: null });
    return;
  },
}));
