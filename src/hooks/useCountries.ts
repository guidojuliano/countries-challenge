"use client";
import { useEffect, useState } from "react";
import { fetchCountries } from "../graphql/fetchCountries";
import countriesData from "../../public/countries.json";
import { Country } from "app/types/country";

interface UseCountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const useCountries = () => {
  const [data, setData] = useState<UseCountriesState>({
    countries: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countryFromApi = await fetchCountries();

        //Aca combino los datos de la API y del JSON para obtener la long, lat y mostrar los paises solicitados en el mapa
        const combinedCountries = countriesData.map((countryFromJson) => {
          const countryFromApiData = countryFromApi.find(
            (country: Country) => country.code === countryFromJson["ISO Code"]
          );
          return {
            name: countryFromApiData?.name || countryFromJson.Country,
            code: countryFromApiData?.code || countryFromJson["ISO Code"],
            latitude: countryFromJson.Latitude ?? 0,
            longitude: countryFromJson.Longitude ?? 0,
            emoji: countryFromApiData?.emoji || "",
            capital: countryFromApiData?.capital || "",
            continent: {
              name: countryFromApiData?.continent?.name || "",
            },
            currencies: countryFromApiData?.currencies || [],
            languages: countryFromApiData?.languages || [],
          };
        });
        setData({
          countries: combinedCountries,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          countries: [],
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Ocurrió un error desconocido",
        });
      }
    };
    getCountries();
  }, []);

  const searchCountry = (searchTerm: string) => {
    return data.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.continent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return { ...data, searchCountry };
};

export default useCountries;
