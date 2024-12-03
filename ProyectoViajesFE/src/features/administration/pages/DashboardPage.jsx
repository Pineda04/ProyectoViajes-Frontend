import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { LastActivity } from "../components/LastActivity";
import { Menu } from "../components/Menu";
import { useDashboardStore } from "../store";
import { Loading } from "../../../shared/components/Loading";

export const DashboardPage = () => {
  const loadData = useDashboardStore((state) => state.loadData);
  const dashboardData = useDashboardStore((state) => state.dashboardData);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if(isLoading){
      loadData();
      setIsLoading(false);
    }
  }, [isLoading]);
  
  if(isLoading) return <Loading />;
  console.log(dashboardData);

    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-4 w-full">
          <div className="row-span-2">
            {/* Menu */}
            <Menu />
          </div>
          <div className="h-auto">
            {/* Cards */}
            <Cards />
          </div>
          <div className="row-start-2 col-start-2 p-4">
            {/* Last activity */}
            <LastActivity />
          </div>
        </div>
      );
}
