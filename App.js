import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import FoodItems from "./FoodItems/FoodItems";
import Services from "./Services/Services";
import Order from "./Order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
<Route path="/food-items" element={<FoodItems />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
