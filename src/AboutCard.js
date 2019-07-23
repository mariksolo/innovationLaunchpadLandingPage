import React from 'react';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Row, Col, CardPanel } from 'react-materialize';

class AboutCard extends React.Component {
  render() {
    return (
      <CardPanel className="teal">
        <br />

        <span className="white-text">
          <Row>
            <Col>
              <br />
              <br />

              <p className="personName">{this.props.personName}</p>
              <p className="title">{this.props.title}</p>
            </Col>
            <Col>{this.props.imgTag}</Col>

            <Col m={6}>
              <p>{this.props.bio}</p>
            </Col>
          </Row>
        </span>
      </CardPanel>
    );
  }
}

export default AboutCard;
