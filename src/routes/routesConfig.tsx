import App from "@/App";
import ConfirmEmail from "@/pages/confirmEmail";
import CreateAccount from "@/pages/CreateAccount";
import Creator from "@/pages/Creator";
import LoginPage from "@/pages/login";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Cart = React.lazy(() => import("../pages/cart"));
const Confirm = React.lazy(()=> import("../pages/confirmEmail"))
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
  { 
    path: "/confirmar",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
          <Confirm />,
      </Suspense>
    )
  },
]);

export default router;
