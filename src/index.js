import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import '../materialize-src/sass/materialize.scss';
import '../materialize-src/js/bin/materialize.js';

import Home from 'Home';
import AboutUs from 'AboutUs';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
