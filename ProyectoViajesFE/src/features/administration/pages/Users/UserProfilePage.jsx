import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../../store/useUsersStore";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { userInitValues, userValidationSchema } from "../../form/user.form";
import { Loading } from "../../../../shared/components/Loading";
import { jwtDecode } from "jwt-decode";
import {
  FaUser,
  FaEnvelope,
  FaImage,
  FaSave,
  FaExclamationCircle,
} from "react-icons/fa";
import { div } from "motion/react-client";
import { Footer, Header } from "../../../content/components";

export const UserProfilePage = () => {
  const navigate = useNavigate();
  const getUser = useUsersStore((state) => state.getUser);
  const updateUser = useUsersStore((state) => state.updateUser);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const formik = useFormik({
    initialValues: userInitValues(),
    validationSchema: userValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        setIsLoading(true);
        const result = await updateUser({
          ...formValues,
          id: userId,
        });

        if (result.status) {
          navigate("/profile");
        } else {
          setError(
            result.message || "Error al modificar la información del usuario"
          );
        }
      } catch (error) {
        setError("Error al modificar la información del usuario");
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const extractedUserId = decodedToken["UserId"] || null;

      if (!extractedUserId) {
        navigate("/login");
        return;
      }

      setUserId(extractedUserId);

      const loadUserData = async () => {
        try {
          setIsLoading(true);
          const result = await getUser(extractedUserId);

          if (result?.status && result.data) {
            formik.setValues({
              id: result.data.id,
              firstName: result.data.firstName || "",
              lastName: result.data.lastName || "",
              email: result.data.email || "",
              imageUrl: result.data.imageUrl || "",
            });
            setPreviewImage(result.data.imageUrl || "");
          } else {
            setError("No se pudo cargar la información del usuario");
          }
        } catch (error) {
          console.error(error);
          setError("Error al cargar la información del usuario");
        } finally {
          setIsLoading(false);
        }
      };

      loadUserData();
    } catch (err) {
      console.error("Error decoding token", err);
      navigate("/login");
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden flex shadow-xl">
          {/* Columna de Formulario */}
          <div className="w-2/3 p-12">
            <div className="flex items-center mb-8">
              <FaUser className="text-indigo-600 mr-3 text-3xl" />
              <h2 className="text-3xl font-extrabold text-gray-900">
                Editar Perfil
              </h2>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center"
                  role="alert"
                >
                  <FaExclamationCircle className="mr-2" />
                  <span className="block sm:inline">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                  >
                    <FaUser className="mr-2 text-indigo-500" /> Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  {formik.errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                  >
                    <FaUser className="mr-2 text-indigo-500" /> Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  {formik.errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                >
                  <FaEnvelope className="mr-2 text-indigo-500" /> Correo
                  electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
                {formik.errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items- center"
                >
                  <FaImage className="mr-2 text-indigo-500" /> URL de la imagen
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  value={formik.values.imageUrl}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setPreviewImage(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
                {formik.errors.imageUrl && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.imageUrl}
                  </p>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaSave className="mr-2" /> Actualizar Información
                </button>
              </motion.div>
            </form>
          </div>

          {/* Columna de Vista Previa */}
          <div className="w-1/3 p-6 border-l border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Vista Previa
            </h3>
            {previewImage ? (
              <div className="w-full h-64 border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 border border-gray-300 rounded-lg">
                <p className="text-gray-500">No hay imagen para mostrar</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
