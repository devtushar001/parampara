import { useState } from "react";
import { icons } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="conflict">
        <nav className="navbar">
          <div className="navbar-header">
            <img src={icons.plainlogo} alt="Parmpara Lawns" className="logo" />
          </div>

          <div className={`menu-list ${open ? "active" : ""}`}>
            <ul className="menu">
              <Link to="/" className="nav-link" >
                <li>
                  Home
                  <ul>
                    <li>Overview</li>
                    <li>Highlights</li>
                  </ul>
                </li>
              </Link>
              <Link to="/about-us" className="nav-link" >
                <li>
                  About Us
                  <ul>
                    <li>Our Story</li>
                    <li>Why Choose Parmpara</li>
                    <li>Venue Capacity And Features</li>
                  </ul>
                </li>
              </Link>
              <Link to="/venues" className="nav-link" >
                <li>
                  Venues
                  <ul>
                    <li>Open Lawns (Big Events)</li>
                    <li>Banquet / Rooms</li>
                    <li>D-Cafe</li>
                  </ul>
                </li>
              </Link>
              <Link to="/menu" className="nav-link" >
                <li>
                  Menu
                  <ul>
                    <li>D-Cafe Menu</li>
                    <li>Party / Function Menu</li>
                    <li>Wedding Menu</li>
                  </ul>
                </li>
              </Link>
              <Link to="/gallery" className="nav-link" >
                <li>
                  Gallery
                  <ul>
                    <li>Lawns And Decoration</li>
                    <li>Events And Weddings</li>
                    <li>D-Cafe</li>
                  </ul>
                </li>
              </Link>
              <Link to="/events" className="nav-link" >
                <li>
                  Events
                  <ul>
                    <li>Weddings</li>
                    <li>Receptions</li>
                    <li>Engagements</li>
                    <li>Birthdays And Anniversaries</li>
                    <li>Corporate Events</li>
                  </ul>
                </li>
              </Link>
              <Link to="/services" className="nav-link" >
                <li>
                  Services
                  <ul>
                    <li>Catering</li>
                    <li>Decoration</li>
                    <li>Lighting And Sound</li>
                    <li>Parking And Security</li>
                  </ul>
                </li>
              </Link>
              <Link to="/location" className="nav-link">
                <li>Location</li>
              </Link>
              <li>Contact Us</li>
            </ul>
            <div className="book-button">
              <input type="text" placeholder="Event Type" />
              <input type="date" />
              <input type="number" placeholder="Guest Count" />
              <button>Book Now</button>
            </div>
          </div>
          <div className="arrow-icon">
            <img onClick={() => setOpen(!open)} src={icons.arrowicon} alt="" />
          </div>
        </nav>
      </div>
      <div className="margin">
      </div>
    </>
  );
};

export default Navbar;
