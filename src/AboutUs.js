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

import firebase from 'firebase';


class AboutUs extends React.Component {
    
    render() {
      return (
        <div>
            <p>hello, about us</p>
            <Container>
              <Section>
                <Row>
                  <Col m={4}>
                    <div>
                      <div className="center">
                        <Icon medium className="textIcon">
                          {' '}
                          web
                        </Icon>
                        <h5 className="columnHeader">Entrepreneurship</h5>
                      </div>
                      <p className="textColumn light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
                        efficitur velit. Proin mattis neque a enim sollicitudin, id tincidunt eros
                        faucibus. Curabitur vitae tellus sollicitudin, venenatis massa sed, blandit
                        mauris. Cras lacinia id ante ac ultrices. Sed ac ex iaculis, convallis turpis
                        scelerisque, ullamcorper justo.
                      </p>
                    </div>
                  </Col>
  
                  <Col m={4}>
                    <div>
                      <div className="center">
                        <Icon medium className="textIcon">
                          code
                        </Icon>
                        <h5>Technology</h5>
                      </div>
                      <p className="textColumn light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
                        efficitur velit. Proin mattis neque a enim sollicitudin, id tincidunt eros
                        faucibus. Curabitur vitae tellus sollicitudin, venenatis massa sed, blandit
                        mauris. Cras lacinia id ante ac ultrices. Sed ac ex iaculis, convallis turpis
                        scelerisque, ullamcorper justo.
                      </p>
                    </div>
                  </Col>
  
                  <Col m={4}>
                    <div>
                      <div className="center">
                        <Icon medium className="textIcon">
                          next_week
                        </Icon>
                        <h5>Opportunities</h5>
                      </div>
  
                      <p className="textColumn light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
                        efficitur velit. Proin mattis neque a enim sollicitudin, id tincidunt eros
                        faucibus. Curabitur vitae tellus sollicitudin, venenatis massa sed, blandit
                        mauris. Cras lacinia i ante ac ultrices. Sed ac ex iaculis, convallis turpis
                        scelerisque, ullamcorper justo.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Section>
            </Container>
        </div>
      );
    }
  }

  export default AboutUs;