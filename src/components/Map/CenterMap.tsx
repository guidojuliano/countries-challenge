import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type CenterMapProps = {
  center: LatLngExpression;
};

export const CenterMap = ({ center }: CenterMapProps) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 5);
    }
  }, [center, map]);

  return null;
};
