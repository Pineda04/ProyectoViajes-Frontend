import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTravelPackageById } from "../../../shared/actions/travelPackages/travelPackages.action";
import { useNavigate } from "react-router-dom";
import { ReservationDetailsSkeleton } from "./ReservationDetailsSkeleton";

export const ReservationDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [date, setDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTravelPackage = async () => {
      try {
        const result = await getTravelPackageById(id);
        if (!result || !result.data) {
          setError("Paquete no encontrado.");
        } else {
          setPackageDetails(result); // Aquí se guarda el paquete completo
        }
      } catch (err) {
        setError("Error al cargar los detalles del paquete.");
      }
    };

    fetchTravelPackage();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !date ||
      !contactInfo.name ||
      !contactInfo.email ||
      !contactInfo.phone
    ) {
      setError("Por favor complete todos los campos.");
      return;
    }

    // Aquí iría la lógica para enviar la reserva a la API
    // Por ejemplo, enviar a una acción para guardar la reserva.

    // Simulamos que se ha creado la reserva
    setTimeout(() => {
      alert("Reserva creada con éxito");
      navigate("/home"); // Redirigir al home
    }, 1000);
  };

  if (error) {
    return <ReservationDetailsSkeleton/>
  }

  if (!packageDetails) {
    return <ReservationDetailsSkeleton/>
  }

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Imagen del paquete */}
          <img
            src={packageDetails.data?.imageUrl}
            alt={packageDetails.data?.name}
            className="w-full h-64 sm:h-80 object-cover"
          />

          <div className="p-6">
            {/* Información del paquete */}
            <h1 className="text-4xl font-extrabold text-yellow-400">
              {packageDetails.data?.name}
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              {packageDetails.data?.description}
            </p>

            {/* Detalles adicionales del paquete */}
            <div className="mt-6">
              <p className="text-lg text-gray-300">
                <strong>Destino:</strong>{" "}
                {packageDetails.data?.destinations?.name}{" "}
                {/* Aquí se muestra el nombre del destino */}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Duración:</strong> {packageDetails.data?.duration} días
              </p>
              <p className="text-lg text-gray-300">
                <strong>Precio:</strong> $
                {packageDetails.data?.price}
              </p>
            </div>

            {/* Formulario de reserva */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Fecha de viaje */}
              <div>
                <label htmlFor="date" className="block text-lg text-gray-300">
                  Fecha de viaje
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                  required
                />
              </div>

              {/* Número de personas */}
              <div className="mt-4">
                <label
                  htmlFor="numPeople"
                  className="block text-lg text-gray-300"
                >
                  Número de personas
                </label>
                <input
                  type="number"
                  id="numPeople"
                  min="1"
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                  required
                />
              </div>

              {/* Información del contacto */}
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-300">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactInfo.name}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, name: e.target.value })
                    }
                    className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-300"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                    className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg text-gray-300"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, phone: e.target.value })
                    }
                    className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                    required
                  />
                </div>
              </div>

              {/* Botón para confirmar la reserva */}
              <button
                type="submit"
                className="w-full bg-yellow-500 py-2 text-lg text-white font-bold rounded-xl hover:bg-yellow-400 transition-all"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
