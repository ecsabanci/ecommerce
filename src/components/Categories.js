import React from "react";
import { useProduct } from "../context/ProductContext";

function Categories() {
  const { category, currentCategory, setCurrentCategory } = useProduct();

  const onClick = (e) => {
    setCurrentCategory(e.target.id);
  };

  console.log(category);

  return (
    <div className="row-span-3 col-span-3 sm:col-span-5 h-60 ">
      <ul className="grid gap-4">
        {category.userCategories.map((item, index) => (
          <button
            onClick={(e) => onClick(e)}
            key={index}
            id={item}
            className={`w-full text-left p-1 ${
              currentCategory === item
                ? "bg-blue-200  text-blue-500  border-l-4 rounded-r-md border-blue-600"
                : ""
            }`}
          >
            {" "}
            {item.includes(">") ? item.split(">")[1] : item}{" "}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
