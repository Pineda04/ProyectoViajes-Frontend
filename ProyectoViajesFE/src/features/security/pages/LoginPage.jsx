import { useFormik } from "formik";
import { motion } from "framer-motion";
import { FaArrowRight, FaLock, FaEnvelope } from "react-icons/fa";
import { loginInitValues, loginValidationSchema } from "../forms";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Loading } from "../../../shared/components/Loading";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const validateAuthentication = useAuthStore((state) => state.validateAuthentication);
  const message = useAuthStore((state) => state.message);

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: loginInitValues,
    validationSchema: loginValidationSchema,
    validateOnChange: true,
    onSubmit: async (formValues) => {
      setLoading(true);
      await login(formValues);
      validateAuthentication();
      setLoading(false);
    },
  });

  if(loading) {
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
              Bienvenido
            </h1>
            <p className="text-gray-500">Inicia sesión en tu cuenta</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6"
            >
              <p>{message}</p>
            </motion.div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-6">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
            >
              Iniciar Sesión
              <FaArrowRight className="ml-2" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};