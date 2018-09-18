import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// <PrivateRoute exact path='/template' component={Template} />
// <Route exact path='/template' component={Template} />

import {Page as Template} from '../Components/Template'

import {Page as Landing} from '../Components/Landing/'
import {Page as Login} from '../Components/Login/'
import {Page as Register} from '../Components/Register'
import {Page as Dashboard} from '../Components/Dashboard'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/template' component={Template} />
    </Switch>
  </main>
)

export default Routes;
