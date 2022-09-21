import { Routes, Route } from "react-router-dom";
import SummaryDashboard from "./components/SummaryDashboard";
import DetailView from "./components/DetailView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SummaryDashboard />} />
      <Route path="/details" element={<DetailView />} />
    </Routes>
  );
};
export default Router;
