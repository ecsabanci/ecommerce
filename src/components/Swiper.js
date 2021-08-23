import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { useProduct } from "../context/ProductContext";
import Modal from "./Modal";
import { useState } from "react";

SwiperCore.use([Pagination]);

export default function App() {
  const { category, currentCategory, cart, setCart } = useProduct();

  const [isAdded, setIsAdded] = useState(false);

  const showModal = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  const addToCart = (item) => {
    const checkCart = cart.find(
      (product) => product.productId === item.productId
    );

    if (checkCart) {
      checkCart.amount += 1;
      setCart([
        ...cart.filter((product) => product.productId !== item.productId),
        checkCart,
      ]);
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <>
      {isAdded ? <Modal /> : ""}
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1140: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper w-full h-full row-span-6 col-span-11  md:col-span-4 sm:col-span-5"
      >
        {category["recommendedProducts"][currentCategory].map((item) => (
          <SwiperSlide
            key={item.productId}
            className="shadow-inner shadow-lg p-4 bg-white rounded-md grid place-items-start p-3"
          >
            <a href="#1">
              <img
                className="w-full rounded-md transform motion-safe:hover:scale-105 duration-500"
                src={item.image}
                alt=""
              />
              {item.oldPriceText && (
                <aside className="absolute -top-1 right-0 w-12 h-8 bg-red-600 font-medium text-white grid place-items-center">
                  {Math.round(
                    (item.oldPrice - item.price) / (item.oldPrice / 100)
                  )}{" "}
                  %
                </aside>
              )}
            </a>
            <div className="grid gap-4 w-full">
              <p className="text-sm truncate font-medium mt-2"> {item.name} </p>
              <span className="relative text-2xl font-bold bg-gray-200 p-2 rounded-md">
                {" "}
                <aside className="absolute -top-1 -right-1 bg-opacity-20 w-full h-full bg-red-200 rounded-md"></aside>
                <aside className="absolute -top-1 -left-1 bg-opacity-20 w-full h-full bg-blue-200 rounded-md"></aside>
                <span>
                  {" "}
                  <p>{item.priceText}</p>
                  <p className="line-through text-black text-opacity-50">
                    {" "}
                    {item.oldPriceText}{" "}
                  </p>{" "}
                </span>{" "}
              </span>
              <aside>
                {" "}
                {item.params.shippingFee && (
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="rgba(4,120,87)"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <p className="ml-2">Ücretsiz Kargo</p>
                  </span>
                )}{" "}
              </aside>
              <button
                onClick={() => [addToCart(item), showModal()]}
                className="bg-blue-500 focus:bg-blue-600 text-white p-2 rounded-md"
              >
                Sepete Ekle
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
