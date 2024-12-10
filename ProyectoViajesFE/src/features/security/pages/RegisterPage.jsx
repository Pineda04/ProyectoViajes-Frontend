import { useFormik } from "formik";
import { motion } from "framer-motion";
import { FaArrowRight, FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { registerAsync } from "../../../shared/actions/auth";
import { Loading } from "../../../shared/components/Loading";
import { registerInitValues, registerValidationSchema } from "../forms/register.data";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: registerInitValues,
    validationSchema: registerValidationSchema,
    validateOnChange: true,
    onSubmit: async (formValues) => {
      setLoading(true);
      setRegisterError(null);
      
      try {
        const response = await registerAsync(formValues);
        
        if (response.status) {
          navigate('/security/login');
        } else {
          setRegisterError(response.message || 'Error en el registro');
        }
      } catch (error) {
        setRegisterError('Ocurrió un error durante el registro');
      } finally {
        setLoading(false);
      }
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-20 flex items-center justify-center bg-slate-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-900 via-gray-900 to-black mb-2">
              Crear Cuenta
            </h1>
            <p className="text-gray-500">Regístrate para comenzar</p>
          </div>

          {registerError && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6"
            >
              <p>{registerError}</p>
            </motion.div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nombre"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.firstName}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Apellido"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.lastName}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.05 }}
              type="submit"
              className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
            >
              Crear Cuenta
              <FaArrowRight className="ml-2" />
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-700"
                onClick={() => navigate('/security/login')}
              >
                Iniciar Sesión
              </motion.span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};