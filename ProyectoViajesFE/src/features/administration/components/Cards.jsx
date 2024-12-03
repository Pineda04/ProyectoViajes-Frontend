import { FaComments } from "react-icons/fa"
import { GrNotes } from "react-icons/gr"
import { HiOutlineUsers } from "react-icons/hi"
import { IoMdPricetags } from "react-icons/io"

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <HiOutlineUsers className="w-8 h-8 text-blue-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">1,259</p>
          <p className="text-sm">Usuarios</p>
        </div>
      </div>

      <div className="bg-green-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <IoMdPricetags className="w-8 h-8 text-green-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">230</p>
          <p className="text-sm">Actividades</p>
        </div>
      </div>

      <div className="bg-orange-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <GrNotes className="w-8 h-8 text-orange-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">190</p>
          <p className="text-sm">Destinos</p>
        </div>
      </div>

      <div className="bg-red-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaComments className="w-8 h-8 text-red-800 dark:text-gray-800" />
        </div>
        <div className="text-right">
          <p className="text-2xl">320</p>
          <p className="text-sm">Paquetes de viaje</p>
        </div>
      </div>
    </div>
  )
}