import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import List from "./modules/admin/List.tsx";
import ErrorPage from "./modules/ErrorPage.tsx";
import AdminHome from "./modules/admin/Home.tsx";
import ClientHome from "./modules/client/Home.tsx";
import AdminRegister from "./modules/admin/Register.tsx";
import AdminLayout from "./components/AdminLayout.tsx";
import ClientLayout from "./components/ClientLayout.tsx";
import Job from "./modules/client/Job.tsx";
import Login from "./modules/client/Login.tsx";
import Register from "./modules/client/Register.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true, // Rota padrão
        element: <AdminHome />,
      },
      {
        path: 'register',
        element: <AdminRegister />,
      },
      {
        path: 'list',
        element: <List />,
      },
    ],
  },
  {
    path: '/client',
    element: <ClientLayout />,
    children: [
      {
        index: true, // Rota padrão
        element: <ClientHome />,
      },
      {
        path: 'job/:id',
        element: <Job />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
