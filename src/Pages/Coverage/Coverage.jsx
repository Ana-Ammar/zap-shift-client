import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [centers, setCenters] = useState([]);
  const mapRef = useRef(null)

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setCenters(data));
  }, []);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const center = centers.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );

    if(center) {
        const coOrd = [center.latitude, center.longitude]
        mapRef.current.flyTo(coOrd, 14)
    }
  };

  return (
    <div className="w-full bg-base-100 rounded-3xl my-10 py-10">
      <div className="w-10/12 mx-auto">
        <h1 className="font-extrabold text-5xl py-10">
          We are available in 64 districts
        </h1>

        <div className="relative">
          <form
          onSubmit={handleSearchBtn}
          >
            <label className="input rounded-full border-0 bg-[#CBD5E130]">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="location"
                placeholder="Search"
              />
              <button 
               className="btn btn-primary text-black rounded-full absolute left-61 z-20">
              Search
            </button>
            </label>
          </form>
        </div>

        <div className="w-full border-t border-black/10 mt-10">
          <h2 className="font-bold text-3xl my-10">
            We deliver almost all over Bangladesh
          </h2>
          <MapContainer
            center={[23.8103, 90.4125]}
            zoom={9}
            className="h-[400px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {centers.map((center, ind) => (
              <Marker key={ind} position={[center.latitude, center.longitude]}>
                <Popup className="text-center">
                  <strong>{center.district}</strong> <br />
                  <strong>Coverage Area:</strong>{" "}
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
