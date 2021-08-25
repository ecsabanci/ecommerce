import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 h-screen w-screen ">
      <ProductProvider>
        <Router>
          <div className="h-screen w-screen flex flex-col items-center">
            <div id="content relative">
              <Switch>
                <Route path="/cart" component={CartDetails}></Route>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={Login}></Route>
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
    <div className="h-screen w-screen flex flex-col items-center">
      <Navbar />

      <div className="container rounded-md mx-auto p-8 bg-gray-50 grid place-items-start grid-rows-3 grid-flow-col gap-4 ">
        <Categories />
        <Swiper />
      </div>
    </div>
  );
}

function CartDetails() {
  return (
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
