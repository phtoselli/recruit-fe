import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./modules/admin/Home.tsx";
import List from "./modules/admin/List.tsx";
import ErrorPage from "./modules/ErrorPage.tsx";
import Register from "./modules/admin/Register.tsx";
import AdminLayout from "./components/AdminLayout.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true, // Rota padrão
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'list',
        element: <List />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
