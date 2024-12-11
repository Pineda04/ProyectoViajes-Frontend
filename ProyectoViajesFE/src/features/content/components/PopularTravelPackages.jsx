import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getPopularTravelPackagesList } from "../../../shared/actions/travelPackages/travelPackages.action";

export const PopularTravelPackages = () => {
  const [popularPackages, setPopularPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPackages = async () => {
      try {
        const result = await getPopularTravelPackagesList("", 0, "averageStars", "desc");
        
        if (result.data && result.data.items) {
          const topPackages = result.data.items.slice(0, 3);
          setPopularPackages(topPackages);
        }
      } catch (error) {
        console.error("Error al obtener paquetes populares:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularPackages();
  }, []);

  const PopularPackageSkeleton = () => (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-xl animate-pulse">
      <div className="w-full h-48 sm:h-64 bg-gray-600"></div>
      <div className="p-4 md:p-6">
        <div className="h-8 bg-gray-600 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-2/3"></div>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-center text-white mb-8 md:mb-12">
          Paquetes de viaje populares
        </h3>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <PopularPackageSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.length > 0 ? (
              popularPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition"
                >
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h4 className="text-xl md:text-2xl font-semibold text-yellow-500">
                      {pkg.name}
                    </h4>
                    <p className="mt-2 md:mt-3 text-gray-300">
                      {pkg.description}
                    </p>
                    <div className="mt-2 flex items-center text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <FaStar 
                          key={index} 
                          className={
                            index < Math.round(pkg.averageStars) 
                              ? "text-yellow-400" 
                              : "text-gray-500"
                          } 
                        />
                      ))}
                      <span className="ml-2 text-gray-300">
                        {pkg.averageStars.toFixed(1)}
                      </span>
                    </div>
                    <Link
                      to={`/travel-packages/travel-package/${pkg.id}`}
                      className="text-yellow-400 font-bold mt-3 md:mt-4 block hover:text-yellow-300 transition"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center col-span-3">
                No hay paquetes populares disponibles
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};