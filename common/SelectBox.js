import React from "react";

function SelectBox({ title, quantity }) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={title}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
      />
      <label
        htmlFor={title}
        className="ml-2 text-sm font-medium text-gray-900"
      >
        <p>
          {title} <span className="font-light text-sm text-gray-500">{`(${quantity})`}</span>
        </p>
      </label>
    </div>
  );
}

export default SelectBox;
