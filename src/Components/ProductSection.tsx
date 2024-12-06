import React from 'react';

type Props = {};

function ProductSection({}: Props) {
  // Array to render 15 square sections
  const squareSections = Array.from({ length: 15 });

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Product Section Header */}
      <p className="text-lg font-bold mb-4">Product Section</p>

      {/* Product Squares Container */}
      <div className="flex overflow-x-auto space-x-6 p-6 scrollbar-hide w-11/12 bg-indigo-400">
        {squareSections.map((_, index) => (
          <div
            className="flex flex-col items-center min-w-[200px] min-h-[200px] sm:min-w-[150px] sm:min-h-[150px] md:min-w-[180px] md:min-h-[180px] bg-red-500 rounded-lg text-white justify-center"
            key={index}
          >
            <p>Square {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
