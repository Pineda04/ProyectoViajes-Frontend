import { Link, useParams } from "react-router-dom";
import { getDestinationById } from "../../../shared/actions/destinations/destinations.action";
import { DestinationDetailsSkeleton } from "./DestinationDetailsSkeleton";
import { useEffect, useState } from "react";
import { Pagination } from "../../../shared/components";

export const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Paginación de los puntos de interés
  const [currentPage, setCurrentPage] = useState(1);
  const [pointsPerPage] = useState(3); // <- Aquí se maneja la paginación

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const result = await getDestinationById(id);
        if (!result || !result.data) {
          setError("Destino no encontrado.");
        } else {
          setDestination(result);
        }
        setIsLoading(false);
      } catch (err) {
        setError("Error al cargar el destino.");
        setIsLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  // Lógica para la paginación de los puntos de interés
  const indexOfLastPoint = currentPage * pointsPerPage;
  const indexOfFirstPoint = indexOfLastPoint - pointsPerPage;
  const currentPoints = destination?.data?.pointsInterest.slice(
    indexOfFirstPoint,
    indexOfLastPoint
  );
  const totalPages = Math.ceil(
    destination?.data?.pointsInterest.length / pointsPerPage
  );

  if (isLoading) {
    return <DestinationDetailsSkeleton />;
  }

  if (error) {
    return (
      <section className="py-10 text-white">
        <div className="container mx-auto px-4 md:px-8 xl:px-16">
          <div>
            <div className="p-6 text-center">
              <p className="">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Para cambiar la página
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <img
            src={destination.data?.imageUrl}
            alt={destination.data?.name}
            className="w-full h-64 sm:h-80 object-cover cursor-pointer"
            onClick={() => openModal(destination.data?.imageUrl)}
          />

          <div className="p-6 space-y-6">
            {/* Título */}
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-extrabold text-yellow-400">
                {destination.data?.name}
              </h1>
              <Link
                to={`/destination/${id}/travel-packages`}
                className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-200"
              >
                Ver Paquetes de Viaje
              </Link>
            </div>
            {/* Descripción */}
            <p className="text-lg text-gray-300">
              {destination.data?.description}
            </p>

            {/* Ubicación */}
            <div className="text-gray-200">
              <strong>Ubicación:</strong> {destination.data?.location}
            </div>

            {/* Puntos de interés */}
            {destination.data?.pointsInterest &&
            destination.data.pointsInterest.length > 0 ? (
              <div>
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Puntos de interés
                </h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      <img
                        src={point.imageUrl}
                        alt={point.name}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-semibold text-yellow-400">
                        {point.name}
                      </h4>
                      <p className="mt-2 text-gray-300">{point.description}</p>
                    </div>
                  ))}
                </div>

                {/* Paginación de puntos de interés */}
                <div className="mt-8 flex justify-center">
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleCurrentPage={handleCurrentPage}
                    handlePreviousPage={() =>
                      handleCurrentPage(currentPage - 1)
                    }
                    handleNextPage={() => handleCurrentPage(currentPage + 1)}
                    hasPreviousPage={currentPage > 1}
                    hasNextPage={currentPage < totalPages}
                  />
                </div>
              </div>
            ) : (
              <p className="text-white text-center mt-4">
                No hay puntos de interés disponibles para este destino.
              </p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-2xl p-4"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={currentImage}
              alt="Destino"
              className="max-w-screen-sm max-h-screen-sm object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
