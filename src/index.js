import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link,
 
  Switch, } from 'react-router-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Tabs, Tab } from 'react-materialize';

import Home from 'Home';
import NavTabs from 'NavTabs';

function sGsNavTabs(props) {
  return <NavTabs  sgs={true}/>;
}
function homeNavTabs(props) {
  return <NavTabs sgs={false} />
}
ReactDOM.render(
  
  <BrowserRouter>
  <Switch>
      <Route exact path="/" component={homeNavTabs} />
      <Route path="/SeniorsGetSavvy" component={sGsNavTabs} />

    
    
    {/* <Tabs className="mainTabs z-depth-1 " options={{ duration: 2 }}>
      <Tab title="Seniors get Savvy" className="SgSTab">
        Seniors get Savvy!
      </Tab>

      <Tab title="Home" className="mainTab" active>
        <Home />
      </Tab>
    </Tabs> */}
  
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
