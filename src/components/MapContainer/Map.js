import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Map({ properties, setActiveProperty, activeProperty }) {
  const [map, setMap] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? "key",
  });

  const center = useMemo(() => ({ lat: -31.5374719, lng: -68.5216905 }), []);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      properties?.map((property) => {
        bounds.extend({
          lat: property.locationLat,
          lng: property.locationLng,
        });
      });
      map.fitBounds(bounds);
    }
  }, [map, properties]);

  const handleMarkerClick = (id) => {
    if (id === activeProperty) {
      return;
    }
    setActiveProperty(id);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={() => setActiveProperty("")}
    >
      {properties?.map(({ id, locationLat, locationLng, type }) => (
        <MarkerF
          key={id}
          position={{ lat: locationLat, lng: locationLng }}
          icon={{
            url: `${
              type.name === "Casa"
                ? "https://www.svgrepo.com/show/5123/house.svg"
                : "https://www.svgrepo.com/show/42498/building.svg"
            } `,
            scaledSize: {
              width: activeProperty === id ? 35 : 22,
              height: activeProperty === id ? 35 : 22,
            },
          }}
          onClick={() => handleMarkerClick(id)}
        />
      ))}
    </GoogleMap>
  );
}
