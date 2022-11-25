import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Cart } from "./com/Cart";
import Header from "./com/Header";
import { Home } from "./com/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
