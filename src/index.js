import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';
import { Tabs, Tab } from 'react-materialize';

import Home from 'Home';

ReactDOM.render(
  // <BrowserRouter>
  <div>
    <Route exact path="/" component={Home} />
    <Tabs className="mainTabs z-depth-1 " options={{ duration: 2 }}>
      <Tab title="Seniors get Savvy" className="SgSTab">
        Seniors get Savvy!
      </Tab>

      <Tab title="Home" className="mainTab" active>
        <Home />
      </Tab>
    </Tabs>
  </div>,
  /* </BrowserRouter>, */
  document.getElementById('root')
);
