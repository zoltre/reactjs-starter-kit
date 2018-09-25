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
            <h3>Dashboard</h3>
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
