import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    tittle: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    tittle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.tittle}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
