import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./App.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
              </>
            }
          >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products/:id" element={<Products />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/order" element={<Order />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={ <PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
