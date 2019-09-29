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
                <h1 className="leftTitleText">
                  Jumpstart your future career with Innovation Launchpad
                </h1>
                <h5 className="leftSubText">
                  Innovation Launchpad is a 501(c)(3) non-profit dedicated to preparing high school
                  students to flourish in business and technology
                </h5>
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
          <Row className="row1">
            <Col m={3}>
              <h3 className="sectionTitle">Entrepreneurship</h3>
              <h5 className="sectionParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
                velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
                vitae tellus sollicitudin,
              </h5>
            </Col>
            <Col m={9} />
          </Row>
          <Row className="row2">
            <Col m={9} />
            <Col m={3}>
              <h3 className="sectionTitle">Technology</h3>
              <h5 className="sectionParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
                velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
                vitae tellus sollicitudin,
              </h5>
            </Col>
          </Row>
          <Row className="row3">
            <Col m={3}>
              <h3 className="sectionTitle">Opportunities</h3>
              <h5 className="sectionParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et efficitur
                velit. Proin mattis neque a enim sollicitudin, id tincidunt eros faucibus. Curabitur
                vitae tellus sollicitudin,
              </h5>
            </Col>
            <Col m={9} />
          </Row>
          <Row className="row4" />

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
