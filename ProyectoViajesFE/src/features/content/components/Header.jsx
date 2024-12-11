import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../security/store";
import { ProtectedComponent } from "../../../shared/components/ProtectedComponent";
import { rolesListConstant } from "../../../shared/constants/roles-list.constant";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export const Header = () => {
  // Estado para controlar la apertura/cierre del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Funciones y estado de autenticación desde el store de autenticación
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Función para cerrar sesión
  const handleLogout = () => {
    logout();
  };

  // Función para alternar el menú móvil
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 shadow-lg">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between px-6">
        {/* Contenedor del logo y botón de menú móvil */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-yellow-500">
              TravelExperience
            </h1>
          </div>
          <div>
            {/* Botón de menú para dispositivos móviles */}
            <button
              type="button"
              onClick={handleMenuToggle}
              className="block text-white hover:text-yellow-400 md:hidden"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menú de navegación */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-6 md:items-center`}
        >
          {/* Enlaces de navegación */}
          <Link
            to="/home"
            className="my-1 text-white hover:text-yellow-400 md:my-0"
          >
            Inicio
          </Link>
          <Link
            to="/destinations"
            className="my-1 text-white hover:text-yellow-400 md:my-0"
          >
            Destinos
          </Link>
          <Link
            to="/travel-packages"
            className="my-1 text-white hover:text-yellow-400 md:my-0"
          >
            Paquetes de viaje
          </Link>
          <Link
            to="/contact"
            className="my-1 text-white hover:text-yellow-400 md:my-0"
          >
            Contacto
          </Link>

          {/* Perfil de Usuario - Solo visible si está autenticado */}
          {isAuthenticated && (
            <Link
              to="/profile"
              className="my-1 text-white hover:text-yellow-400 md:my-0 flex items-center"
            >
              <FaUserCircle className="mr-2" /> Mi Perfil
            </Link>
          )}

          {/* Enlace de Administración - Solo para administradores autenticados */}
          {isAuthenticated && (
            <ProtectedComponent requiredRoles={[rolesListConstant.ADMIN]}>
              <Link
                to="/administration/dashboard"
                className="my-1 text-white hover:text-yellow-400 md:mx-4 md:my-0"
              >
                Administración
              </Link>
            </ProtectedComponent>
          )}

          {/* Botón de Autenticación - Cambia entre Iniciar Sesión y Cerrar Sesión */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="
                flex items-center 
                bg-transparent 
                text-red-400 
                border border-red-400 
                hover:bg-red-400 
                hover:text-white 
                font-semibold 
                py-2 
                px-4 
                rounded-lg 
                transition-all 
                duration-300 
                group
              "
            >
              <FaSignOutAlt className="mr-2 group-hover:rotate-180 transition" />
              Cerrar Sesión
            </button>
          ) : (
            <Link
              to="/security/login"
              className="
                flex items-center 
                bg-transparent 
                text-yellow-500 
                border border-yellow-500 
                hover:bg-yellow-500 
                hover:text-gray-900 
                font-semibold 
                py-2 
                px-4 
                rounded-lg 
                transition-all 
                duration-300 
                group
              "
            >
              <FaSignInAlt className="mr-2" />
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};