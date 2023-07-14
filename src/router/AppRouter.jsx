import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LinkPage from "../pages/LinkPage";
import Layout from "../layouts/mainlayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/link" element={<LinkPage />} />
    </Routes>
  );
};
export default AppRouter;
