import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import Homepage from './components/Patientpage.jsx';
import DoctorPage from './components/DoctorPage.jsx'

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="/DoctorPage" component={Doctorpage}/>
    </Route>
  </Router>
  , app);