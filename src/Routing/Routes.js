import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// <PrivateRoute exact path='/template' component={Template} />
// <Route exact path='/template' component={Template} />

import {Page as Template} from '../Pages/Template'
import {Page as Login} from '../Pages/Login'
// import {Page as Login} from '../Components/Login/'
// import {Page as Register} from '../Components/Register'
// import {Page as Dashboard} from '../Components/Dashboard'


// <Route exact path='/login' component={Login} />
// <Route exact path='/register' component={Register} />
// <Route exact path='/' component={Login} />
// <PrivateRoute exact path='/dashboard' component={Dashboard} />
// <PrivateRoute exact path='/template' component={Template} />

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Template} />
    </Switch>
  </main>
)

export default Routes;
