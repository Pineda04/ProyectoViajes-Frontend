import { Link } from "react-router-dom";

export const DestinationListItem = ({ destination }) => {
  return (
    <div key={destination.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition">
      <img
        src={destination.imageUrl || "https://via.placeholder.com/400x300"}
        alt={destination.name}
        className="w-full h-48 sm:h-64 object-cover"
      />
      <div className="p-4 md:p-6">
        <h4 className="text-xl md:text-2xl font-semibold text-yellow-500">
          {destination.name}
        </h4>
        <p className="mt-2 md:mt-3 text-gray-300">
          {destination.description}
        </p>
        <Link
          to={`/destinations/destination/${destination.id}`}
          className="text-yellow-400 font-bold mt-3 md:mt-4 block hover:text-yellow-300 transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};