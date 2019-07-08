import React from 'react';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Row, Col, Container } from 'react-materialize';

import AboutCard from 'AboutCard';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Container />

        <Row>
          <Col m={6} s={12}>
            <AboutCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
