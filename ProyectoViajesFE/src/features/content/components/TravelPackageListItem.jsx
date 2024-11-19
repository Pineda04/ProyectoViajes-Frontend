import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TravelPackageListItem = ({ travelPackage }) => {
  const { name, description, imageUrl, id, averageStars, price } = travelPackage;

  return (
    <div key={id} className="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:h-64 object-cover"
      />
      <div className="p-4 md:p-6">
        <h4 className="text-xl md:text-2xl font-semibold text-yellow-500">{name}</h4>
        <p className="mt-2 md:mt-3 text-gray-300">{description}</p>

        <div className="mt-2 flex items-center text-yellow-400">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={index < Math.round(averageStars) ? "text-yellow-400" : "text-gray-500"} />
          ))}
          <span className="ml-2 text-gray-300">{averageStars.toFixed(1)}</span>
        </div>

        <p className="mt-2 text-lg font-bold text-yellow-400">{price ? `$${price.toFixed(2)}` : 'Consultar precio'}</p>

        <Link
          to={`/travel-packages/travel-package/${id}`}
          className="text-yellow-400 font-bold mt-3 md:mt-4 block hover:text-yellow-300 transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};
