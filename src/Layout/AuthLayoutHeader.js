import React from 'react';
import { Feature as Logout } from '../Components/Logout/'

function AuthLayoutHeader(props) {

  return (
      <header className="">
       <Logout />
       This is the header content
      </header>
    );
}

export default AuthLayoutHeader;
