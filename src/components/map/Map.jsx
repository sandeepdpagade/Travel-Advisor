import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  const position = [12.8068, 77.6948]; // Latitude and Longitude for a location (London)

  return (
    <>
      <div className="h-[90vh]">
        <MapContainer className="h-full w-full" center={position} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
