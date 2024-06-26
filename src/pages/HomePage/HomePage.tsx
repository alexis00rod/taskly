import { handleDocumentTitle } from "@utils";
import { WidgetProjects } from "./components";

const HomePage: React.FC = () => {
  handleDocumentTitle("Inicio");
  return (
    <div className="container container-medium">
      <WidgetProjects />
    </div>
  );
};

export default HomePage;
