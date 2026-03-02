import { Link } from "react-router-dom";
import "./Landing.css";
function Landing() {
    return (
        <div className="landing-container">
            <h1>Welcome to Food Management System</h1>
            <p>A food management system is
              a comprehensive framework—often software-based—that ensures food safety, compliance, and efficiency from farm to table by controlling hazards, monitoring inventory, and managing sanitation.</p>           
            <div className="small-image-container">
                <img 
                    className="small-image" 
                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80" 
                    alt="Food Management" 
                />
            </div>
            <div className="landing-buttons">
                <Link to="/home"><button>Home</button></Link>
<Link to="/food-items">
  <button>Food Items</button>
</Link>
                <Link to="/order"><button>Order</button></Link>
                <Link to="/services"><button>Services</button></Link>
            </div>
        </div>
    );
}
export default Landing;



