import { Route, Routes } from "react-router-dom";
import { PrincipalRouter } from "../features/content/routes";
import { SecurityRouter } from "../features/security/routes/SecurityRouter";
import { AdministrationRouter } from "../features/administration/routes/AdministrationRouter";
import { ProtectedLayout } from "../shared/components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/security/*" element={<SecurityRouter />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/administration/*" element={<AdministrationRouter />} />
      </Route>
      <Route path="/*" element={<PrincipalRouter />} />
    </Routes>
  );
};
