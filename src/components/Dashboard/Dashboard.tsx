import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "@components";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-wrapper">
        <Sidebar />
        <main className="dashboard-page">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
