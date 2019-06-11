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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {};
  render() {
    return (
      <div>
        <Navbar brand={<a />} alignLinks="right">
          <NavItem href="">Getting started</NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar>

        <br />
        {/* <Parallax image={<img src={image1} />} options={10000}/> */}
        <Container>
          <Section>
            <Row>
              <Col l={5} offset="l" className="homeForm">
                <Row>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3 className="mainText">
                    Try the world's #1 CRM built for small business growth.
                  </h3>
                </Row>
                <Row>
                  <h5 className="secondaryText">
                    Get Salesforce essentials, our all-in-one sales and service solution for just
                    $25 a month.
                  </h5>
                </Row>
                <Row>
                  <TextInput
                    label="Full Name"
                    id="name"
                    type="front"
                    onChange={this.handleChange}
                  />

                  <TextInput
                    email
                    label="Email"
                    id="email"
                    error="Invalid Email"
                    onChange={this.handleChange}
                    type="front"
                  />
                </Row>
                <Row>
                  <Button waves="light" onClick={this.handleSubmit}>
                    button
                  </Button>
                </Row>
              </Col>
              <Col l={6} offset="l1">
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <img src={ilp} className="homeImage" /> */}
              </Col>
            </Row>
          </Section>
        </Container>
        {/* <Parallax image={<img src={image2} />} /> */}

        <br />
        <br />
        <br />

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
                    mauris. Cras lacinia id ante ac ultrices. Sed ac ex iaculis, convallis turpis
                    scelerisque, ullamcorper justo.
                  </p>
                </div>
              </Col>
            </Row>
          </Section>
        </Container>
        <br />
        <br />
        <br />

        <Footer className="orange">
          <Container>
            <Row>
              <Col l={8} s={12}>
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4 footerText">
                  We are a team of college students working on this project like it's our full time
                  job. Any amount would help support and continue development on this project and is
                  greatly appreciated.
                </p>
              </Col>

              <Col l={4}>
                <h5>Contact Us</h5>
                <p>marik.solomonik@gmail.com</p>
                <p>billyihang@gmail.com</p>
              </Col>
            </Row>
          </Container>
        </Footer>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
