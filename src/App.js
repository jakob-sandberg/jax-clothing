import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/checkout/CheckOut";
import HomePage from "./routes/home/HomePage";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
