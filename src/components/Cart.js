import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";

function Cart() {
  const { cart, setCart } = useProduct();
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState(true);

  const changeAmount = (item, title) => {
    const currentItem = cart.find(
      (product) => product.productId === item.productId
    );
    const cartWithoutCurrent = cart.filter(
      (product) => product.productId !== item.productId
    );

    if (title === "minus") {
      currentItem.amount -= 1;
    }
    if (title === "plus") {
      currentItem.amount += 1;
    }

    if (currentItem.amount === 0) {
      setCart([...cartWithoutCurrent]);
    } else {
      setCart([...cartWithoutCurrent, currentItem]);
    }
  };

  useEffect(() => {
    let sum = cart.reduce((total, currentVal) => {
      return total + currentVal.price * currentVal.amount;
    }, 0);

    setPrice(sum);
  }, [cart]);

  return cart.length ? (
    <div className="p-8 relative h-full flex flex-col sm:flex-row items-start justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {cart.map((item, key) => (
          <div className="card" key={key}>
            <a href="#1">
              <div className="relative">
                <img
                  className="w-full rounded-md transform motion-safe:hover:scale-105 duration-500"
                  src={item.image}
                  alt=""
                />
              </div>
            </a>
            <div className="grid gap-4 w-full">
              <p className="text-sm truncate font-medium mt-2"> {item.name} </p>
              <span className="relative text-xs font-bold bg-gray-200 p-2 rounded-md">
                {" "}
                <aside className="absolute -top-1 -right-1 bg-opacity-20 w-full h-full bg-red-300 rounded-md"></aside>
                <aside className="absolute -top-1 -left-1 bg-opacity-20 w-full h-full bg-blue-200 rounded-md"></aside>
                <span className="flex">
                  {" "}
                  <p>{item.priceText}</p>
                  <p className="line-through ml-3 text-black text-opacity-50">
                    {" "}
                    {item.oldPriceText}{" "}
                  </p>{" "}
                </span>{" "}
              </span>
              <span className="flex items-center justify-around rounded-lg bg-indigo-600 text-white p-2">
                <button
                  onClick={() => changeAmount(item, "minus")}
                  className="hover:scale-105 active:scale-95"
                >
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
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <p> {item.amount} </p>
                <button
                  onClick={() => changeAmount(item, "plus")}
                  className="hover:scale-105 active:scale-95"
                >
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="totalChargeLg mt-5 py-2 rounded-lg bg-gray-50 sm:ml-3 sm:mt-0">
        {" "}
        <div className="px-8">
          <h3 className="font-medium text-sm w-40 text-gray-400">
            ÖDENECEK TUTAR
          </h3>{" "}
          <p className="text-2xl my-2 font-medium text-gray-800 tracking-wider">
            {" "}
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}{" "}
            <span className="text-base">TL</span>{" "}
          </p>
          <span className="bg-indigo-500 p-2 text-center font-medium text-white rounded-lg block">
            <a href="#">Alışverişi tamamla</a>
          </span>
        </div>
        <div className="bg-purple-50 w-full my-4">
          <p className="text-purple-900 text-xs p-5">
            Sepetinizdeki ürünleri 36 aya varan vade seçenekleri ile Alışveriş
            Kredisi kullanarak satın alabilirsiniz.
          </p>
        </div>
        <div className="px-6">
          <span className="flex items-center justify-between">
            <p className="font-medium text-gray-500">Kargo</p>
            <p className="text-lg font-medium text-gray-700">
              12.99 <span className="text-base">TL</span>
            </p>
          </span>
          <span className="flex mt-2 items-center justify-between">
            <p className="font-medium text-sm text-gray-500">Ürünler</p>
            <p className="text-sm font-medium text-gray-500">
              {(price + 12.99).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{" "}
              <span className="text-xs">TL</span>
            </p>
          </span>
        </div>
        <button
          onClick={() => setCondition(!condition)}
          className={`${
            condition ? "flex" : "hidden"
          } bg-red-200 h-18 text-red-900 font-medium p-2 rounded-lg mx-auto my-5 w-2/3  items-center`}
        >
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
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
          <p className="ml-1 text-left">Hediye çeki kullan</p>
        </button>
        <div
          className={`${condition ? "hidden" : "flex"} relative items-center`}
        >
          <input
            type="text"
            className="bg-red-100 text-red-900 active:outline-none focus:outline-none font-medium p-2 rounded-lg mx-auto my-5 w-2/3 flex items-center"
          />
          <button
            onClick={() => setCondition(!condition)}
            className="absolute  flex items-center justify-center right-8 rounded-r-lg bg-blue-200 h-1/2 w-8"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p className="bg-indigo-100 p-8 text-2xl font-medium w-screen">
      Sepetiniz Boş
    </p>
  );
}

export default Cart;
