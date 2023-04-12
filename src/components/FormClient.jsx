function FormClient({ client }) {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="first_name">
          Nombre
        </label>
        <span className="text-red-600">*</span>
        <input
          //"?.", también conocida como "operador de encadenamiento opcional", asegura que no se produzca un error si el objeto cliente es nulo o indefinido.
          defaultValue={client?.first_name}
          name="first_name"
          id="first_name"
          placeholder="Por favor, ingrese el nombre del cliente"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="last_name">
          Apellidos
        </label>
        <span className="text-red-600">*</span>
        <input
          defaultValue={client?.last_name}
          name="last_name"
          id="last_name"
          placeholder="Por favor, ingrese los apellidos del cliente"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="age">
          Edad
        </label>
        <span className="text-red-600">*</span>
        <input
          defaultValue={client?.age}
          name="age"
          id="age"
          placeholder="Por favor, ingrese la edad del cliente"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="number"
          min={1}
          max={120}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Nombre Empresa
        </label>
        <span className="text-red-600">*</span>
        <input
          defaultValue={client?.company}
          name="company"
          id="company"
          placeholder="Por favor, ingrese el nombre de la empresa del cliente"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          Correo Electrónico
        </label>
        <span className="text-red-600">*</span>
        <input
          defaultValue={client?.email}
          name="email"
          id="email"
          placeholder="Ejemplo: correo@correo.com"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="email"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="phone_number">
          Numero Teléfonico
        </label>
        <span className="text-red-600">*</span>
        <input
          defaultValue={client?.phone_number}
          name="phone_number"
          id="phone_number"
          placeholder="Ejemplo: +502 12345678"
          className="mt-2 block w-full bg-gray-50 p-2"
          type="tel"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notes">
          Notas
        </label>
        <span className="text-red-600">*</span>
        <textarea
          defaultValue={client?.notes}
          placeholder="Por favor, ingrese cualquier observación adicional que tenga sobre el cliente"
          className="mt-2 block w-full bg-gray-50 p-2"
          name="notes"
          id="notes"
          rows="5"
        ></textarea>
      </div>
    </>
  );
}

export default FormClient;
