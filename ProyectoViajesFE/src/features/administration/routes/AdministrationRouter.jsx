import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../content/components";
import { DashboardPage } from "../pages/DashboardPage";
import { Menu } from "../components/Menu";
import { DestinationsPage } from "../pages/Destinations/DestinationsPage";
import { ActivitiesPage } from "../pages/Activities/ActivitiesPage";
import { EditActivityPage, NewActivityPage } from "../pages/Activities";
import { NewDestinationPage } from "../pages/Destinations/NewDestinationPage";
import { EditDestinationPage } from "../pages/Destinations/EditDestinationPage";
import { PointsInterestPage } from "../pages/PointsInterest/PointsInterestPage";
import { NewPointInterestPage } from "../pages/PointsInterest/NewPointInterestPage";
import { EditPointInterestPage } from "../pages/PointsInterest/EditPointInterestPage";
import { TravelPackagesPage } from "../pages/TravelPackages/TravelPackagesPage";
import { NewTravelPackagePage } from "../pages/TravelPackages/NewTravelPackagePage";
import { EditTravelPackagePage } from "../pages/TravelPackages/EditTravelPackagePage";
import { TypesFlightsPage } from "../pages/TypesFlights/TypesFlightsPage";
import { EditTypeFlightPage } from "../pages/TypesFlights/EditTypeFlightPage";
import { NewTypeFlightPage } from "../pages/TypesFlights/NewTypeFlightPage";
import { TypesHostingsPage } from "../pages/TypesHostings/TypesHostingsPage";
import { NewTypeHostingPage } from "../pages/TypesHostings/NewTypeHostingPage";
import { EditTypeHostingPage } from "../pages/TypesHostings/EditTypeHostingPage";
import { HostingsPage } from "../pages/Hostings/HostingsPage";
import { NewHostingPage } from "../pages/Hostings/NewHostingPage";
import { EditHostingPage } from "../pages/Hostings/EditHostingPage";
import { FlightsPage } from "../pages/Flights/FlightsPage";
import { NewFlightPage } from "../pages/Flights/NewFlightPage";
import { EditFlightPage } from "../pages/Flights/EditFlightPage";
import { AssessmentsPage } from "../pages/Assessments/AssessmentsPage";
import { ReservationsPage } from "../pages/Reservations/ReservationsPage";
import { UsersPage } from "../pages/Users/UsersPage";

export const AdministrationRouter = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover flex flex-col">
      <Header />
      <div className="px-6 py-8 flex-grow flex">
        <div className="w-72 flex-shrink-0">
          <Menu />
        </div>
        <div className="w-full overflow-y-auto ml-4">
          <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/activities/new" element={<NewActivityPage />} />
              <Route path="/activities/edit/:id" element={<EditActivityPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destinations/new" element={<NewDestinationPage />} />
              <Route path="/destinations/edit/:id" element={<EditDestinationPage />} />
              <Route path="/points-interest" element={<PointsInterestPage />} />
              <Route path="/points-interest/new" element={<NewPointInterestPage />} />
              <Route path="/points-interest/edit/:id" element={<EditPointInterestPage />} />
              <Route path="/travel-packages" element={<TravelPackagesPage />} />
              <Route path="/travel-packages/new" element={<NewTravelPackagePage />} />
              <Route path="/travel-packages/edit/:id" element={<EditTravelPackagePage />} />
              <Route path="/types-flights" element={<TypesFlightsPage />} />
              <Route path="/types-flights/new" element={<NewTypeFlightPage />} />
              <Route path="/types-flights/edit/:id" element={<EditTypeFlightPage />} />
              <Route path="/flights" element={<FlightsPage />} />
              <Route path="/flights/new" element={<NewFlightPage />} />
              <Route path="/flights/edit/:id" element={<EditFlightPage />} />
              <Route path="/types-hostings" element={<TypesHostingsPage />} />
              <Route path="/types-hostings/new" element={<NewTypeHostingPage />} />
              <Route path="/types-hostings/edit/:id" element={<EditTypeHostingPage />} />
              <Route path="/hostings" element={<HostingsPage />} />
              <Route path="/hostings/new" element={<NewHostingPage />} />
              <Route path="/hostings/edit/:id" element={<EditHostingPage />} />
              <Route path="/assessments" element={<AssessmentsPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/*" element={<Navigate to={"/dashboard"} />} />
              </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};
