import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../content/components";
import { DashboardPage } from "../pages/DashboardPage";
import { Menu } from "../components/Menu";
import { TravelPackagesPage } from "../pages/TravelPackagesPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { UsersPage } from "../pages/UsersPage";
import { ActivitiesPage } from "../pages/Activities/ActivitiesPage";
import { EditActivityPage, NewActivityPage } from "../pages/Activities";

export const AdministrationRouter = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <Header />
      <div className="px-6 py-8">
        <div className="flex gap-4">
          <Menu />
          <div className="w-full">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/activities/new" element={<NewActivityPage />} />
              <Route path="/activities/edit/:id" element={<EditActivityPage />} />
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
