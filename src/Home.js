import React from 'react';

import { Link } from 'react-router-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import {
  Button,
  Icon,
  Row,
  Col,
  Navbar,
  NavItem,
  TextInput,
  Container,
  Section,
  Footer,
  Tabs,
  Tab,
  MediaBox
} from 'react-materialize';
import collinHeadshot from './collin.jpg';
import innovationlaunchpad from './innovationl.png';
import emptyLogo from './emptyLogo.png';
import rotatedRocketLogo from './rotatedRocketLogo.png';

import firebase from 'firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CustomNavMenu from './CustomNavMenu';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      loadCols: false
    };
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };
  handleScroll = () => {
    const windowHeight =
      'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight * 0.4) {
      console.log('bottom reached');
      this.setState({
        loadCols: true
      });
    }
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleNav = () => {};

  handleSubmit = event => {
    console.log('handle submit');

    try {
      const firebaseConfig = {
        apiKey: 'AIzaSyAj-wIECBgzRGqioRROXXM467dgrFVOImk',
        authDomain: 'illandingpage.firebaseapp.com',
        databaseURL: 'https://illandingpage.firebaseio.com',
        projectId: 'illandingpage',
        storageBucket: 'illandingpage.appspot.com'
      };

      firebase.initializeApp(firebaseConfig);
    } catch (e) {}

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

    this.setState({
      name: '',
      email: ''
    });
  };
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col m={7} className="contentSide">
              <Section>
                <h1 className="leftText">
                  Preparing high school students to flourish in business and technology
                </h1>
              </Section>
            </Col>

            <Col m={5} s={0} className="formSide">
              <Row className="logoImage">
                <Col m={3} />
                <Col m={6} className="wholeLogo">
                  <img className="emptyLogo" src={emptyLogo} width="10%" />
                  <img className="rocketLogo rocketLogo2" src={rotatedRocketLogo} width="10%" />
                </Col>

                <Col m={3} />
              </Row>
              <Row className="appearingContent">
                <Col m={3} />
                <Col m={6}>
                  <p className="rightText">
                    Subscribe to our email list to hear about news, events, and workshops.
                  </p>
                </Col>
                <Col m={3} />
              </Row>
              <Row className="appearingContent">
                <Col m={4} />
                <Col m={5} className="formBox">
                  <TextInput
                    label="Full Name"
                    id="name"
                    className="textArea"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />

                  <TextInput
                    email
                    label="Email"
                    id="email"
                    error="Invalid Email"
                    className="textArea"
                    onChange={this.handleChange}
                    type="front"
                    value={this.state.email}
                  />

                  <Button className="formButton">Subscribe</Button>
                </Col>
                <Col m={3} />
              </Row>
            </Col>
          </Row>
          {/* <Container className="mainImageContainer">
          <Section className="mainImageSection"> */}
          {/* <Row>
            <Col m ={6} className="formBox">
            {/* <Container className="formBox">
              <Section className="formBox">
                <h3>
                Preparing high school students to flourish in business and technology
                </h3>
              </Section>
            </Container>
             */}
          {/*              
            </Col>
            <Col m ={6} className="mainImageBox">
              <img className="mainImage" src="https://elestoque.org/wp-content/uploads/2019/03/DSC_0022-copy.jpg" width="100%"/>
            </Col>
 
            <Col m ={0}>
             </Col>
          </Row>
          <Row >
            <Col m ={4}>
            </Col>
            <Col m={4}className="formBox">
              
              <h3>
              Preparing high school students to flourish in business and technology
              </h3>
            </Col>
            <Col m ={4}>
            </Col>

             </Row> 
           */}

          {/* </Section>
        </Container> */}
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <Footer className="orange">
          {/* <Container> */}
          <p>© Copyright 2019, Innovation Launchpad. All Rights Reserved. EIN: 83-2770147</p>
          <p>Contact: team.innovationlaunchpad@gmail.com</p>
        </Footer>
      </div>
    );
  }
}

export default Home;
