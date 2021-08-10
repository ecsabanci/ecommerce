import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 h-screen">
      <ProductProvider>
        <Router>
          <div>
            <Navbar />

            <div id="content">
              <Switch>
                {/* <Route path="/">
              <div className="container mx-auto p-8 bg-gray-50 grid place-items-start grid-rows-3 grid-flow-col gap-4 ">
                <Categories />
                <Swiper />
              </div>
            </Route> */}

                <Route path="/cart" component={Cart}></Route>
                <Route path="/" component={Home}></Route>

                {/* <Link to="/cart">CART</Link>
        <Link to="/">MAIN</Link> */}
                {/* <div className="container mx-auto p-8 bg-gray-50 grid place-items-start grid-rows-3 grid-flow-col gap-4 "> */}

                {/* </div> */}
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
