import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <span className="heading">ONLINE STREET FOOD PORTAL</span>
      <span className="btn btn--about-us">
        <Link to="/about">About Us</Link>
      </span>
      <span className="btn btn--contact-us">
        <Link to="/contact">Contact Us</Link>
      </span>
    </nav>
  );
}
