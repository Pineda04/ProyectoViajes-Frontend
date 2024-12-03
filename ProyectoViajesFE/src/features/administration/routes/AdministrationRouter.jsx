import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Header } from "../../content/components"
import { DashboardPage } from "../pages/DashboardPage"

export const AdministrationRouter = () => {
    return (
        <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover">
          <Header />
          <div className="px-6 py-8">
            <div className="container flex justify-between mx-auto">
              <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/*' element={<Navigate to={"/dashboard"} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      )
}
