import { useRouteError } from "react-router-dom";

function ErrorPages() {
  
  // Obtenemos información del error de la ruta
  const error = useRouteError();

  return (
    <div>
      <h1 className="text-center font-black text-4xl text-orange-500">
        CRM - Clientes
      </h1>
      <p className=" my-6 text-center font-bold text-gray-700 text-2xl">
        Ups ocurrio un error
      </p>

      {/* Mensaje específico del error */}
      <p className="text-justify">{error.message}</p>
    </div>
  );
}

export default ErrorPages;
