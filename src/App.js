import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <ProductProvider>
        <Navbar />
        <div className="container mx-auto p-8 bg-gray-50 grid place-items-start grid-rows-3 grid-flow-col gap-4 ">
          <Categories />
          <Swiper />
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
