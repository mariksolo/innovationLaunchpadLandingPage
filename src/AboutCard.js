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

              <p className="personName">Mark Solomonik</p>
              <p className="title">Vice President</p>
            </Col>
            <Col>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                width="200"
              />
            </Col>

            <Col m={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
          </Row>
        </span>
      </CardPanel>
    );
  }
}

export default AboutCard;
