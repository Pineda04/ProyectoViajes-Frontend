import { useState, useEffect } from "react";
import { useTravelPackages } from "../hooks/useTravelPackages";
import { TravelPackageListItem } from "./TravelPackageListItem";
import { TravelPackageListSkeleton } from "./TravelPackageListSkeleton";
import { Pagination } from "../../../shared/components";
import { FaSearch } from "react-icons/fa";

export const TravelPackagesPostList = () => {
  const { travelPackages, loadTravelPackages, isLoading } = useTravelPackages();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetching, setFetching] = useState(true);
  const [starRange, setStarRange] = useState(null);
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    if (fetching) {
      loadTravelPackages(searchTerm, currentPage, starRange);
      setFetching(false);
    }
  }, [fetching, searchTerm, currentPage, starRange]);

  useEffect(() => {
    if (travelPackages?.data?.items?.length) {
      let filtered = travelPackages.data.items;

      // Filtrar por el rango de estrellas
      if (starRange) {
        filtered = travelPackages.data.items.filter(pkg => {
          const avgStars = pkg.averageStars;
          return avgStars >= starRange.min && avgStars <= starRange.max;
        });
      }

      // Filtrar por término de búsqueda
      if (searchTerm) {
        filtered = filtered.filter(pkg => 
          pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredPackages(filtered);
    }
  }, [starRange, searchTerm, travelPackages]);

  const handlePreviousPage = () => {
    if (travelPackages.data.hasPreviousPage) {
      setCurrentPage(prevPage => prevPage - 1);
      setFetching(true);
    }
  };

  const handleNextPage = () => {
    if (travelPackages.data.hasNextPage) {
      setCurrentPage(prevPage => prevPage + 1);
      setFetching(true);
    }
  };

  const handleCurrentPage = (index = 1) => {
    setCurrentPage(index);
    setFetching(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setFetching(true);
  };

  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <form onSubmit={handleSubmit} className="flex w-full md:w-1/2 mb-6">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Buscar paquetes..."
              className="px-4 py-2 w-full rounded-l-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 rounded-r-lg px-4 flex items-center justify-center border border-gray-700 hover:bg-yellow-400 transition"
            >
              <FaSearch className="text-gray-900" />
            </button>
          </form>

          <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 md:mb-0 md:pb-5">
            Paquetes de Viaje
          </h3>

          <div className="flex flex-col items-center mb-8">
            <label className="text-white mb-2" htmlFor="star-rating">Filtrar por promedio de estrellas</label>
            <select
              id="star-rating"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "none") {
                  setStarRange(null);
                } else if (value === "1-2") {
                  setStarRange({ min: 1, max: 2 });
                } else if (value === "3-4") {
                  setStarRange({ min: 3, max: 4 });
                } else if (value === "5") {
                  setStarRange({ min: 5, max: 5 });
                }
              }}
              className="px-4 py-2 w-full md:w-1/2 mb-6 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none"
            >
              <option value="none">Ninguna</option>
              <option value="1-2">1-2 estrellas</option>
              <option value="3-4">3-4 estrellas</option>
              <option value="5">5 estrellas</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <TravelPackageListSkeleton size={3} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages?.length ? (
              filteredPackages.map((pkg) => (
                <TravelPackageListItem key={pkg.id} travelPackage={pkg} />
              ))
            ) : (
              <p className="text-white col-span-3 text-center">
                No hay paquetes disponibles
              </p>
            )}
          </div>
        )}

        {filteredPackages?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPages={travelPackages?.data?.totalPages}
              hasNextPage={travelPackages?.data?.hasNextPage}
              hasPreviousPage={travelPackages?.data?.hasPreviousPage}
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
