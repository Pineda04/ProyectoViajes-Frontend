// useTravelPackagesByDestination.js
import { useState } from "react";
import { viajesApi } from "../../../config/api";

export const useTravelPackagesByDestination = () => {
  const [travelPackages, setTravelPackages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadTravelPackagesByDestination = async (destinationId, page = 1) => {
    setIsLoading(true);
    try {
      const { data } = await viajesApi.get(
        `/travel_packages/destination/${destinationId}`, 
        { params: { page } }
      );
      setTravelPackages(data);
    } catch (error) {
      console.error('Error al cargar paquetes de viaje:', error);
      setTravelPackages({});
    } finally {
      setIsLoading(false);
    }
  };

  return {
    travelPackages,
    isLoading,
    loadTravelPackagesByDestination,
  };
};