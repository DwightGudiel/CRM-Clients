import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import ErrorPages from "./components/ErrorPages";
import { action as actionDeleteClient } from "./components/Client";

// Pages
import Index, { loader as loaderClients } from "./pages/Index";
import NewClient, { action as actionNewClient } from "./pages/NewClient";
import UpdateClient, {
  loader as loaderUpdateClient,
  action as actionUpdateClient,
} from "./pages/UpdateClient";

const router = createBrowserRouter([
  {
    // Define la ruta raíz de la aplicación
    path: "/",
    // Define el componente que se mostrará cuando se visite la ruta raíz
    element: <Layout />,
    // Define una lista de rutas secundarias que estarán "anidadas" dentro de la ruta principal
    children: [
      {
        // Define que esta ruta es la ruta de inicio para el componente que contiene las rutas secundarias
        index: true,
        // Define el componente que se mostrará cuando se visite la ruta de inicio
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPages />, // Esta línea define el componente React que se renderizará en caso de que haya un error al cargar la ruta definida anteriormente
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: actionNewClient,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clients/:id/update",
        element: <UpdateClient />,
        loader: loaderUpdateClient,
        action: actionUpdateClient,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clients/:id/delete",
        action: actionDeleteClient,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
