import { useAuth } from "@hooks";
import AppRoutes from "routes/Routes";

const App: React.FC = () => {
  useAuth();

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
};

export default App;
