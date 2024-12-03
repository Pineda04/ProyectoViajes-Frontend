import { Link } from "react-router-dom";
import { FaNewspaper, FaList, FaTag } from "react-icons/fa";

export const LastActivity = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div className="bg-white shadow-lg rounded-md border-b-4 border-blue-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaNewspaper className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">Últimas actividades</h3>
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
                <th className="py-2 text-right">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Actividad 1
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  1,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Actividad 2
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  5,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Actividad 3
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  4,807
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Actividad 4
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  3,678
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Actividad 5
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  2,645
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md border-b-4 border-green-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <FaList className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">Últimos destinos</h3>
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
                <th className="py-2 text-right">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Destino 1
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  1,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Destino 2
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  5,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Destino 3
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  4,807
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Destino 4
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  3,678
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Destino 5
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  2,645
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-md border-b-4 border-purple-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <FaTag className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">Últimos paquetes de viaje</h3>
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
                <th className="py-2 text-right">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Paquete de viaje 1
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  1,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Paquete de viaje 2
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  5,480
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Paquete de viaje 3
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  4,807
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Paquete de viaje 4
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  3,678
                </td>
              </tr>
              <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className ="py-2">
                  <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600">
                    Paquete de viaje 5
                  </Link>
                </td>
                <td className="py-2 text-right text-sm text-gray-600">
                  2,645
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};