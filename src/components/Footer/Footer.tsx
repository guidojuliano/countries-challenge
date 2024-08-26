export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.guidojuliano.site/"
            target="_blank"
            className="hover:underline"
          >
            Guido Juliano Ubaldi
          </a>
        </span>
      </div>
    </footer>
  );
};
