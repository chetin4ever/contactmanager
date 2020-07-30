import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      {/* inline style */}
      {/* <h1 style={{color:'red',fontSize:'50px'}}>{branding}</h1> */}
      {/* <h1 style={headerStyle}>{branding}</h1> */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {branding}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus"></i> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
//default props
Header.defaultProps = {
  branding: "My App",
};
///
Header.propTypes = {
  branding: PropTypes.string.isRequired,
  // branding: PropTypes.object.isRequired
};
// const headerStyle = {
//     color: 'red',
//     fontSize:'50px'
// }
export default Header;
