import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Switch>

      <Footer />
    </Router>
  );
}