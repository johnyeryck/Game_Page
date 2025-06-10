import App from "@/App";
import CreateAccount from "@/pages/CreateAccount";
import Creator from "@/pages/Creator";
import LoginPage from "@/pages/login";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Cart = React.lazy(() => import("../pages/cart"));

const router = createBrowserRouter([
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creator",
    element: <Creator />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
