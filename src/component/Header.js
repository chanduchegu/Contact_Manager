import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.heading}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addContact" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  branding: "my apps"
};
// const HeaderStyle = {
//   color: "red",
//   fontSize: 50,
//   backgroundColor: "blue",
//   paddingBottom: 5,
//   borderBlockStyle: "solid",
//   paddingLeft: 5
// };
export default Header;
