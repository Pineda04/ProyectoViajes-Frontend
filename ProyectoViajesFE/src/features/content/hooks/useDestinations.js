import { useState } from "react"
import { getDestinationsList } from "../../../shared/actions/destinations/destinations.action"

export const useDestinations = () => {
  const [destinations, setDestinations] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadDestinations = async (searchTerm, page) => {
    setIsLoading(true);
    const result = await getDestinationsList(searchTerm, page);
    setDestinations(result);
    setIsLoading(false);
  } 

  return {
    destinations,
    isLoading,
    loadDestinations,
  }
}