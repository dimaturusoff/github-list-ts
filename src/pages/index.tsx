import { lazy } from "react";
import { createBrowserRouter, Route } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const ProjectPage = lazy(() => import("./project"));
const NotFound = lazy(() => import("./not-found"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:projectId",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
