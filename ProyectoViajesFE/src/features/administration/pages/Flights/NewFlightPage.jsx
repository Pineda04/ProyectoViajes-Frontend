import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flightInitValues, flightValidationSchema } from "../../form/flight.form";
import { viajesApi } from "../../../../config/api/viajesApi";
import { Loading } from "../../../../shared/components/Loading";

export const NewFlightPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const formik = useFormik({
    initialValues: flightInitValues(),
    validationSchema: flightValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        setIsLoading(true);
        const { data } = await viajesApi.post('/flights', formValues);
        
        if (data.status) {
          navigate('/administration/flights');
        } else {
          setError(data.message || "Error al crear el vuelo");
        }
      } catch (error) {
        console.error(error);
        setError("Error al crear el vuelo");
      } finally {
        setIsLoading(false);
      }
    }
  });

  if(isLoading) return <Loading />

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-5 bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-xl p-8">
        <div className="text-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-gray-900"
          >
            Crear Nuevo Vuelo
          </motion.h2>
        </div>
        
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="airline" className="block text-sm font-medium text-gray-700">
              Nombre de la aerolínea
            </label>
            <input
              type="text"
              name="airline"
              id="airline"
              value={formik.values.airline}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.airline && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.airline}</p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Precio del vuelo ($)
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.price && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.price}</p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="typeFlightId" className="block text-sm font-medium text-gray-700">
              Id del tipo de vuelo
            </label>
            <input
              type="text"
              name="typeFlightId"
              id="typeFlightId"
              value={formik.values.typeFlightId}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.typeFlightId && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.typeFlightId}</p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="travelPackageId" className="block text-sm font-medium text-gray-700">
              Id del paquete de viaje
            </label>
            <input
              type="text"
              name="travelPackageId"
              id="travelPackageId"
              value={formik.values.travelPackageId}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.travelPackageId && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.travelPackageId}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Crear Vuelo
            </button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}