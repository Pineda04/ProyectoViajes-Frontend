import { useState } from "react";
import { useActivitiesStore } from "../../store/useActivitiesStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loading } from "../../../../shared/components/Loading";
import { LinkCustom } from "../../components/LinkCustom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function QlementineIconsNew16(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 6.4c0-2.24 0-3.36.436-4.22A4.03 4.03 0 0 1 2.186.43c.856-.436 1.98-.436 4.22-.436h2.2c2.24 0 3.36 0 4.22.436c.753.383 1.36.995 1.75 1.75c.436.856.436 1.98.436 4.22v2.2c0 2.24 0 3.36-.436 4.22a4.03 4.03 0 0 1-1.75 1.75c-.856.436-1.98.436-4.22.436h-2.2c-2.24 0-3.36 0-4.22-.436a4.03 4.03 0 0 1-1.75-1.75C0 11.964 0 10.84 0 8.6zM6.4 1h2.2c1.14 0 1.93 0 2.55.051c.605.05.953.142 1.22.276a3.02 3.02 0 0 1 1.31 1.31c.134.263.226.611.276 1.22c.05.617.051 1.41.051 2.55v2.2c0 1.14 0 1.93-.051 2.55c-.05.605-.142.953-.276 1.22a3 3 0 0 1-1.31 1.31c-.263.134-.611.226-1.22.276c-.617.05-1.41.051-2.55.051H6.4c-1.14 0-1.93 0-2.55-.05c-.605-.05-.953-.143-1.22-.277a3 3 0 0 1-1.31-1.31c-.134-.263-.226-.61-.276-1.22c-.05-.617-.051-1.41-.051-2.55v-2.2c0-1.14 0-1.93.051-2.55c.05-.605.142-.953.276-1.22a3.02 3.02 0 0 1 1.31-1.31c.263-.134.611-.226 1.22-.276C4.467 1.001 5.26 1 6.4 1"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function IcOutlineEdit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
      ></path>
    </svg>
  );
}

export function MingcuteDeleteLine(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07L5 7H4a1 1 0 0 1 0-2zm-3.003 2H7.003l.928 13h8.138zM14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
        ></path>
      </g>
    </svg>
  );
}

export function IconParkOutlineSearch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></path>
        <path
          strokeLinecap="round"
          d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
        ></path>
      </g>
    </svg>
  );
}

export const ActivitiesPage = () => {
  const activitiesData = useActivitiesStore((state) => state.activitiesData);
  const loadData = useActivitiesStore((state) => state.loadData);
  const nextPage = useActivitiesStore((state) => state.nextPage);
  const previousPage = useActivitiesStore((state) => state.previousPage);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      loadData();
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <Loading />;

  const handleSearch = (e) => {
    e.preventDefault();
    loadData(searchTerm);
  };

  const openDeleteModal = (activity) => {
    setActivityToDelete(activity);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setActivityToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (activityToDelete) {
      try {
        await useActivitiesStore.getState().deleteActivity(activityToDelete.id);
      } catch (error) {
        console.error("Error al eliminar la actividad:", error);
      }
      
      closeDeleteModal();
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between mb-4">
        <div>
          <form onSubmit={handleSearch} className="flex gap-2 items-center">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar actividades..."
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center gap-2"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={iconVariants}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </motion.svg>
              Buscar
            </motion.button>
          </form>
        </div>

        <div className="flex items-center gap-x-3">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <LinkCustom
              label="Nuevo"
              to="/administration/activities/new"
              icon={
                <motion.div variants={iconVariants}>
                  <QlementineIconsNew16 className="h-5 w-5" />
                </motion.div>
              }
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300 flex items-center gap-2"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/4">
                Nombre de la Actividad
              </th>
              <th scope="col" className="px-6 py-3 w-2/5">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3 w-1/5"></th>
            </tr>
          </thead>
          <tbody>
            {activitiesData.items.map((activity) => (
              <tr
                key={activity.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white truncate"
                  title={activity.name}
                >
                  {activity.name}
                </th>
                <td className="px-6 py-4 truncate" title={activity.description}>
                  {activity.description}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    {/* Botón de Editar */}
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <button
                        onClick={() => navigate(`edit/${activity.id}`)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center gap-1 text-xs"
                      >
                        <motion.div variants={iconVariants}>
                          <IcOutlineEdit className="h-5 w-5" />
                        </motion.div>
                        Editar
                      </button>
                    </motion.div>

                    {/* Botón de Borrar */}
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <button
                        onClick={() => openDeleteModal(activity)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center gap-1 text-xs"
                      >
                        <motion.div variants={iconVariants}>
                          <MingcuteDeleteLine className="h-5 w-5" />
                        </motion.div>
                        Borrar
                      </button>
                    </motion.div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de eliminar */}
      <AnimatePresence>
        {isDeleteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Eliminar Actividad
              </h2>
              <p className="text-gray-600 mb-6">
                ¿Está seguro de que desea eliminar la actividad{" "}
                {activityToDelete?.name}? Todos los datos relacionados se
                eliminarán permanentemente.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Confirmar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paginación */}
      <div className="mt-6 sm:flex sm:items-center sm:justify-between">
        <div className="text-sm text-gray-800 dark:text-gray-800">
          Pagina{" "}
          <span className="font-medium text -gray-700 dark:text-gray-800">
            {activitiesData.currentPage} de {activitiesData.totalPages}
          </span>
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <motion.button
            onClick={previousPage}
            disabled={!activitiesData.hasPreviousPage}
            className={`flex items-center justify-center px-5 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 
              ${
                !activitiesData.hasPreviousPage
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaChevronLeft className="w-5 h-5 mr-2 rtl:-scale-x-100" />
            Anterior
          </motion.button>

          <motion.button
            onClick={nextPage}
            disabled={!activitiesData.hasNextPage}
            className={`flex items-center justify-center px-5 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300
              ${
                !activitiesData.hasNextPage
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Siguiente
            <FaChevronRight className="w-5 h-5 ml-2 rtl:-scale-x-100" />
          </motion.button>
        </div>
      </div>
    </>
  );
};
