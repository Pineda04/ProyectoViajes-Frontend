export const DestinationDetailsSkeleton = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="w-full h-64 sm:h-80 bg-gray-600 animate-pulse"></div>

          <div className="p-6 space-y-6">
            <div className="h-8 bg-gray-600 rounded w-3/4 mb-3 animate-pulse"></div>
            
            <div className="h-4 bg-gray-600 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-600 rounded w-2/3 animate-pulse"></div>

            <div className="h-4 bg-gray-600 rounded w-1/2 mt-4 animate-pulse"></div>

            <div className="mt-6">
              <div className="h-6 bg-gray-600 rounded w-3/4 mb-4 animate-pulse"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => ( // <- Aquí se maneja la paginación
                  <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg animate-pulse">
                    <div className="w-full h-40 sm:h-48 bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
