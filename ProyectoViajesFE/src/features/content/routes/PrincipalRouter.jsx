import { Navigate, Route, Routes } from "react-router-dom";
import { DestinationPage, HomePage } from "../pages";
import { DestinationsPage } from "../pages/DestinationsPage";
export const PrincipalRouter = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/destinations' element={<DestinationsPage/>}/>
        <Route path='/destinations/destination/:id' element={<DestinationPage/>}/>
        <Route path='/*' element={<Navigate to={"/home"}/>}/>
      </Routes>
    </div>
  );
};