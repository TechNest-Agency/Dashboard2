import Login from "./pages/Login";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import DashboardLayout from "./Layout/DashboardLayout";
import { Route, Routes } from "react-router";
import DashboardMainContent from "./Layout/DashboardMainContent";

function App() {
  return (
    <Routes>
      {/* Main Layout with children....................... */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Dashboard with children.............. */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<DashboardMainContent />} />
      </Route>
    </Routes>
  );
}

export default App;
