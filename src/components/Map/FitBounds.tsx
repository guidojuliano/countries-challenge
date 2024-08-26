import { LatLngBounds } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type FitBoundsProps = {
  bounds?: LatLngBounds;
};

export const FitBounds = ({ bounds }: FitBoundsProps) => {
  const map = useMap();

  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);

  return null;
};
