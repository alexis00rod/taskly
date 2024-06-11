import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "@routes";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/auth/*" element={<AuthRoute />} />
      </Routes>
    </div>
  );
};

export default App;
