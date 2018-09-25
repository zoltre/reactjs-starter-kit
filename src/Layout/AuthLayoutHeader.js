import React from 'react';
import { Feature as Logout } from '../Components/Logout/'

function AuthLayoutHeader(props) {

  return (
      <header className="clearfix">

        <span className="pull-right m-t-5 m-r-5">

          <Logout
             markup={
               <i className="material-icons">
                 power_settings_new
              </i>}
          />

        </span>



       This is the header content
      </header>
    );
}

export default AuthLayoutHeader;
