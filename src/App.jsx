import { Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import OrdersPage from "./pages/OrdersPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/address" component={AddressPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/orders" component={OrdersPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </PageContent>

      <Footer />
    </div>
  );
}