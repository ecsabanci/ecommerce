import React from "react";
import { useProduct } from "../context/ProductContext";

function Navbar() {
  const { cart } = useProduct();

  return (
    <div className="container p-5 mx-auto flex items-center justify-between">
      <div className="logo">
        <h1 className="text-4xl font-bold text-yellow-500">hepsiburda</h1>
      </div>
      <div className="search border-2 border-gray-400 rounded-sm relative flex items-center">
        <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#919191"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="p-2 rounded-sm pl-8 w-72 outline-none"
          placeholder="Ürün, kategori veya marka ara"
        />
        <button className="bg-gray-400 text-white p-2 rounded-r-sm font-medium">
          ARA
        </button>
      </div>
      <div className="links">
        <ul className="flex">
          <li className="flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="ml-2">
              Konum
              <small className="flex items-center text-yellow-600">
                Konum Seç{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>{" "}
              </small>
            </span>
          </li>
          <li className="flex items-center border-2 border-gray-400 px-3 py-1 rounded-md ml-6 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="ml-2 flex flex-col">
              <p className="font-medium">Hesabım</p>{" "}
              <small>Emre Çağrı...</small>{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#919191"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="flex items-center border-2 border-gray-400 px-3 py-1 rounded-md bg-gray-400 text-white">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute w-6 h-6 font-medium text-center align-middle -top-2 -right-1 bg-gray-50 text-gray-400 rounded-full">
                {cart.length}
              </span>
            </span>
            <p className="font-medium ml-2">Sepetim</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
