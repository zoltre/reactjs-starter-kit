import React from 'react';
// import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout.js'
import { Z_Global } from '../Global/actions'

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (

      ( Z_Global.is_authenticated() )
        ?
      <Route {...rest} render={props => ( <AuthLayout component={Component} /> )} />
        :
      <Route {...rest} render={props => ( <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> )} />

     );
  }

export default PrivateRoute;
