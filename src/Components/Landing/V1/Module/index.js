import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Z_Page } from '../Actions/index';
import { Z_Global } from '../../../../Global/actions';

class Page extends Component {

    /* --------------------------------------------------------- */

    constructor(props) {

        super(props);

    }

    /* --------------------------------------------------------- */

    componentDidMount = () => {
      if( Z_Global.is_authenticated() ){
        // Z_Global.goTo(this, '/facebox');
      }
    }


    /* --------------------------------------------------------- */

    render() {
        return (
          <div>
            <div>
              React JS Starter Kit
            </div>

            <hr />
            
            <div>
              Public Pages are
            </div>

            <div>
              <div>
                <a href="/">Landing page</a>
              </div>
              <div>
                <a href="/login">Login page</a>
              </div>
              <div>
                <a href="/register">Register page</a>
              </div>
            </div>

            <hr />


            <div>
              Private Pages are
            </div>

            <div>
              <div>
                <a href="/dashboard">Dashboard</a>
              </div>
              <div>
                <a href="/template">Template</a>
              </div>
            </div>

          </div>
        );
    }

    /* --------------------------------------------------------- */
}

function mapStateToProps(state) {
    //const { loggingIn } = state.authentication;
    return {};
}

const connectedPage = connect(mapStateToProps)(Page);
export { connectedPage as Page };
