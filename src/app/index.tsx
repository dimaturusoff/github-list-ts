import { RouterProvider } from "react-router";
import { routes } from "../pages/index";
import { Provider } from 'react-redux'
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
