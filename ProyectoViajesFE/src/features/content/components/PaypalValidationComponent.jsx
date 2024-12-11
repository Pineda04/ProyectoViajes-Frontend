import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTravelPackageById } from "../../../shared/actions/travelPackages/travelPackages.action";
import { ReservationDetailsSkeleton } from "./ReservationDetailsSkeleton";
import { jwtDecode } from "jwt-decode";
import { useReservationsStore } from "../../administration/store/useReservationsStore";
import { useAuthStore } from '../../security/store';
import { useUsersStore } from '../../administration/store/useUsersStore';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const ReservationDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  
  const navigate = useNavigate();

  const { createReservation } = useReservationsStore();
  const { logout } = useAuthStore();
  const { getUser } = useUsersStore();

  const initialOptions = {
    "client-id": "ATqQ8EVaesK7DiBYedkF1iPZldaq-EYuXCK2S_4kD4vXPvsKtVPmtKjhoOJ-8zPN6qgtt1cyOOjLkP2J",
    currency: "USD",
    intent: "capture"
  };

  // Cargar fecha desde localStorage al montar el componente
  useEffect(() => {
    const savedDate = localStorage.getItem('reservationDate');
    if (savedDate) {
      setDate(savedDate);
    }
  }, []);

  // Obtener el ID del usuario desde el token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const extractedUserId = decodedToken["UserId"] || null;
        
        if (extractedUserId) {
          setUserId(extractedUserId);
          getUser(extractedUserId);
        } else {
          logout();
          navigate('/login');
        }
      } catch (err) {
        console.error("Error decoding token", err);
        logout();
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, []);

  // Cargar detalles del paquete de viaje
  useEffect(() => {
    const fetchTravelPackage = async () => {
      try {
        setIsLoading(true);
        const result = await getTravelPackageById(id);
        if (!result || !result.data) {
          setError("Paquete no encontrado.");
        } else {
          setPackageDetails(result.data);
          setError("");
        }
      } catch (err) {
        setError("Error al cargar los detalles del paquete.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchTravelPackage();
    }
  }, [id, userId]);

  // Manejar cambio de fecha y guardar en localStorage
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    localStorage.setItem('reservationDate', selectedDate);
  };

  // Crear orden de PayPal
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: packageDetails?.price?.toString() || "5"
          }
        }
      ]
    });
  };
  
  // Manejar aprobación de PayPal
  const onApprove = async (data, actions) => {
    try {
      // Validar que la fecha exista en localStorage ANTES de capturar la orden
      const reservationDate = localStorage.getItem('reservationDate');

      if (!reservationDate) {
        setError("Por favor seleccione una fecha.");
        return;
      }

      // Capturar la orden de PayPal
      const details = await actions.order.capture();
      
      if (!userId) {
        setError("No se pudo obtener el ID del usuario. Por favor, inicie sesión nuevamente.");
        logout();
        navigate('/login');
        return;
      }

      const reservationData = {
        travelPackageId: id,
        flightId: packageDetails.flights[0]?.id,
        hostingId: packageDetails.hostings[0]?.id,
        reservationDate: reservationDate,
        userId: userId,
        paymentDetails: details
      };

      console.log("Datos de reservación:", reservationData);

      const result = await createReservation(reservationData);

      if (result.status) {
        localStorage.removeItem('reservationDate');
        alert("Reserva creada con éxito");
        navigate("/home");
      } else {
        setError(result.message || "Error al crear la reserva");
      }
    } catch (err) {
      setError("Error al procesar la reserva");
      console.error(err);
    }
  };

  // Manejar estados de carga y error
  if (isLoading) {
    return <ReservationDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <p className="text-2xl mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-500"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!packageDetails) {
    return <ReservationDetailsSkeleton />;
  }

  // Renderizado principal
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <img
            src={packageDetails.imageUrl}
            alt={packageDetails.name}
            className="w-full h-64 sm:h-80 object-cover"
          />

          <div className="p-6">
            <h1 className="text-4xl font-extrabold text-yellow-400">
              {packageDetails.name}
            </h1>

            <div className="mt-6">
              <p className="text-lg text-gray-300">
                <strong>Vuelo incluido:</strong>{" "}
                {packageDetails.flights[0]?.airline || "No especificado"}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Hospedaje incluido:</strong>{" "}
                {packageDetails.hostings[0]?.name || "No especificado"}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Paquete de viaje incluido:</strong>{" "}
                {packageDetails.name || "No especificado"}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Destino a visitar:</strong>{" "}
                {packageDetails.destinations?.name || "No especificado"}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Precio:</ <strong>Precio:</strong>{" "}
                ${packageDetails.price?.toFixed(2) || "No especificado"}
              </p>
            </div>

            <form className="mt-8 space-y-6">
              {/* Fecha de reservación */}
              <div>
                <label htmlFor="date" className="block text-lg text-gray-300">
                  Fecha de viaje
                </label>
                <input
                  type="date"
                  id="date"
                  value={localStorage.getItem('reservationDate') || date}
                  onChange={handleDateChange}
                  className="w-full mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                  required
                />
              </div>

              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{
                    layout: 'horizontal',
                    color: 'blue',
                    shape: 'rect',
                    label: 'paypal'
                  }}
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) => onApprove(data, actions)}
                />
              </PayPalScriptProvider>

              {error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};