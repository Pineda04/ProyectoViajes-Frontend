import { generateId } from "../../../shared/utils";

const TravelPackageItemSkeleton = () => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-xl animate-pulse">
      <div className="w-full h-48 sm:h-64 bg-gray-600"></div>
      <div className="p-4 md:p-6">
        <div className="h-8 bg-gray-600 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-1/3 mb-2"></div>
      </div>
    </div>
  );
};

export const TravelPackageListSkeleton = ({ size = 3 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(size)].map(() => (
        <TravelPackageItemSkeleton key={generateId()} />
      ))}
    </div>
  );
};
