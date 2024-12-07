import { useNavigate, useParams } from "react-router-dom";
import { usePointsInterestStore } from "../../store/usePointsInterestStore";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { pointInterestInitValues, pointInterestValidationSchema } from "../../form/pointInterest.form";
import { Loading } from "../../../../shared/components/Loading";
import { motion, AnimatePresence } from "framer-motion";

export const EditPointInterestPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedPointInterest = usePointsInterestStore((state) => state.selectedPointInterest);
  const getPointInterest = usePointsInterestStore((state) => state.getPointInterest);
  const updatePointInterest = usePointsInterestStore((state) => state.updatePointInterest);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const formik = useFormik({
    initialValues: pointInterestInitValues(),
    validationSchema: pointInterestValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        setIsLoading(true);
        const result = await updatePointInterest(formValues);
        if (result.status) {
          navigate('/administration/points-interest');
        } else {
          setError(result.message || "Error al actualizar el punto de interés");
        }
      } catch (error) {
        setError("Error al actualizar el punto de interés");
      } finally {
        setIsLoading(false);
      }
    }
  });

  useEffect(() => {
    const loadPointInterest = async () => {
      try {
        setIsLoading(true);
        const result = await getPointInterest(id);
        
        if (result?.status && result.data) {
          formik.setValues({
            id: result.data.id,
            name: result.data.name || '',
            description: result.data.description || '',
            destinationId: result.data.destinationId || '',
            imageUrl: result.data.imageUrl || ''
          });
        } else {
          setError("No se pudo cargar el punto de interés");
        }
      } catch (error) {
        console.error(error);
        setError("Error al cargar el punto de interés");
      } finally {
        setIsLoading(false);
      }
    };

    loadPointInterest();
  }, [id]);

  if(isLoading) return <Loading />

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" mt-5 bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-xl p-8">
        <div className="text-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-gray-900"
          >
            Editar Punto de interés
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.name && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
            {formik.errors.description && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.description}</p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Url de la imagen
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.imageUrl && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.imageUrl}</p>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="destinationId" className="block text-sm font-medium text-gray-700">
              Id del destino al que pertenece
            </label>
            <input
              type="text"
              name="destinationId"
              id="destinationId"
              value={formik.values.destinationId}
              onChange={formik.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.errors.destinationId && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.destinationId}</p>
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
              Actualizar Punto de interés
            </button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}