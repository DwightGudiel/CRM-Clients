import { useLoaderData } from "react-router-dom";

import Client from "../components/Client";

import { listClients } from "../data/crud-api";

export async function loader() {
  return await listClients();
}

function Index() {
  
  // Obtener clientes
  const ClientsArray = useLoaderData();

  return (
    <>
      <h1 className="text-center font-black text-4xl text-orange-500">
        CRM - Clientes
      </h1>
      <p className=" mt-2 text-center font-bold text-gray-700 text-2xl">
        Administra tus Clientes
      </p>

      <table className="mt-10 w-full bg-white table-auto shadow">
        <thead className="bg-orange-400 text-white text-center font-black">
          <tr>
            <th className="p-2">Informacion General</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Correo Electrónico</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Notas</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* El siguiente código se encarga de iterar a través de cada elemento del arreglo ClientsArray y renderiza un componente Client para cada uno de ellos. */}
          {ClientsArray.map((client) => (
            <Client key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Index;
