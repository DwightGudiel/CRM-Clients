// Función para obtener la lista de clientes
export async function listClients() {
  try {
    const resp = await fetch(import.meta.env.VITE_API_URL);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// Función para obtener un cliente por ID
export async function getClientById(id) {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Función para agregar un nuevo cliente
export async function addClient(data) {
  try {
    const resp = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await resp.json();
  } catch (error) {
    console.log(error);
  }
}

// Función para actualizar los datos de un cliente existente
export async function updateClientData(id, data) {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await resp.json();
  } catch (error) {
    console.log(error);
  }
}

// Función para eliminar un cliente
export async function deleteClient(id) {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });

    await resp.json();
  } catch (error) {
    console.log(error);
  }
}
