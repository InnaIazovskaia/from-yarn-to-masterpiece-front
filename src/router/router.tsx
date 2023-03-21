import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import AccountRedirects from "../components/AccountRedirects/AccountRedirects";

import LoginPage from "../pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/home",
        element: <></>,
      },
      {
        path: "/patterns",
        element: <></>,
      },
      {
        path: "/about",
      },
      {
        path: "/contact",
      },
      {
        path: "/account",
        element: <AccountRedirects />,
      },
      {
        path: "/account/login",
        element: <LoginPage />,
      },
      {
        path: "/account/register",
        element: <></>,
      },
      {
        path: "/cart",
        element: <></>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
