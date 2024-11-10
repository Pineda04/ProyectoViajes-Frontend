import { useDestinations } from "../hooks/useDestinations";
import { useEffect, useState } from "react";
import { DestinationListSkeleton } from "./DestinationListSkeleton";
import { DestinationListItem } from "./DestinationListItem";
import { Pagination } from "../../../shared/components";
import { FaSearch } from "react-icons/fa";

export const DestinationsPostList = () => {
  const { destinations, loadDestinations, isLoading } = useDestinations();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      loadDestinations(searchTerm, currentPage);
      setFetching(false);
    }
  }, [fetching]);

  const handlePreviousPage = () => {
    if (destinations.data.hasPreviousPage) {
      setCurrentPage((prevPage) => prevPage - 1);
      setFetching(true);
    }
  };

  const handleNextPage = () => {
    if (destinations.data.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
      setFetching(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setFetching(true);
  };

  const handleCurrentPage = (index = 1) => {
    setCurrentPage(index);
    setFetching(true);
  };

  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-1/2 mb-6"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Buscar destinos..."
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
            Destinos
          </h3>
        </div>

        {isLoading ? (
          <DestinationListSkeleton size={6} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations?.data?.items?.length ? (
              destinations.data.items.map((destination) => (
                <DestinationListItem
                  key={destination.id}
                  destination={destination}
                />
              ))
            ) : (
              <p className="text-white col-span-3 text-center">
                No hay destinos disponibles
              </p>
            )}
          </div>
        )}

        {/* Paginación */}
        {destinations?.data?.items?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPages={destinations?.data?.totalPages}
              hasNextPage={destinations?.data?.hasNextPage}
              hasPreviousPage={destinations?.data?.hasPreviousPage}
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
