import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      name: "Home Delivery",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Catering for Events",
      image:
        "https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Online Ordering",
      image:
        "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Custom Meal Plans",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We provide these services to make your life easier 🍽️</p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Landing Page</Link>
      </p>
    </div>
  );
}

export default Services;
