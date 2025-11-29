import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function ShopMap() {
  // Coordinates for Sanjay Palace, Agra
  const position = [27.20202, 78.00441];
  const phoneNumber = "+919760077223";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div
      className={`max-w-4xl mx-auto my-12 p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl transition-all duration-700 ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in-up">
          Visit Our Store
        </h2>
        <p className="text-gray-600 animate-fade-in-up-delay-1">
          Ad Graphics - Sanjay Palace, Agra
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-fade-in-up-delay-2">
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={position} icon={customIcon}>
              <Popup minWidth={200}>
                <div className="p-2 animate-fade-in">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3 animate-bounce-in">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Ad Graphics
                      </h3>
                      <p className="text-sm text-gray-600">
                        Printing & Design Services
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 animate-fade-in-up">
                    <p className="text-gray-700 flex items-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Sanjay Palace, Civil Lines, Agra
                    </p>
                    <p className="text-gray-700 flex items-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +91 97600 77223
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Open: Mon-Sat 9AM-8PM
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2 animate-fade-in-up-delay-1">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition duration-300 flex items-center justify-center transform hover:-translate-y-0.5 hover:shadow-md"
                      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" , color: 'white'}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div
          className={`p-5 bg-linear-to-r from-indigo-500 to-purple-600 text-white transition-all duration-1000 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg">Ad Graphics</h3>
              <p className="text-indigo-100">Sanjay Palace, Agra</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center animate-pulse-slow">
                <p className="font-bold text-lg">Mon-Fri</p>
                <p className="text-indigo-100">9AM-8PM</p>
              </div>
              <div className="text-center animate-pulse-slow">
                <p className="font-bold text-lg">Sat</p>
                <p className="text-indigo-100">10AM-6PM</p>
              </div>
              <div className="text-center animate-pulse-slow">
                <p className="font-bold text-lg">Sun</p>
                <p className="text-rose-200">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white p-4 rounded-lg shadow flex items-center transform hover:-translate-y-1 transition duration-300">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600 text-sm">
              Shop 123, Sanjay Palace, Agra
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center transform hover:-translate-y-1 transition duration-300">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600 text-sm">+91 97600 77223</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center transform hover:-translate-y-1 transition duration-300">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600 text-[13px]">
              adgraphicsagra007@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
