import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Tabs, Tab } from 'react-materialize';

import Home from 'Home';

export default class NavTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.sgs ) {
      return (
        <div>
        
        <Tabs className="mainTabs z-depth-1 " >
          <Tab title="Seniors get Savvy" className="SgSTab" active>
            Seniors get Savvy!
          </Tab>
  
          <Tab title="Home" className="mainTab">
            <Home />
          </Tab>
        </Tabs>
      </div>
      );
    } else {
      return (
        <div>
        
        <Tabs className="mainTabs z-depth-1 " >
          <Tab title="Seniors get Savvy" className="SgSTab">
            Seniors get Savvy!
          </Tab>
  
          <Tab title="Home" className="mainTab" active>
            <Home />
          </Tab>
        </Tabs>
      </div>
      );
    }
    
    
  }
}
