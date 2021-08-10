import React from "react";
import { useProduct } from "../context/ProductContext";

function Cart() {
  const { cart, setCart } = useProduct();

  console.log(cart);

  return (
    <div className="bg-red-500">
      <ul>
        {cart.map((product, index) => (
          <li key={index}> {product.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
