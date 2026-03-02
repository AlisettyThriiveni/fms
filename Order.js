import { Link } from "react-router-dom";
import "./Order.css";

function Order() {
  const handleLogin = () => {
    alert("Order successful!");
  };

  return (
    <div className="container">
      {/* Order Image */}
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=60"
        alt="Food Order"
        className="order-image"
      />

      <h2>HERE YOU CAN ORDER YOUR ITEM</h2>

      <input type="text" placeholder="Enter Your Item" />
      <input type="number" placeholder="Amount" />

      <Link to="/">
        <button onClick={handleLogin}>Order</button>
      </Link>

      <p style={{ marginTop: "15px" }}>
        <Link to="/">← Back to Landing Page</Link>
      </p>
    </div>
  );
}

export default Order;
