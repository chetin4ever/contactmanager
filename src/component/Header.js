import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
    const {branding}=props
    return (
        <div>

            {/* inline style */}
            {/* <h1 style={{color:'red',fontSize:'50px'}}>{branding}</h1> */}
            {/* <h1 style={headerStyle}>{branding}</h1> */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
            
        </div>
    )
}
//default props
Header.defaultProps = {
    branding: 'My App',
};
///
Header.propTypes = {
    branding: PropTypes.string.isRequired
    // branding: PropTypes.object.isRequired
};
const headerStyle = {
    color: 'red',
    fontSize:'50px'
}
export default Header;
