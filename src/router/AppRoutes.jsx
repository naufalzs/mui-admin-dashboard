import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/page/dashboard";
import Team from "../components/page/team";
import Contacts from "../components/page/contacts";
import Invoices from "../components/page/invoices";
import NewUser from "../components/page/new-user";
import CalendarPage from "../components/page/calendar";
import FAQ from "../components/page/faq";
import BarChartPage from "../components/page/chart/bar";
import PieChartPage from "../components/page/chart/pie";
import LineChartPage from "../components/page/chart/line";
import GeoChartPage from "../components/page/chart/geo";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/add-user" element={<NewUser />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/chart-bar" element={<BarChartPage />} />
      <Route path="/chart-pie" element={<PieChartPage />} />
      <Route path="/chart-line" element={<LineChartPage />} />
      <Route path="/chart-geo" element={<GeoChartPage />} />
    </Routes>
  );
};
