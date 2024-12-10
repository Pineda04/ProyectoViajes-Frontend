import { Navigate, Route, Routes } from "react-router-dom";
import { Header, Footer } from "../../content/components";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const SecurityRouter = () => {
  return (
      <div>
        <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to={"/security/login"} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to={"/security/register"} />} />
          </Routes>
        <Footer />
      </div>
  );
};
