import { lazy } from "react";
import { createBrowserRouter, Route } from "react-router-dom";

const HomePage = lazy(() => import("./home/Home"));
const NotFound = lazy(() => import("./not-found/NotFound"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
