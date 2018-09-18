import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayoutSidebar from './AuthLayoutSidebar'
import AuthLayoutHeader from './AuthLayoutHeader'
import AuthLayoutFooter from './AuthLayoutFooter'
import AuthLayoutBreadcrumbs from './AuthLayoutBreadcrumbs'

function AuthLayout({ component: Component, ...rest }) {
  return (

		<Route {...rest} render={props => (

          <div className="page-wrapper">
            <AuthLayoutHeader />
            <AuthLayoutSidebar />
            <AuthLayoutBreadcrumbs />
            <Component {...props} />
            <AuthLayoutFooter />
          </div>

    )} />

  );
}

export default AuthLayout;
