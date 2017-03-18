import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import PatientPage from './components/PatientPage.jsx';
import DoctorPage from './components/DoctorPage.jsx'

const app = document.getElementById('app');

ReactDOM.render(
                <Router history={hashHistory}>
                  <Route path="/" component={App}>
                    <IndexRoute component={PatientPage}/>
                    <Route path="/DoctorPage" component={DoctorPage}/>
                  </Route>
                </Router>
                , app);
