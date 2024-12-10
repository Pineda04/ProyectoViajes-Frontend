import { useEffect, useState } from 'react';
import { FaBookmark, FaSignOutAlt, FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthStore } from '../../security/store';
import { jwtDecode } from 'jwt-decode';
import { MdCardTravel } from 'react-icons/md';
import { BsHousesFill } from 'react-icons/bs';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { CovidTransmissionVirusAirplaneFlight, FluentMdl2AccountActivity, MaterialSymbolsFlightsmode, MaterialSymbolsTravelExplore, OuiCalendar, PajamasComments, StreamlineTravelMapTriangleFlagNavigationMapMapsFlagGpsLocationDestinationGoal } from './Cards';

export const Menu = () => {
  const [isAdministrationOpen, setIsAdministrationOpen] = useState(false);
  const [email, setEmail] = useState('Usuario');
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const { logout } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ];
        const extractedUserImage = decodedToken["UserImage"] || null;
        const extractedUserFirstName = decodedToken["UserFirstName"] || null;
        const extractedUserLastName = decodedToken["UserLastName"] || null;

        setUserFirstName(extractedUserFirstName);
        setUserLastName(extractedUserLastName);
        setEmail(userEmail || 'Usuario');
        setUserImage(extractedUserImage);
      } catch (err) {
        console.error("Error decoding token", err);
      }
    }
  }, []);

  const toggleAdministration = () => {
    setIsAdministrationOpen(!isAdministrationOpen);
  };

  return (
    <div className="w-72 bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Perfil Header */}
      <div className="bg-gray-800 text-white p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
          {userImage && (
            <img 
            src= {userImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          )}
        </div>
        <div className="text-center">
        {userFirstName && (
            <h4 className="text-sm opacity-80">{userFirstName.split(' ')[0] + " " + userLastName.split(' ')[0]}</h4>
          )}
          <h6 className="font-bold">{email}</h6>
          
        </div>
      </div>

      {/* Perfil */}
      <nav className="py-4">
        <MenuSection title="Perfil">
          <MenuItem 
            icon={<FaUser className="text-blue-500" />} 
            title="Ver Perfil" 
            subtitle="Detalles de tu cuenta"
            to="/profile"
          />
        </MenuSection>

        {/* Sección de Administración desplegable */}
        <div className="mb-4">
          <button 
            onClick={toggleAdministration}
            className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100 transition-all"
          >
            <div className="flex items-center">
              <FaBookmark className="mr-3 text-purple-500" />
              <span className="text-sm font-medium text-gray-800">Administración</span>
            </div>
            {isAdministrationOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isAdministrationOpen && (
            <div className="pl-4 pt-2">
              <MenuItem 
                icon={<FluentMdl2AccountActivity className="text-green-600 h-5 w-5" />} 
                title="Actividades" 
                subtitle="Ver actividades"
                to="/administration/activities"
              />
              <MenuItem 
                icon={<StreamlineTravelMapTriangleFlagNavigationMapMapsFlagGpsLocationDestinationGoal className="text-orange-600 h-5 w-5" />} 
                title="Puntos de interés" 
                subtitle="Ver puntos de interés"
                to="/administration/points-interest"
              />
              <MenuItem 
                icon={<MaterialSymbolsTravelExplore className="text-purple-600 h-5 w-5" />} 
                title="Destinos" 
                subtitle="Ver destinos"
                to="/administration/destinations"
              />
              <MenuItem 
                icon={<MdCardTravel className="text-pink-600 h-5 w-5" />} 
                title="Paquetes de viaje" 
                subtitle="Ver paquetes de viaje"
                to="/administration/travel-packages"
              />
              <MenuItem 
                icon={<CovidTransmissionVirusAirplaneFlight className="text-red-600 h-5 w-5" />} 
                title="Tipos de vuelo" 
                subtitle="Ver tipos de vuelo"
                to="/administration/types-flights"
              />
              <MenuItem 
                icon={<MaterialSymbolsFlightsmode className="text-indigo-600 h-5 w-5" />} 
                title="Vuelos" 
                subtitle="Ver vuelos"
                to="/administration/flights"
              />
              <MenuItem 
                icon={<BiSolidBuildingHouse className="text-teal-600 h-5 w-5" />} 
                title="Tipos de hospedaje" 
                subtitle="Ver tipos de hospedaje"
                to="/administration/types-hostings"
              />
              <MenuItem 
                icon={<BsHousesFill className="text-cyan-600 h-5 w-5" />} 
                title="Hospedajes" 
                subtitle="Ver alojamientos"
                to="/administration/hostings"
              />
              <MenuItem 
                icon={<OuiCalendar className="text-lime-600 h-5 w-5" />} 
                title="Reservaciones" 
                subtitle="Ver reservas"
                to="/administration/reservations"
              />
              <MenuItem 
                icon={<PajamasComments className="text-amber-600 h-5 w-5" />} 
                title="Reseñas" 
                subtitle="Ver reseñas"
                to="/administration/assessments"
              />
            </div>
          )}
        </div>

        {/* Cerrar sesión */}
        <div className="border-t mt-4 p-4">
          <button 
            onClick={logout}
            className="w-full flex items-center text-red-600 hover:bg-red-50 p-3 rounded-md transition-all"
          >
            <FaSignOutAlt className="mr-3" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

const MenuSection = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="px-4 text-xs text-gray-500 uppercase mb-2">{title}</h3>
    {children}
  </div>
);

const MenuItem = ({ icon, title, subtitle, to }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-3 hover:bg-gray-100 transition-all"
  >
    <div className="mr-4">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </Link>
);