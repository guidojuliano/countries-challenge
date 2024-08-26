"use client";
import { FormEvent } from "react";
import { useState, Dispatch } from "react";
import useCountries from "app/hooks/useCountries";
import { Country } from "app/types/country";

type SearchBarProps = {
  setFilteredCountries: Dispatch<React.SetStateAction<Country[]>>;
};

export const SearchBar = ({ setFilteredCountries }: SearchBarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchCountry } = useCountries();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "search-input"
    ) as HTMLInputElement;
    const filtered = searchCountry(input.value);
    setFilteredCountries(filtered);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-black dark:text-white"
        >
          <svg
            className="h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4.5 0 32 32"
            fill="currentColor"
            aria-label="Challenge Logo"
          >
            <path d="M3.152 14.163c0 5.504 4.461 9.965 9.965 9.965 5.506 0 9.967-4.461 9.967-9.965s-4.461-9.966-9.967-9.966c-5.503 0-9.965 4.461-9.965 9.966zM13.117 5.246c4.917 0 8.918 4 8.918 8.917s-4 8.916-8.918 8.916c-4.916 0-8.916-4-8.916-8.916s3.999-8.917 8.916-8.917z" />
            <path d="M19.059 25.862l0.505 1.020 0.941-0.465-1.426-2.88-0.94 0.466 0.455 0.917c-1.687 0.86-3.566 1.315-5.476 1.315-6.655 0-12.068-5.416-12.068-12.073 0-4.535 2.569-8.695 6.582-10.749l0.488 0.984 0.939-0.466-1.426-2.879-0.939 0.466 0.473 0.955c-4.368 2.231-7.166 6.755-7.166 11.689 0 7.060 5.603 12.832 12.593 13.109v1.596c-2.422 0.094-4.678 0.841-6.591 2.079h2.194c1.502-0.672 3.165-1.049 4.914-1.049 1.719 0 3.384 0.373 4.903 1.049h2.204c-1.937-1.248-4.201-1.981-6.575-2.079v-1.6c1.889-0.076 3.739-0.554 5.416-1.406z" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Countries
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            aria-controls="navbar-search"
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <form onSubmit={handleSearch}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                name="search-input"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search countries for name, code or region"
                title="Search countries for name, code or region"
              />
            </form>
          </div>
        </div>
        {isSearchOpen && (
          <div className="w-full md:hidden mt-3" id="navbar-search">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search-input"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search countries for name, code or region"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};
