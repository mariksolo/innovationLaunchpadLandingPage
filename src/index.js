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
  Container
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
        <Row>
          <Col l={5} offset="l1" className="homeImage">
            <img src={ilp} />
          </Col>

          <Col l={4} offset="l1" className="homeForm">
            <br />
            <br />
            <Row>
              <h2 className="mainText">Try the world's #1 CRM built for small business growth.</h2>
            </Row>
            <Row>
              <h5 className="secondaryText">
                Get Salesforce essentials, our all-in-one sales and service solution for just $25 a
                month.
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

        <Row>
          <Col l={2}>
            <Icon medium>cloud</Icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
              velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
              vitae tellus sollicitudin, venenatis massa sed, blandit mauris. Cras lacinia id ante
              ac ultrices. Sed ac ex iaculis, convallis turpis scelerisque, ullamcorper justo.
            </p>
          </Col>

          <Col l={2}>
            <Icon medium>cloud</Icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
              velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
              vitae tellus sollicitudin, venenatis massa sed, blandit mauris. Cras lacinia id ante
              ac ultrices. Sed ac ex iaculis, convallis turpis scelerisque, ullamcorper justo.
            </p>
          </Col>

          <Col l={2}>
            <Icon medium>cloud</Icon>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
              velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
              vitae tellus sollicitudin, venenatis massa sed, blandit mauris. Cras lacinia id ante
              ac ultrices. Sed ac ex iaculis, convallis turpis scelerisque, ullamcorper justo.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
