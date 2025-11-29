// PrintingServices.jsx
import React, { useState } from 'react';
import Modal from './Modal';

const PrintingServices = () => {
  const [activeCategory, setActiveCategory] = useState('materials');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const materials = [
    {
      id: 'fl',
      name: 'FL Printing',
      description: '🔥 High Durability \n🌈 Vibrant Colors That Stand Out \n 💰 Budget-Friendly Branding \n 🛠 Easy to Install Anywhere',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'uv',
      name: 'UV Printing',
      description: "✨ Luxury finish with ultra-crisp details\n 🔥 Instant drying — no smudges, no quality loss \n💎 Works on glass, metal, acrylic, wood & more \n🛡 Weather-proof and long-lasting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'star',
      name: 'Star Printing',
      description: '🌟 Metallic or glitter texture that grabs attention \n🎨 Modern, stylish, and luxurious look \n⚡ Perfect for premium marketing events \n🧲 Attracts viewers instantly',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'backlight',
      name: 'Backlit Printing',
      description: '💡 Glows brilliantly when lit from behind \n🌙 Perfect visibility even in dark locations \n🎨 High color accuracy & clarity \n🏬 Ideal for indoor + outdoor branding',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'vinyl',
      name: 'Vinyl Printing',
      description: '🛡 Weather-resistant for years \n🚗 Perfect for vehicles, boards & large signage \n💨 Doesn’t fade in sunlight \n💪 Strong adhesive, long-lasting results',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'sticker',
      name: 'Sticker Printing',
      description: '✨ Custom shapes, sizes & finishes \n🏷 Perfect for labeling products \n📦 Enhances packaging branding \n🎒 Fun, practical, and highly engaging',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: 'from-rose-500 to-red-500'
    }
  ];

  const workTypes = [
    {
      id: 'visiting-cards',
      name: 'Visiting Cards',
      description: 'Professional business cards with premium finishes. Available in various materials (paper, metal, plastic) and special finishes (spot UV, embossing, foil stamping) to make a lasting impression.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'pamphlets',
      name: 'Pamphlets',
      description: 'Informative brochures for marketing campaigns. Designed to showcase products, services, or events with compelling visuals and concise information in a portable format.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'posters',
      name: 'Posters',
      description: 'Eye-catching promotional posters for events. Perfect for advertising concerts, exhibitions, sales, and other events with bold visuals and clear messaging.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'vinyl-banners',
      name: 'Vinyl Banners',
      description: 'Durable outdoor advertising banners. Weather-resistant and available in various sizes for storefronts, trade shows, and events that require maximum visibility.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'stickers',
      name: 'Stickers',
      description: 'Custom branded stickers for products and promotions. Available in various shapes, sizes, and finishes to enhance product packaging or create memorable promotional items.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: 'from-rose-500 to-red-500'
    },
    {
      id: 'one-way-vision',
      name: 'One Way Vision',
      description: '👀 See-through from inside — full print outside \n☀️ Reduces heat & sunlight \n🏪 Perfect for storefront branding \n💼 Professional & neat appearance',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'bill-books',
      name: 'Bill Books',
      description: '🧾 Duplicate/triplicate options \n🏢 Sharp printing with business branding \n📚 Strong binding & long life \n🖋 Perfect for corporate professionalism',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'doctors-pad',
      name: "Doctor's Pad",
      description: '🖨 Sharp, clean printing \n🧑‍⚕️ Custom branding with clinic details \n📄 Premium quality, smooth paper \n📘 Strong, reliable binding',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-teal-500 to-green-500'
    }
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Materials & Work Types</h2>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Discover the wide range of printing materials and services we offer for all your business needs
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setActiveCategory('materials')}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
              activeCategory === 'materials'
                ? 'bg-white text-indigo-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Materials
          </button>
          <button
            onClick={() => setActiveCategory('work-types')}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
              activeCategory === 'work-types'
                ? 'bg-white text-indigo-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Work Types
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeCategory === 'materials' ? materials : workTypes).map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <div className={`h-2 bg-linear-to-r ${item.color}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-linear-to-r ${item.color} text-white mr-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-16 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-indigo-100 mb-6 text-lg">
            Combine different materials and work types to create unique solutions for your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
              Request a Quote
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div> */}

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen} 
        item={selectedItem} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default PrintingServices;