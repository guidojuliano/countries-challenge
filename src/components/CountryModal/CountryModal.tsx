import { Country } from "app/types/country";

type CountryModalProps = {
  country: Country;
  onClose: () => void;
  show: boolean;
};

export const CountryModal = ({ country, onClose, show }: CountryModalProps) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden={!show}
      style={{ zIndex: 1000 }}
      className={`fixed backdrop-blur-sm top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {country.name} {country.emoji}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Capital: {country.capital} <br />
              Continent: {country.continent.name} <br />
              Currencies: {country.currencies.join(", ")} <br />
              Languages: {country.languages.map((l) => l.name).join(", ")}{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
