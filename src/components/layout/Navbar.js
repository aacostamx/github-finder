import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, tittle }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {tittle}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  tittle: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
