import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  // Custom hook to handle map events
  const MapEventHandler = () => {
    const map = useMapEvent({
      // Update coordinates when the map is moved
      moveend: () => {
        const newCenter = map.getCenter();
        setCoordinates({ lat: newCenter.lat, lng: newCenter.lng });
      },

      // Update bounds whenever the map is zoomed or moved
      zoomend: () => {
        const newBounds = map.getBounds();
        setBounds(newBounds);
      },
    });

    return null;
  };

  // Fallback position if coordinates are not yet available
  const position =
    coordinates.lat && coordinates.lng
      ? [coordinates.lat, coordinates.lng]
      : [12.8068, 77.6948];

  return (
    <div className="h-[90vh]">
      <MapContainer className="h-full w-full" center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Current Position</Popup>
        </Marker>
        <MapEventHandler />
      </MapContainer>
    </div>
  );
};

export default Map;
