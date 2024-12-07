import { Link } from "react-router-dom";
import { FaNewspaper, FaMapMarkedAlt } from "react-icons/fa";
import { TiPointOfInterest } from "react-icons/ti";
import { MdCardTravel } from "react-icons/md";

export const LastActivity = ({
  activities = [],
  destinations = [],
  pointsInterest = [],
  travelPackages = [],
}) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div className="bg-white shadow-lg rounded-md border-b-4 border-blue-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaNewspaper className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">
              Últimas actividades
            </h3>
          </div>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
            Ver todas
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-600 border-b">
                <th className="py-2 text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition"
                >
                  <td className="py-2">
                    <Link
                      to="/home"
                      className="text-sm text-gray-700 hover:text-blue-600"
                    >
                      {activity.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md border-b-4 border-green-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <FaMapMarkedAlt className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">
              Últimos destinos
            </h3>
          </div>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
            Ver todos
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-600 border-b">
                <th className="py-2 text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination) => (
                <tr key={destination.id} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link
                    to="/home"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    {destination.name}
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md border-b-4 border-yellow-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
              <TiPointOfInterest className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">
              Últimos puntos de interés
            </h3>
          </div>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
            Ver todos
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-600 border-b">
                <th className="py-2 text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              {pointsInterest.map((pointInterest) => (
                <tr key={pointInterest.id} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link
                    to="/home"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    {pointInterest.name}
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md border-b-4 border-purple-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <MdCardTravel className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">
              Últimos paquetes de viaje
            </h3>
          </div>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
            Ver todos
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-600 border-b">
                <th className="py-2 text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              {travelPackages.map((travelPackage) => (
                <tr key={travelPackage.id} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link
                    to="/home"
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    {travelPackage.name}
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
