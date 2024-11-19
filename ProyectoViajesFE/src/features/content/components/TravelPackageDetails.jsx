import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTravelPackageById } from "../../../shared/actions/travelPackages/travelPackages.action";
import { TravelPackageDetailsSkeleton } from "./TravelPackageDetailsSkeleton";
import { FaStar } from "react-icons/fa";

export const TravelPackageDetails = () => {
  const { id } = useParams();
  const [travelPackage, setTravelPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Para generar el promedio de estrellas
  const renderStars = (stars) => {
    const fullStars = Array.from({ length: stars }, (_, i) => (
      <FaStar key={i} className="text-yellow-400" />
    ));
    const emptyStars = Array.from({ length: 5 - stars }, (_, i) => (
      <FaStar key={i + fullStars.length} className="text-gray-400" />
    ));
    return [...fullStars, ...emptyStars];
  };

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
            {/* Titulo y boton de reservar*/}
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-extrabold text-yellow-400">
                {travelPackage.data?.name}
              </h1>
              <button
                className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-200"
                onClick={() => alert("Reserva realizada!")}
              >
                Reservar
              </button>
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

            {/* Calificaciones */}
            {travelPackage.data?.assessments &&
            travelPackage.data.assessments.length > 0 ? (
              <div>
                <h3 className="text-2xl font-semibold text-yellow-500 mt-8">
                  Calificaciones
                </h3>
                <div className="mt-4">
                  {/* Promedio de estrellas */}
                  <div className="flex items-center mt-2">
                    <p className="text-gray-300 mr-4">
                      <strong>Promedio de estrellas:</strong> {averageStars.toFixed(1)} / 5
                    </p>
                    <div className="flex">{renderStars(averageStars)}</div>
                  </div>

                  {/* Listar todas las calificaciones */}
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
                                  assessment.userImage ||
                                  "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg"
                                }
                                alt={assessment.userName}
                                className="w-16 h-16 rounded-full border-4 border-yellow-400"
                              />
                              <div className="flex flex-col">
                                <span className="text-yellow-400 text-lg font-semibold">
                                  {assessment.userId || "Mclovin"}
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
          </div>
        </div>
      </div>
    </section>
  );
};
