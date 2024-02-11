import { Google_API_Key } from '../../constants/Url';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { setMarkers } from '../../hooks/custom-hook/useMapMarkers';

import { useEffect } from 'react';
import { useMapStore } from '../../store/useMapStore';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 0,
  lng: 0,
};

const GoogleMaps = () => {
  const { isLoaded, setLoaded } = useMapStore();

  const { isLoaded: gMapLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${Google_API_Key}`,
  });

  useEffect(() => {
    if (gMapLoaded) {
      setLoaded(true);
    }
  }, [gMapLoaded, setLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2.8}
      onLoad={(map) => setMarkers(map)}
    />
  ) : (
    <>Something goes wrong!</>
  );
};

export default GoogleMaps;
