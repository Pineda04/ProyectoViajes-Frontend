import { useState } from "react";
import { getDestinationById } from "../../../shared/actions/destinations/destinations.action";

export const useDestination = () => {
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadDestination = async (id) => {
    setIsLoading(true);
    const result = await getDestinationById(id);
    if (result) {
      setDestination(result);
    }
    setIsLoading(false);
  };

  return {
    destination,
    isLoading,
    loadDestination,
  };
};