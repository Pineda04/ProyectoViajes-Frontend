import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center px-6">
        <h1 className="text-4xl font-extrabold text-yellow-500 flex-grow">
          TravelExperience
        </h1>
        <nav className="hidden md:flex md:space-x-6 text-lg flex-grow">
          <Link to="/home" className="hover:text-yellow-400 transition">
            Inicio
          </Link>
          <Link to="/destinations" className="hover:text-yellow-400 transition">
            Destinos
          </Link>
          <Link to="/travel-packages" className="hover:text-yellow-400 transition">
            Paquetes de viaje
          </Link>
          <a href="#" className="hover:text-yellow-400 transition">
            Contacto
          </a>
        </nav>
        <div className="hidden md:flex space-x-4 flex-shrink-0">
          <a
            href="#"
            className="bg-gray-800 text-yellow-500 font-semibold py-2 px-4 rounded-lg border border-yellow-500 hover:bg-gray-700 transition"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    </header>
  );
};
