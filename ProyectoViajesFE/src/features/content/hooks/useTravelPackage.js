import { useState } from "react";
import { getTravelPackageById } from "../../../shared/actions/travelPackages/travelPackages.action";

export const useTravelPackage = () => {
  const [travelPackage, setTravelPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadTravelPackage = async (id) => {
    setIsLoading(true);
    const result = await getTravelPackageById(id);
    if (result) {
      setTravelPackage(result);
    }
    setIsLoading(false);
  };

  return {
    travelPackage,
    isLoading,
    loadTravelPackage,
  };
};
