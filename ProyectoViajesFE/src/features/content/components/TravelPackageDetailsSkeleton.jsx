export const TravelPackageDetailsSkeleton = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Imagen */}
          <div className="w-full h-64 sm:h-80 bg-gray-600 animate-pulse"></div>

          <div className="p-6 space-y-6">
            {/* Título */}
            <div className="h-8 bg-gray-600 rounded w-3/4 mb-3 animate-pulse"></div>

            {/* Descripción */}
            <div className="h-4 bg-gray-600 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-600 rounded w-2/3 animate-pulse"></div>

            {/* Precio */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mt-4 animate-pulse"></div>

            {/* Duración */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mt-2 animate-pulse"></div>

            {/* Actividades */}
            <div className="mt-6">
              {/* Título*/}
              <div className="h-6 bg-gray-600 rounded w-3/4 mb-4 animate-pulse"></div>

              <div className="overflow-x-auto mt-6">
                {/* Tabla */}
                <table className="min-w-full bg-gray-700 text-white animate-pulse">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 text-left bg-gray-600 animate-pulse"></th>
                      <th className="py-3 px-6 text-left bg-gray-600 animate-pulse"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 3 }).map((_, index) => (// Le ponemos 3
                      <tr key={index} className="border-b border-gray-600">
                        <td className="py-3 px-6">
                          <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
                        </td>
                        <td className="py-3 px-6">
                          <div className="h-4 bg-gray-600 rounded w-2/3 animate-pulse"></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calificaciones */}
            <div className="mt-8">
              {/* Título */}
              <div className="h-6 bg-gray-600 rounded w-3/4 mb-4 animate-pulse"></div>

              {/* Promedio de estrellas */}
              <div className="h-4 bg-gray-600 rounded w-1/3 mt-4 animate-pulse"></div>

              {/* Reseñas */}
              <div className="mt-6">
                <ul className="space-y-6">
                  {Array.from({ length: 3 }).map((_, index) => ( // Le ponemos 3 reseñas
                    <li
                      key={index}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gray-600 animate-pulse"></div>
                        <div className="flex flex-col space-y-2">
                          <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
                          <div className="flex items-center space-x-2">
                            {/* Estrellas */}
                            <div className="h-4 w-16 bg-gray-600 rounded animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      {/* Comentario */}
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-600 rounded w-2/3 mt-2 animate-pulse"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
