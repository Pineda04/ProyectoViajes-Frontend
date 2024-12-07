import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <FaUserCircle className="h-24 w-24 text-white rounded-full mx-auto" />
          <p className="pt-2 text-lg font-semibold text-gray-50">Jane Doe</p>
          <p className="text-sm text-gray-100">janedoe@example.com</p>
          <div className="mt-5">
            <a
              href="#"
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Manage your Account
            </a>
          </div>
        </div>
        <div className="border-b">
        <a
            href="#"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Ver Perfil
              </p>
              <p className="text-xs text-gray-500">View your profile</p>
            </div>
          </a>
          <a
            href="#"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Cambiar contraseña
              </p>
              <p className="text-xs text-gray-500">Change your password</p>
            </div>
          </a>
          <Link
            to="/administration/activities"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-gray-800">
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Actividades
              </p>
              <p className="text-xs text-gray-500">Ver las actividades</p>
            </div>
          </Link>
          <Link
            to="/administration/destinations"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Destinos
              </p>
              <p className="text-xs text-gray-500">Ver los destinos</p>
            </div>
          </Link>
          <Link
            to="/administration/points-interest"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Puntos de interés
              </p>
              <p className="text-xs text-gray-500">Ver los puntos de interés</p>
            </div>
          </Link>
          <Link
            to="/administration/travel-packages"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-gray-800">
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Paquetes de viaje
              </p>
              <p className="text-xs text-gray-500">Ver los paquetes de viaje</p>
            </div>
          </Link>
          <Link
            to="/administration/types-flights"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-gray-800">
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Tipos de vuelo
              </p>
              <p className="text-xs text-gray-500">Ver los tipos de vuelo</p>
            </div>
          </Link>
        </div>
        <div>
          <button
            href="#"
            className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
          >
            <p className="text-sm font-medium text-gray-800 leading-none">
              Salir
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
