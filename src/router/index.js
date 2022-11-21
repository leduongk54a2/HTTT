import React from "react";
import ROUTES from "./router";

const Routers = [
  {
    path: ROUTES.MANAGEMENT,
    component: React.lazy(() => import("../view/management")),
  },
  {
    path: ROUTES.MANAGEMENT_EVENT,
    component: React.lazy(() => import("../view/managementEvent")),
  },
];

export default Routers;
