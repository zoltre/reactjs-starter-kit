import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Z_Global } from '../../../../Global/actions';
import { Redirect } from 'react-router'

class Feature extends Component {

    /* --------------------------------------------------------- */

    constructor(props) {

        super(props);

        this.state = {
          logged_out : false
        }

    }

    /* --------------------------------------------------------- */

    goTo = (path) => {
      this.props.history.push(path);
    }

    /* --------------------------------------------------------- */


    logout = (e) => {
      e.preventDefault();
      Z_Global.logout();
      this.setState({'logged_out':true});
    }

    /* --------------------------------------------------------- */

    //handleChange = (e) => {this.setState({ [e.target.name]: e.target.value }) }

    /* --------------------------------------------------------- */

    render() {
        return (

          <a href="#" onClick={this.logout}>
            { this.props.markup }
            { this.state.logged_out && <Redirect to='/login' /> }
          </a>

        );
    }

    /* --------------------------------------------------------- */
}

function mapStateToProps(state) {
    //const { loggingIn } = state.authentication;
    return {};
}

const connectedFeature = connect(mapStateToProps)(Feature);
export { connectedFeature as Feature };
