export const ReservationDetailsSkeleton = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Imagen del paquete */}
          <div className="w-full h-64 sm:h-80 bg-gray-600 animate-pulse"></div>

          <div className="p-6 space-y-6">
            {/* Título del paquete */}
            <div className="h-8 bg-gray-600 rounded w-3/4 mb-3 animate-pulse"></div>

            {/* Descripción */}
            <div className="h-4 bg-gray-600 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-600 rounded w-2/3 animate-pulse"></div>

            {/* Destino */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mt-4 animate-pulse"></div>

            {/* Duración */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mt-2 animate-pulse"></div>

            {/* Precio */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mt-2 animate-pulse"></div>

            {/* Formulario de reserva */}
            <form className="mt-8 space-y-6">
              {/* Fecha de viaje */}
              <div className="h-10 bg-gray-600 rounded w-full mb-3 animate-pulse"></div>

              {/* Número de personas */}
              <div className="h-10 bg-gray-600 rounded w-full mb-3 animate-pulse"></div>

              {/* Información de contacto */}
              <div className="space-y-4">
                <div className="h-10 bg-gray-600 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-10 bg-gray-600 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-10 bg-gray-600 rounded w-full mb-3 animate-pulse"></div>
              </div>

              {/* Botón de confirmar reserva */}
              <div className="h-12 bg-gray-600 rounded w-full animate-pulse"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
