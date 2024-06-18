import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "@components";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="w-full flex grow">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
