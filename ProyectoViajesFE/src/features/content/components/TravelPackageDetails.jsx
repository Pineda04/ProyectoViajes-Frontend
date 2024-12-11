import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTravelPackageById } from "../../../shared/actions/travelPackages/travelPackages.action";
import { createAssessmentAsync, updateAssessmentAsync } from "../../../shared/actions/assessments/assessments.admin.action";
import { TravelPackageDetailsSkeleton } from "./TravelPackageDetailsSkeleton";
import { FaStar, FaTimes } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

export const TravelPackageDetails = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [travelPackage, setTravelPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHostingImage, setSelectedHostingImage] = useState(null);

  // Estados para reseñas
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userExistingReview, setUserExistingReview] = useState(null);
  const [isEditingReview, setIsEditingReview] = useState(false);

  // Efecto para obtener el ID del usuario desde el token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const extractedUserId = decodedToken["UserId"] || null;

        if (extractedUserId) {
          setUserId(extractedUserId);
        }
      } catch (err) {
        console.error("Error decoding token", err);
      }
    }
  }, []);

  useEffect(() => {
    const fetchTravelPackage = async () => {
      try {
        const result = await getTravelPackageById(id);
        if (!result || !result.data) {
          setError("Paquete de viaje no encontrado.");
        } else {
          setTravelPackage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setError("Error al cargar el paquete de viaje.");
        setIsLoading(false);
      }
    };

    fetchTravelPackage();
  }, [id]);

  // Efecto para verificar si el usuario ya tiene una reseña
  useEffect(() => {
    if (userId && travelPackage?.data?.assessments) {
      const existingReview = travelPackage.data.assessments.find(
        assessment => assessment.userId === userId
      );

      if (existingReview) {
        setUserExistingReview(existingReview);
      }
    }
  }, [userId, travelPackage]);

  const renderStars = (stars) => {
    const fullStars = Array.from({ length: Math.floor(stars) }, (_, i) => (
      <FaStar key={i} className="text-yellow-400" />
    ));
    const emptyStars = Array.from({ length: 5 - Math.floor(stars) }, (_, i) => (
      <FaStar key={i + fullStars.length} className="text-gray-400" />
    ));
    return [...fullStars, ...emptyStars];
  };

  const renderSelectableStars = () => {
    return [1, 2, 3, 4, 5].map((starValue) => (
      <FaStar
        key={starValue}
        className={`cursor-pointer text-2xl transition-colors ${
          starValue <= stars ? "text-yellow-400" : "text-gray-400"
        }`}
        onClick={() => setStars(starValue)}
      />
    ));
  };

  const openImageModal = (imageUrl) => {
    setSelectedHostingImage(imageUrl);
  };
  
  const closeImageModal = () => {
    setSelectedHostingImage(null);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!userId) {
      setReviewError("Debes iniciar sesión para dejar una reseña");
      return;
    }

    if (stars === 0) {
      setReviewError("Por favor, selecciona una calificación");
      return;
    }

    try {
      setIsSubmitting(true);
      setReviewError("");

      const reviewData = {
        travelPackageId: id,
        userId: userId,
        stars: stars,
        comment: comment || "",
      };

      let response;
      if (userExistingReview) {
        // Actualizar reseña existente
        response = await updateAssessmentAsync({
          ...reviewData,
          id: userExistingReview.id
        });
      } else {
        // Crear nueva reseña
        response = await createAssessmentAsync(reviewData);
      }

      // Limpiar formulario
      setStars(0);
      setComment("");
      setIsEditingReview(false);

      const result = await getTravelPackageById(id);
      setTravelPackage(result);

      const updatedExistingReview = result.data.assessments.find(
        assessment => assessment.userId === userId
      );
      setUserExistingReview(updatedExistingReview);

    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Error al enviar la reseña. Intenta de nuevo.";

      setReviewError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const startEditReview = () => {
    if (userExistingReview) {
      setStars(userExistingReview.stars);
      setComment(userExistingReview.comment);
      setIsEditingReview(true);
    }
  };

  const cancelEditReview = () => {
    setStars(0);
    setComment("");
    setIsEditingReview(false);
  };

  const renderReviewForm = () => {
    // Si el usuario ya tiene una reseña y no está en modo edición
    if (userExistingReview && !isEditingReview) {
      return (
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
            Tu Reseña
          </h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {renderStars(userExistingReview.stars)}
            </div>
            <button
              onClick={startEditReview}
              className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg 
              hover:bg-yellow-400 transition duration-200"
            >
              Editar Reseña
            </button>
          </div>
          {userExistingReview.comment && (
            <p className="text-gray-300 italic">
              {userExistingReview.comment}
            </p>
          )}
        </div>
      );
    }

    // Formulario de reseña (nuevo o edición)
    return (
      <div className="bg-gray-800 rounded-xl p-6">
         <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
          {isEditingReview ? "Editar Reseña" : "Deja tu reseña"}
        </h3>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">
              Calificación
            </label>
            <div className="flex space-x-2">
              {renderSelectableStars()}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-gray-300 mb-2">
              Comentario (opcional)
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
              rows="4"
              placeholder="Escribe tu comentario aquí..."
            />
          </div>

          {reviewError && (
            <p className="text-red-500 text-sm">{reviewError}</p>
          )}

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg 
              hover:bg-yellow-400 transition duration-200 
              disabled:opacity-50 disabled:cursor-not-allowed flex-grow"
            >
              {isSubmitting 
                ? "Enviando..." 
                : (isEditingReview ? "Actualizar Reseña" : "Enviar Reseña")
              }
            </button>
            {isEditingReview && (
              <button
                type="button"
                onClick={cancelEditReview}
                className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg 
                hover:bg-red-400 transition duration-200"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };

  if (isLoading) {
    return <TravelPackageDetailsSkeleton />;
  }

  if (error) {
    return (
      <section className="py-10 text-white">
        <div className="container mx-auto px-4 md:px-8 xl:px-16">
          <div>
            <div className="p-6 text-center">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const averageStars = travelPackage.data?.averageStars;

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <img
            src={travelPackage.data?.imageUrl}
            alt={travelPackage.data?.name}
            className="w-full h-64 sm:h-80 object-cover cursor-pointer"
          />

          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-extrabold text-yellow-400">
                {travelPackage.data?.name}
              </h1>
              <Link
                className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-200"
                to={`/reservations/travel-package/${travelPackage.data?.id}`}
              >
                Reservar
              </Link>
            </div>

            <p className="text-lg text-gray-300">
              {travelPackage.data?.description}
            </p>

            <div className="text-gray-200">
              <strong>Precio:</strong> ${travelPackage.data?.price}
            </div>

            <div className="text-gray-200">
              <strong>Duración:</strong> {travelPackage.data?.duration} días
            </div>

            {/* Actividades */}
            {travelPackage.data?.activities &&
            travelPackage.data.activities.length > 0 ? (
              <div>
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Actividades
                </h3>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full bg-gray-700 text-white rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-600 text-gray-200 uppercase text-sm">
                        <th className="py-3 px-6 text-left">Nombre</th>
                        <th className="py-3 px-6 text-left">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {travelPackage.data.activities.map((activity, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                        >
                          <td className="py-3 px-6">{activity.name}</td>
                          <td className="py-3 px-6">{activity.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-white text-center mt-4">
                No hay actividades disponibles para este paquete de viaje.
              </p>
            )}

            {/* Acomodaciones (Vuelos y Hospedajes) */}
            {(travelPackage.data?.flights &&
              travelPackage.data.flights.length > 0) ||
            (travelPackage.data?.hostings &&
              travelPackage.data.hostings.length > 0) ? (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Incluye
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Sección de Vuelos */}
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-4">
                      Vuelo
                    </h4>
                    {travelPackage.data?.flights &&
                    travelPackage.data.flights.length > 0 ? (
                      <table className="w-full text-white">
                        <thead>
                          <tr className="bg-gray-600 text-gray-200 uppercase text-sm">
                            <th className="py-3 px-4 text-left">Aerolínea</th>
                            <th className="py-3 px-4 text-left">Precio</th>
                          </tr>
                        </thead>
                        <tbody>
                          {travelPackage.data.flights.map((flight, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                            >
                              <td className="py-3 px-4">{flight.airline}</td>
                              <td className="py-3 px-4">${flight.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-gray-300 text-center">
                        No hay vuelos disponibles.
                      </p>
                    )}
                  </div>

                  {/* Sección de Hospedajes */}
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-4">
                      Hospedaje
                    </h4>
                    {travelPackage.data?.hostings &&
                    travelPackage.data.hostings.length > 0 ? (
                      <div className="grid gap-4">
                        {travelPackage.data.hostings.map((hosting, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden flex items-center"
                          >
                            <div
                              className="w-24 h-24 flex-shrink-0 mr-2 cursor-pointer ml-4"
                              onClick={() => openImageModal(hosting.imageUrl)}
                            >
                              <img
                                src={hosting.imageUrl}
                                alt={hosting.name}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="p-4 flex-grow">
                              <h5 className="text-lg font-semibold text-yellow-400 mb-1">
                                {hosting.name}
                              </h5>
                              <p className="text-gray-300 text-sm mb-1 line-clamp-2">
                                {hosting.description}
                              </p>
                              <p className="text-gray-300 text-sm">
                                <strong>Precio por noche:</strong> $
                                {hosting.pricePerNight}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-300 text-center">
                        No hay hospedajes disponibles.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-white text-center mt-4">
                No hay acomodaciones disponibles para este paquete de viaje.
              </p>
            )}

            {/* Calificaciones */}
            {travelPackage.data?.assessments &&
            travelPackage .data.assessments.length > 0 ? (
              <div>
                <h3 className="text-2xl font-semibold text-yellow-500 mt-8">
                  Calificaciones
                </h3>
                <div className="mt-4">
                  <div className="flex items-center mt-2">
                    <p className="text-gray-300 mr-4">
                      <strong>Promedio de estrellas:</strong>{" "}
                      {averageStars.toFixed(1)} / 5
                    </p>
                    <div className="flex">{renderStars(averageStars)}</div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-yellow-500">
                      Reseñas de usuarios
                    </h4>
                    <ul className="space-y-6 mt-6">
                      {travelPackage.data.assessments.map(
                        (assessment, index) => (
                          <li
                            key={index}
                            className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                          >
                            <div className="flex items-center space-x-6 mb-6">
                              <img
                                src={
                                  assessment.userImageUrl ||
                                  "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg"
                                }
                                alt={assessment.userName}
                                className="w-16 h-16 rounded-full border-4 border-yellow-400"
                              />
                              <div className="flex flex-col">
                                <span className="text-yellow-400 text-lg font-semibold">
                                  {assessment.userName || "Mclovin"}
                                </span>
                                <div className="flex items-center space-x-2 mt-2">
                                  {renderStars(assessment.stars)}
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                              <strong className="text-yellow-400">
                                Comentario:
                              </strong>
                              <p className="text-gray-300 mt-2">
                                {assessment.comment}
                              </p>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-white text-center mt-4">
                No hay calificaciones disponibles para este paquete de viaje.
              </p>
            )}

            {/* Formulario de Reseña */}
            <div className="container mx-auto px-4 md:px-8 xl:px-16 mt-8">
              {renderReviewForm()}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Imagen */}
      {selectedHostingImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-yellow-400 transition-colors"
              onClick={closeImageModal}
            >
              <FaTimes />
            </button>
            <img
              src={selectedHostingImage}
              alt="Imagen de hospedaje"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};