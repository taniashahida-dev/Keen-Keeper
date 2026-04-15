import React from "react";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router";
import TimeLine from "../components/TimelinePage/TimeLine";

import Home from "../components/Homepage/Home";
import StatsPage from "../components/StatsPage/StatsPage";
import FriendDetails from "../components/Homepage/AllFriends/FriendDetails/FriendDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
        path: "/Friend/:id",
        element: <FriendDetails></FriendDetails>
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
    errorElement: <ErrorPage/>,
  },

]);
