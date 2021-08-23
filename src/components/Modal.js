import React from "react";

function Modal() {
  return (
    <div className="absolute flex gap-3 top-24 right-2 z-10 bg-green-100 shadow-md p-4 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="font-medium tracking-wide">Sepete Eklendi</h3>
    </div>
  );
}

export default Modal;
