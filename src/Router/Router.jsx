import React from "react";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router";
import TimeLine from "../components/TimelinePage/TimeLine";

import Home from "../components/Homepage/Home";
import StatsPage from "../components/StatsPage/StatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/TimeLine",
        element: <TimeLine />,
      },
      {
        path: "/Stats",
        element: <StatsPage />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);
