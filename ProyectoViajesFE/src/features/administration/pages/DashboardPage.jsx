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
    users,
    activities,
    destinations,
    travelPackages,
    pointsInterest,
    flights,
    hostings,
    reservations,
    assessments,
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
            reservationsCount,
            assessmentsCount,
          }}
        />
      </div>
      <div className="row-start-2 col-start-2 p-4">
        {/* Last activity */}
        <LastActivity
        users={users}
          activities={activities}
          destinations={destinations}
          travelPackages={travelPackages}
          pointsInterest={pointsInterest}
          flights={flights}
          hostings={hostings}
          reservations={reservations}
          assessments={assessments}
        />
      </div>
    </>
  );
};
