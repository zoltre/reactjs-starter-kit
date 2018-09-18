import React from 'react';

function AuthLayoutBreadcrumbs(props) {
  return (
      <div>
        <ol className="breadcrumb nbg display-ib">
          <li className="breadcrumb-item display-ib pull-left m-r-10"><a href="/">Home</a></li>
          <li className="breadcrumb-item display-ib pull-left m-r-10"><a href="/dashboard">Dashboard</a></li>
          <li className="breadcrumb-item display-ib pull-left m-r-10"><a href="/template">Template</a></li>

        </ol>
        <br />
      </div>
  	);
}

export default AuthLayoutBreadcrumbs;
