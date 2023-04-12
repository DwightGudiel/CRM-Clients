import { useNavigate, redirect, Form } from "react-router-dom";
import { deleteClient } from "../data/crud-api";
// Iconos
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

/**
 * Función para eliminar un cliente al recibir una petición DELETE
 * @param {Object} params - Objeto que contiene el parámetro de la petición
 */
export async function action({ params }) {
  // Llamamos a la función deleteClient, que elimina el cliente con el ID recibido
  await deleteClient(params.id);
  // Redireccionamos al usuario a la página de inicio
  return redirect("/");
}

function Client({ client }) {
  const {
    id,
    first_name,
    last_name,
    age,
    email,
    phone_number,
    notes,
    company,
  } = client;

  const navigate = useNavigate();

  return (
    <>
      <tr className="text-gray-700 border text-center">
        <td className="p-3">
          <p className="text-center">{`${first_name} ${last_name}`}</p>
          <p className="mt-2 text-center">{age} Años</p>
        </td>
        <td className="p-3">{company}</td>
        <td className="p-3">{email}</td>
        <td className="p-3">{phone_number}</td>
        <td className="p-3">{notes}</td>
        <td className="p-3">
          <div className="flex gap-4">
            <Form
              method="post"
              action={`/clients/${id}/delete`}
              onSubmit={(e) => {
                if (!confirm("¿Está seguro que desea eliminar este cliente?")) {
                  e.preventDefault();
                }
              }}
            >
              <button className="bg-red-600 p-1 w-full rounded">
                <TrashIcon className="h-6 w-6 text-white" />
              </button>
            </Form>

            <button
              onClick={() => navigate(`/clients/${id}/update`)}
              className="bg-blue-600 p-1 rounded"
            >
              <PencilSquareIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Client;
