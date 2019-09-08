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
  Tab
} from 'react-materialize';
import collinHeadshot from './collin.jpg';
import innovationlaunchpad from './innovationl.png';

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
    let infoOne = 'info';
    let infoTwo = 'info';
    let infoThree = 'info';

    if (this.state.loadCols) {
      infoOne = 'infoOne';
      infoTwo = 'infoTwo';
      infoThree = 'infoThree';
    }
    return (
      <div>
        <br />
        <Container>
          <Section>
            <Row className="homeForm">
              <Col l={6} offset="l">
                <div />
                <Row>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2 className="mainText">
                    Preparing high school students to flourish in business and technology
                  </h2>
                </Row>
                <Row>
                  <h5 className="secondaryText">
                    Subscribe to our email list to hear about news, events, and workshops.
                  </h5>
                </Row>
                <Row>
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
                </Row>
                <Row>
                  <Button waves="light" onClick={this.handleSubmit}>
                    Subscribe
                  </Button>
                </Row>
              </Col>
              <Col>
                <br />
                <br />
                <br />
                <br />
                <br />
                <ReactCSSTransitionGroup
                  transitionName="anim"
                  transitionAppear={true}
                  transitionAppearTimeout={5000}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <img src={innovationlaunchpad} />
                </ReactCSSTransitionGroup>
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
                  <div className={infoOne}>
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
                  <div className={infoTwo}>
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
                  <div className={infoThree}>
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
            <Section>
              <h3 className="center">Our Team</h3>
              <Row className="imageRow">
                <Col className="imageColumn center" offset="l">
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                </Col>

                <Col className="imageColumn">
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                </Col>
                <Col className="imageColumn">
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                </Col>

                <Col className="imageColumn">
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                  <img src={collinHeadshot} />
                  <h5>Collin Qian</h5>
                  <h6>Chief Marketing Officer</h6>
                  <br />
                </Col>
              </Row>
            </Section>
          </Container>

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
