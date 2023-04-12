import { Link, useLocation, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-orange-600 p-4">
          <h2 className="text-center text-2xl font-black text-white">
            CRM - Clientes
          </h2>

          <nav className=" flex flex-col mt-10 text-white text-center">
            <div className="my-4">
              <Link
                className={`${
                  // Clases dinámicas en función de la ruta actual
                  location.pathname === "/" ? "border-b-4" : "text-white"
                } p-2 font-black`}
                to={"/"} // Ruta a la que apunta el enlace
              >
                Listado de Clientes
              </Link>
            </div>
            <div className="my-4">
              <Link
                className={`${
                  // Clases dinámicas en función de la ruta actual
                  location.pathname === "/clients/new"
                    ? "border-b-4"
                    : "text-white"
                } p-2 font-black`}
                to={"/clients/new"} // Ruta a la que apunta el enlace
              >
                Añadir Nuevo Cliente
              </Link>
            </div>
          </nav>
        </aside>

        <div className="md:w-3/4 md:h-screen overflow-y-scroll">
          {/* Esta línea utiliza un componente de enrutamiento en React llamado <Outlet>.Este componente se utiliza para mostrar el contenido de la ruta actual dentro del elemento <main> que se creó en la línea anterior. */}

          <main className="p-4 overflow-x-scroll mb-20">
            <Outlet />
          </main>
        </div>
        {/*Mostrar alerta */}
        <ToastContainer />
      </div>

      <footer className="border-t py-4 absolute bottom-0 w-full bg-orange-600">
        <p className="text-center text-white text-xl ">
          Creado por{" "}
          <a className="font-black" href="https://github.com/DwightGudiel?tab=repositories">
            Dwight Gudiel.
          </a>
        </p>
      </footer>
    </>
  );
}

export default Layout;
