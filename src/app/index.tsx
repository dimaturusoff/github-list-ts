import { RouterProvider } from "react-router";
import { routes } from "../pages/index";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
