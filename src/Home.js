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
  
    handleSubmit = event => {
      const firebaseConfig = {
        apiKey: 'AIzaSyAj-wIECBgzRGqioRROXXM467dgrFVOImk',
        authDomain: 'illandingpage.firebaseapp.com',
        databaseURL: 'https://illandingpage.firebaseio.com',
        projectId: 'illandingpage',
        storageBucket: 'illandingpage.appspot.com'
      };
  
      firebase.initializeApp(firebaseConfig);
  
      var db = firebase.firestore();
  
      db.collection('subscribers')
        .add({
          name: this.state.name,
          email: this.state.email
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    };
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
              <Row className="homeForm">
                <Col l={6} offset="l">
                  <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="mainText">
                      Try the world's #1 CRM built for small business growth.
                    </h1>
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
                      className="textArea"
                      onChange={this.handleChange}
                    />
  
                    <TextInput
                      email
                      label="Email"
                      id="email"
                      error="Invalid Email"
                      className="textArea"
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
              </Row>
            </Section>
          </Container>
  
          <br />
          <br />
          <br />
          <div className="textColumns">
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
          </div>
  
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

  export default Home;