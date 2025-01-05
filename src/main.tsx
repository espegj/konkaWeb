import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Privacy } from "./Privacy.tsx";
import logo from "./assets/logo.png";
import { OAuthCallback } from "./Redirect.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Oops!</p>,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "oauthGarmin",
    element: <OAuthCallback />,
  },
  {
    path: "logo",
    element: <img className="h-64" src={logo} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
