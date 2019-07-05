import React from 'react';
import ReactDOM from 'react-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import {
  Button,
  Icon,
  Row,
  Col,
  Card,
  Navbar,
  NavItem,
  TextInput,
  Container,
  Section,
  Footer,
  Parallax
} from 'react-materialize';
import IL3 from 'IL3.jpg';
import ilp from 'ilp.jpg';
import ilp2 from 'ilp2.jpg';
import ilp3 from 'ilp3.jpg';
import image1 from 'arif-riyanto-974674-unsplash.jpg';
import image2 from 'chris-ried-512801-unsplash.jpg';

import Home from 'Home';

import firebase from 'firebase';



ReactDOM.render(<Home />, document.getElementById('root'));
