import React from 'react';
import { Route } from 'react-router-dom';
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

function Layout({ component: Component, ...rest }) {
  return (

		<Route {...rest} render={props => (

      <Header />
      <LeftSidebar />
      <Breadcrumbs />
      <Component {...props} />
      <RightSidebar />
      <Footer />

    )} />

  );
}

export default Layout;
