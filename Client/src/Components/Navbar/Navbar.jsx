import { useState } from "react";
import { icons } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <img src={icons.plainlogo} alt="Parmpara Lawns" className="logo" />
          {/* <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button> */}
        </div>

        <div className={`menu-list ${open ? "active" : ""}`}>
          <ul className="menu">
            <li>
              Home
              <ul>
                <li>Overview</li>
                <li>Highlights</li>
              </ul>
            </li>

            <li>
              About Us
              <ul>
                <li>Our Story</li>
                <li>Why Choose Parmpara</li>
                <li>Venue Capacity And Features</li>
              </ul>
            </li>

            <li>
              Venues
              <ul>
                <li>Open Lawns (Big Events)</li>
                <li>Banquet / Rooms</li>
                <li>D-Cafe</li>
              </ul>
            </li>

            <li>
              Menu
              <ul>
                <li>D-Cafe Menu</li>
                <li>Party / Function Menu</li>
                <li>Wedding Menu</li>
              </ul>
            </li>

            <li>
              Gallery
              <ul>
                <li>Lawns And Decoration</li>
                <li>Events And Weddings</li>
                <li>D-Cafe</li>
              </ul>
            </li>

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

            <li>
              Services
              <ul>
                <li>Catering</li>
                <li>Decoration</li>
                <li>Lighting And Sound</li>
                <li>Parking And Security</li>
              </ul>
            </li>

            <li>Location</li>
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
    </>
  );
};

export default Navbar;
