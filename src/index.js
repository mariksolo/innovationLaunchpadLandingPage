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
} from 'react-materialize';
import IL3 from 'IL3.jpg';
import ilp from 'ilp.jpg';
import ilp2 from 'ilp2.jpg';
import ilp3 from 'ilp3.jpg';

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
        <Section>
          <Row>
            <Col l={4} offset="l1">
              <br />
              <br />
              <br />
              <img src={ilp} className="homeImage" />
            </Col>

            <Col l={6} offset="l1" className="homeForm">
              <br />
              <br />
              <Row>
                <h3 className="mainText">
                  Try the world's #1 CRM built for small business growth.
                </h3>
              </Row>
              <Row>
                <h5 className="secondaryText">
                  Get Salesforce essentials, our all-in-one sales and service solution for just $25
                  a month.
                </h5>
              </Row>
              <Row>
                <TextInput label="Full Name" id="name" onChange={this.handleChange} />

                <TextInput
                  email
                  label="Email"
                  id="email"
                  error="Invalid Email"
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Button waves="light" onClick={this.handleSubmit}>
                  button
                </Button>
              </Row>
            </Col>
          </Row>
        </Section>

        <br />
        <br />
        <br />

        <Container>
          <Section>
            <Row>
              <Col m={4}>
                <div>
                  <div className="center">
                    <Icon medium className="textIcon"> web</Icon>
                    <h5 className = "columnHeader">Entrepreneurship</h5>
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
                    <Icon medium className="textIcon">code</Icon>
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
                    <Icon medium className="textIcon">next_week</Icon>
                    <h5>Opportunities</h5>
                  </div>

                  <p className="textColumn light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
                    efficitur velit. Proin mattis neque a enim sollicitudin, id tincidunt eros
                    faucibus. Curabitur vitae tellus sollicitudin, venenatis massa sed, blandit
                    mauris. Cras lacinia id ante ac ultrices. Sed ac ex iaculis, convallis turpis
                    scelerisque, ullamcorper justo.
                  </p>

                  <textArea> asdfasf</textArea>
                </div>
              </Col>
            </Row>
          </Section>
        </Container>

        <Footer className="contactFooter orange">
        <Container>
          <Section>
            <Col>
            <TextInput label="Message" type='footer'className="footerTextInput"/>
            <TextInput email label="Email" type='search'className="footerTextInput"/>
            </Col>
          </Section>
        </Container>
        

        </Footer>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
