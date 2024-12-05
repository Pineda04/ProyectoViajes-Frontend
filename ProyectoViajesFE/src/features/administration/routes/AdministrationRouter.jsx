import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../content/components";
import { DashboardPage } from "../pages/DashboardPage";
import { Menu } from "../components/Menu";
import { ActivitiesPage } from "../pages/ActivitiesPage";
import { TravelPackagesPage } from "../pages/TravelPackagesPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { UsersPage } from "../pages/UsersPage";

export const AdministrationRouter = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <Header />
      <div className="px-6 py-8">
        <div className="flex justify-between">
          <Menu />
          <div>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/travel-packages" element={<TravelPackagesPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/*" element={<Navigate to={"/dashboard"} />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
