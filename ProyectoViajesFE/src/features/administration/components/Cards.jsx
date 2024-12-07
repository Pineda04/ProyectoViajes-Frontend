import { FaMapMarkedAlt } from "react-icons/fa"
import { HiOutlineUsers } from "react-icons/hi"
import { IoMdPricetags } from "react-icons/io"
import { MdCardTravel } from "react-icons/md"
import { PiAirplaneInFlightFill } from "react-icons/pi"
import { TiPointOfInterest } from "react-icons/ti"

export const Cards = ({
  usersCount = 0,
  activitiesCount = 0,
  assessmentsCount = 0,
  destinationsCount = 0,
  flightsCount = 0,
  hostingsCount = 0,
  pointsInterestCount = 0,
  reservationsCount = 0,
  travelPackagesCount = 0,
  typesFlightsCount = 0,
  typesHostingsCount = 0
}) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <HiOutlineUsers className="w-8 h-8 text-blue-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{usersCount}</p>
          <p className="text-sm">Usuarios</p>
        </div>
      </div>

      <div className="bg-green-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <IoMdPricetags className="w-8 h-8 text-green-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{activitiesCount}</p>
          <p className="text-sm">Actividades</p>
        </div>
      </div>

      <div className="bg-orange-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <TiPointOfInterest className="w-8 h-8 text-orange-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{pointsInterestCount}</p>
          <p className="text-sm">Puntos de interés</p>
        </div>
      </div>

      <div className="bg-orange-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <FaMapMarkedAlt className="w-8 h-8 text-orange-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{destinationsCount}</p>
          <p className="text-sm">Destinos</p>
        </div>
      </div>

      <div className="bg-red-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <MdCardTravel className="w-8 h-8 text-red-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{travelPackagesCount}</p>
          <p className="text-sm">Paquetes de viaje</p>
        </div>
      </div>

      <div className="bg-red-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <PiAirplaneInFlightFill className="w-8 h-8 text-red-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">{typesFlightsCount}</p>
          <p className="text-sm">Tipos de vuelo</p>
        </div>
      </div>
    </div>
  )
}