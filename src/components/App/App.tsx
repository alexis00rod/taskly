import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "@routes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
    </Routes>
  );
};

export default App;
