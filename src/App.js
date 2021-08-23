import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 h-screen w-screen ">
      <ProductProvider>
        <Router>
          <div className="h-screen w-screen flex flex-col items-center">
            <Navbar />

            <div id="content relative">
              <Switch>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </ProductProvider>
    </div>
  );
}

function Home() {
  return (
    <div className="container rounded-md mx-auto p-8 bg-gray-50 grid place-items-start grid-rows-3 grid-flow-col gap-4 ">
      <Categories />
      <Swiper />
    </div>
  );
}

export default App;
