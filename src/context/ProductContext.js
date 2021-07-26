import { createContext, useState, useContext } from "react";
import product from "../products.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [category, setCategory] = useState(product.responses[0][0]["params"]);

  const [currentCategory, setCurrentCategory] = useState("Size Özel");

  const values = {
    category,
    setCategory,
    currentCategory,
    setCurrentCategory,
    cart,
    setCart,
  };

  return (
    <ProductContext.Provider value={values}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
