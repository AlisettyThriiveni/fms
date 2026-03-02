import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="hero">
            <h1>Food Management System</h1>
            <p>Welcome to Home Page</p>
            <h2>Available Food Items</h2>
            <ul>
                <li>Icecream</li>
                <li>cooldrinks</li>
                <li>donuts</li>
            </ul>
             <p style={{ marginTop: "15px" }}>
                <Link to="/">← Back to Landing Page</Link>
            </p>
        </div>
    );
}
export default Home;
