import React, { useState } from 'react';

const ToggleSwitch = ({ option1, option2, onChange }) => {
  const [isFirst, setIsFirst] = useState(true);

  const handleToggle = (first) => {
    setIsFirst(first);
    onChange?.(first ? option1.value : option2.value);
  };

  return (
    <div className="relative flex bg-gray-100 rounded-2xl p-1.5 shadow-inner">
      {/* Animated Background */}
      <div
        className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg transition-all duration-500 ease-out ${
          isFirst ? 'left-1.5' : 'left-[calc(50%+3px)]'
        }`}
      />
      
      {/* Option 1 */}
      <button
        onClick={() => handleToggle(true)}
        className={`relative z-10 flex items-center justify-center gap-2 w-36 py-3 rounded-xl font-semibold transition-all duration-300 ${
          isFirst ? 'text-white' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <span>{option1.icon}</span>
        <span>{option1.label}</span>
      </button>
      
      {/* Option 2 */}
      <button
        onClick={() => handleToggle(false)}
        className={`relative z-10 flex items-center justify-center gap-2 w-36 py-3 rounded-xl font-semibold transition-all duration-300 ${
          !isFirst ? 'text-white' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <span>{option2.icon}</span>
        <span>{option2.label}</span>
      </button>
    </div>
  );
};

export default ToggleSwitch;