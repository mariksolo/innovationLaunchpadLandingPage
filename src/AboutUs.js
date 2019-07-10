import React from 'react';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Row, Col, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

import AboutCard from 'AboutCard';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand={<a />} alignLinks="right">
          <Link to="/about">About Us</Link>
          <NavItem href="/about">Getting started</NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar>

        <br/>
        <br/>
        <br/>
        <br/>

        <Row>
          <Col m={5} s={12} offset="l1" className="aboutCard">
          <AboutCard
              className="aboutCard"
              personName="William Yang"
              title="President"
              imgTag={
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                  width="200"
                />
              }
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                        eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                        elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                        pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

<AboutCard
              className="aboutCard"
              personName="William Yang"
              title="President"
              imgTag={
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                  width="200"
                />
              }
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                        eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                        elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                        pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

<AboutCard
              className="aboutCard"
              personName="William Yang"
              title="President"
              imgTag={
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                  width="200"
                />
              }
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                        eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                        elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                        pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Col>

          <Col m={5} s={12} offset="l" className="aboutCard">
            <AboutCard
                className="aboutCard"
                personName="Mark Solomonik"
                title="Vice President"
                imgTag={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                    width="200"
                  />
                }
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                          eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                          tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                          elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                          pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
              />

<AboutCard
                
                className="aboutCard"
                personName="Mark Solomonik"
                title="Vice President"
                imgTag={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                    width="200"
                  />
                }
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                          eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                          tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                          elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                          pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
              />

<AboutCard
              className="aboutCard"
              personName="William Yang"
              title="President"
              imgTag={
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
                  width="200"
                />
              }
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                        eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                        elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis
                        pretium sit amLorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            </Col>
        </Row>
        
      </div>
    );
  }
}

export default AboutUs;
