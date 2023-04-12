import { useNavigate, Form, redirect } from "react-router-dom";

import FormClient from "../components/FormClient";

import { addClient } from "../data/crud-api";

// Alerta
import { toast } from "react-toastify";

// Iconos
import { UserPlusIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export async function action({ request }) {
  // Se obtienen los datos del formulario a través de FormData
  const formData = await request.formData();

  // Se crea un objeto a partir de los datos obtenidos del formulario
  const data = Object.fromEntries(formData);

  // Se obtiene el valor del campo "email"
  const email = formData.get("email");

  // Se define una expresión regular para validar el formato del correo electrónico
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  // Si alguno de los campos del formulario está vacío, se muestra un mensaje de error y se retorna nulo
  if (Object.values(data).includes("")) {
    toast.error("Todos los campos son obligatorios");
    return null;
  }

  // Si el correo electrónico no cumple con el formato de la expresión regular, se muestra un mensaje de error y se retorna nulo
  if (!regex.test(email)) {
    toast.error("Email incorrecto!");
    return null;
  }

  // Se agrega el cliente
  await addClient(data);

  // Se redirecciona al usuario a la página principal
  return redirect("/");
}

function NewClient() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end my-8">
        <button
          className=" flex bg-orange-600 text-white px-4 py-1 uppercase font-bold rounded"
          onClick={() => navigate("/")}
        >
          Regresar
          <ArrowUturnLeftIcon className="ms-2 h-6 w-6 text-white" />
        </button>
      </div>

      <h2 className="font-black text-2xl text-orange-500">
        Formulario de Registro de Nuevo Cliente
      </h2>

      <p className="mt-2 font-bold text-gray-700">
        <span className="text-red-600">*</span> Completa todos los campos
        requerido <span className="text-red-600">*</span>
      </p>

      <div className="mt-10 md:w-3/4 shadow rounded bg-white mx-auto p-6">
        <Form method="post" noValidate>
          <FormClient />
          <button
            className="flex mt-5 bg-orange-400 text-white px-2 py-1 uppercase font-bold rounded"
            type="submit"
          >
            Añadir Cliente
            <UserPlusIcon className="ms-1 h-6 w-6 text-white" />
          </button>
        </Form>
      </div>
    </>
  );
}

export default NewClient;
