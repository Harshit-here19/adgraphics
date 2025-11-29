// Modal.jsx
import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay content animation slightly after backdrop
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => {
          setIsContentVisible(true);
        }, 50);
      }, 10);
      
      return () => clearTimeout(timer);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsContentVisible(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 150);
    }
  }, [isOpen]);

  if (!item) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${
          isContentVisible 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-3 bg-linear-to-r ${item.color}`}></div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className={`p-4 rounded-xl bg-linear-to-r ${item.color} text-white mr-5`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex justify-between items-center">
            
            
            <button 
              className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              onClick={onClose}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;