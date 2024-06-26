import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute, DashboardRoute, FirstProjectRoute } from "@routes";
import { useAuth } from "@hooks";

const App: React.FC = () => {
  useAuth();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<DashboardRoute />} />
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/first-project/*" element={<FirstProjectRoute />} />
      </Routes>
    </div>
  );
};

export default App;
