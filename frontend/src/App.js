import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import UserListPage from "./pages/UserListPage";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart">
                <Route path=":id" element={<CartPage />} />
                <Route path="" element={<CartPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
              <Route path="/admin/userList" element={<UserListPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
