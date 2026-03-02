import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Order from "../Order/Order";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/order" element={<Order />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default App;
