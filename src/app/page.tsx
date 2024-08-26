"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { SearchBar } from "app/components/SearchBar/SearchBar";
import useCountries from "app/hooks/useCountries";
import { Spinner } from "app/components/common/Spinner";

export default function Home() {
  const { countries } = useCountries();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const Map = useMemo(
    () =>
      dynamic(() => import("app/components/Map/Map"), {
        loading: () => <Spinner />,
        ssr: false,
      }),
    []
  );

  return (
    <main>
      <SearchBar setFilteredCountries={setFilteredCountries} />
      <div id="map-container">
        <Map filteredCountries={filteredCountries} />
      </div>
    </main>
  );
}
