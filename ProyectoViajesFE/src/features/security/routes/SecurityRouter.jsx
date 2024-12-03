import { Navigate, Route, Routes } from "react-router-dom";
import { Header, Footer } from "../../content/components";
import { LoginPage } from "../pages/LoginPage";

export const SecurityRouter = () => {
  return (
      <div>
        <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to={"/security/login"} />} />
          </Routes>
        <Footer />
      </div>
  );
};
