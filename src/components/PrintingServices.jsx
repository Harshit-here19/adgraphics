import React, { useState } from "react";
import Modal from "./Modal";
import ToggleSwitch from "./ToggleSwitch";

import { materials, workTypes } from "../data/printingData";

const PrintingServices = () => {
  const [activeCategory, setActiveCategory] = useState("materials");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} item={selectedItem} onClose={closeModal} />
      <div
        className={`${
          isModalOpen ? "blur-sm" : ""
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Materials & Work Types
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Discover the wide range of printing materials and services we
              offer for all your business needs
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <ToggleSwitch
                option1={{ value: "materials", label: "Materials", icon: "📦" }}
                option2={{
                  value: "work-types",
                  label: "Work Types",
                  icon: "🛠️",
                }}
                onChange={(value) => setActiveCategory(value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "materials" ? materials : workTypes).map(
              (item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <img
                    src={
                      item.image ||
                      `https://picsum.photos/400/400?random=${item.id}`
                    }
                    alt={item.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    {/* Glass Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`p-3 rounded-xl bg-linear-to-r ${item.color} text-white shadow-lg`}
                        >
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            Click to explore
                          </p>
                        </div>
                      </div>

                      {/* Progress/Rating indicator */}
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-linear-to-r ${item.color} rounded-full`}
                            style={{ width: "85%" }}
                          />
                        </div>
                        <span className="text-white/80 text-sm font-medium">
                          Popular
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Ring */}
                  <div
                    className={`absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-300`}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintingServices;
