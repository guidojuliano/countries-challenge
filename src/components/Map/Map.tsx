import useCountries from "app/hooks/useCountries";
import { Country } from "app/types/country";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import L, { LatLngBounds, LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FitBounds } from "./FitBounds";
import { CenterMap } from "./CenterMap";
import { CountryModal } from "../CountryModal/CountryModal";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type MapProps = {
  filteredCountries: Country[];
};

const Map = ({ filteredCountries }: MapProps) => {
  const { loading, error } = useCountries();
  const initialRender = useRef(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const positions = filteredCountries.map(
    (country) => [country.latitude, country.longitude] as [number, number]
  );

  const bounds = positions.length > 1 ? new LatLngBounds(positions) : null;
  const centerPosition =
    positions.length === 1 ? positions[0] : bounds?.getCenter();

  useEffect(() => {
    if (loading) return;

    if (error) {
      toast.error(`Error: ${error}`);
      return;
    }

    initialRender.current
      ? (initialRender.current = false)
      : filteredCountries.length === 0 &&
        toast.info("No countries match your search.");
  }, [filteredCountries, loading, error]);

  const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const handleMoreInfo = (country: Country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };

  return (
    <>
      <MapContainer
        center={centerPosition || [0, 0]}
        zoom={3}
        style={{ height: "80vh", width: "100%" }}
        whenReady={() => {
          setMapLoaded(true);
        }}
      >
        <TileLayer url={tileLayerUrl} />
        {filteredCountries &&
          filteredCountries.length > 0 &&
          filteredCountries.map((country) => (
            <Marker
              key={country.code}
              position={[country.latitude, country.longitude]}
            >
              <Popup>
                <h2>
                  {country.name} {country.emoji}
                </h2>
                <p>Capital: {country.capital}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleMoreInfo(country)}
                >
                  Ver más
                </button>
              </Popup>
            </Marker>
          ))}
        {mapLoaded && bounds && <FitBounds bounds={bounds} />}
        {mapLoaded && positions.length === 1 && centerPosition && (
          <CenterMap center={centerPosition} />
        )}
      </MapContainer>

      {showModal && selectedCountry && (
        <CountryModal
          country={selectedCountry}
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Map;
