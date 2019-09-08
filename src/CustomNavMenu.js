// import React from 'react';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Row, Col, Navbar, NavItem, Container, Section } from 'react-materialize';

import React from 'react';

export default class CustomNavMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          <li>link 1</li>
          <li>link 1</li>
        </ul>
      </div>
    );
  }
}
