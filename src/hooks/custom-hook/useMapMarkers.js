export const setMarkers = (map) => {
  const beaches = [
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1],
  ];

  const image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new window.google.maps.Size(20, 32),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly',
  };

  beaches.forEach((beach) => {
    const marker = new window.google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });

    marker.addListener('click', () => {
      const markerPosition = marker.getPosition();
      const newZoomLevel = 15;
      map.setCenter(markerPosition);
      map.setZoom(newZoomLevel);
      console.log(`마커 ${beach[0]}이 클릭되었습니다.`);
    });
  });
};
