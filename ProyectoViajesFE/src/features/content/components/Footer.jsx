export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4 md:mb-6">
          &copy; 2024 TravelExperience. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 md:space-x-6">
          <a
            href="#"
            className="flex items-center text-yellow-500 hover:text-yellow-400 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="flex items-center text-yellow-500 hover:text-yellow-400 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center text-yellow-500 hover:text-yellow-400 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
