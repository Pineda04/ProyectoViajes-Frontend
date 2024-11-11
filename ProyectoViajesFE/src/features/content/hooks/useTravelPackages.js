import { useState } from "react";
import { getTravelPackagesList } from "../../../shared/actions/travelPackages/travelPackages.action";

export const useTravelPackages = () => {
  const [travelPackages, setTravelPackages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadTravelPackages = async (searchTerm, page, averageStars) => {
    setIsLoading(true);
    const result = await getTravelPackagesList(searchTerm, page, averageStars);
    setTravelPackages(result);
    setIsLoading(false);
  };

  return {
    travelPackages,
    isLoading,
    loadTravelPackages,
  };
};
