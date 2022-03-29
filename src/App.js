import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<Navigation />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
