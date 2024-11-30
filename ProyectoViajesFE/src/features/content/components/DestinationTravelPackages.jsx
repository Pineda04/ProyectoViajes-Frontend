// DestinationTravelPackages.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTravelPackagesByDestination } from "../hooks/useTravelPackagesByDestination";
import { TravelPackageListItem } from "./TravelPackageListItem";
import { TravelPackageListSkeleton } from "./TravelPackageListSkeleton";
import { Pagination } from "../../../shared/components";

export const DestinationTravelPackages = () => {
  const { id } = useParams();
  const { 
    travelPackages, 
    isLoading, 
    error, 
    loadTravelPackagesByDestination 
  } = useTravelPackagesByDestination();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadTravelPackagesByDestination(id, currentPage);
  }, [id, currentPage]);

  const handlePreviousPage = () => {
    if (travelPackages.data.hasPreviousPage) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (travelPackages.data.hasNextPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  if (error) {
    return (
      <section className="py-10 bg-gray-800 text-white text-center">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Paquetes de Viaje de {travelPackages.data?.items[0]?.destinations?.name}
        </h2>

        {isLoading ? (
          <TravelPackageListSkeleton size={3} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.data?.items?.length ? (
              travelPackages.data.items.map((pkg) => (
                <TravelPackageListItem key={pkg.id} travelPackage={pkg} />
              ))
            ) : (
              <p className="text-white col-span-3 text-center">
                No hay paquetes disponibles para este destino
              </p>
            )}
          </div>
        )}

        {travelPackages.data?.items?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPages={travelPackages.data?.totalPages}
              hasNextPage={travelPackages.data?.hasNextPage}
              hasPreviousPage={travelPackages.data?.hasPreviousPage}
              currentPage={currentPage}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              handleCurrentPage={handleCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};