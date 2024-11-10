import { Footer, Header, MainBanner, PopularTravelPackages, PrincipalReservationArea } from "../components";

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <MainBanner/>
      <PopularTravelPackages/>
      <PrincipalReservationArea/>
      <Footer/>
    </div>
  );
};
