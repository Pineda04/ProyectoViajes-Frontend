import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { LastActivity } from "../components/LastActivity";
import { useDashboardStore } from "../store";
import { Loading } from "../../../shared/components/Loading";

export const DashboardPage = () => {
  const loadData = useDashboardStore((state) => state.loadData);
  const dashboardData = useDashboardStore((state) => state.dashboardData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      loadData();
      setIsLoading(false);
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;

  const {
    usersCount,
    activitiesCount,
    assessmentsCount,
    destinationsCount,
    flightsCount,
    hostingsCount,
    pointsInterestCount,
    reservationsCount,
    travelPackagesCount,
    typesFlightsCount,
    typesHostingsCount,
    activities,
    destinations,
    travelPackages,
    pointsInterest,
  } = dashboardData;

  return (
    <>
      <div className="h-auto">
        {/* Cards */}
        <Cards
          {...{
            usersCount,
            activitiesCount,
            destinationsCount,
            pointsInterestCount,
            travelPackagesCount,
            typesFlightsCount,
            flightsCount,
            typesHostingsCount,
            hostingsCount,
          }}
        />
      </div>
      <div className="row-start-2 col-start-2 p-4">
        {/* Last activity */}
        <LastActivity
          activities={activities}
          destinations={destinations}
          travelPackages={travelPackages}
          pointsInterest={pointsInterest}
        />
      </div>
    </>
  );
};
