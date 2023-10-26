import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/page/dashboard";
import Team from "../components/page/team";
import Contacts from "../components/page/contacts";
import Invoices from "../components/page/invoices";
import NewUser from "../components/page/new-user";
import CalendarPage from "../components/page/calendar";
import FAQ from "../components/page/faq";
import BarChart from "../components/page/chart/BarChart";
import PieChart from "../components/page/chart/PieChart";
import LineChart from "../components/page/chart/LineChart";
import GeoChart from "../components/page/chart/GeoChart";

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
      <Route path="/chart-bar" element={<BarChart />} />
      <Route path="/chart-pie" element={<PieChart />} />
      <Route path="/chart-line" element={<LineChart />} />
      <Route path="/chart-geo" element={<GeoChart />} />
    </Routes>
  );
};
