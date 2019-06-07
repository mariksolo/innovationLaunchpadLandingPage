import React from 'react';
import ReactDOM from 'react-dom';

import '../materialize-src/sass/materialize.scss';
import { Button, Icon, Row, Col, Card } from 'react-materialize';
import IL3 from 'IL3.jpg';
import ilp from 'ilp.jpg';
import ilp2 from 'ilp2.jpg';
import ilp3 from 'ilp3.jpg';

let Home = () => {
  return (
    <div>
      <h1>Hello there World!</h1>
      <p>Hola</p>
      <Button waves="light">
        <Icon>thumb_up</Icon>
      </Button>

      <Row>
        <Col m={6} s={12}>
          <Card
            header={<img src={ilp} />}
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
          >
            I am a very simple card.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
