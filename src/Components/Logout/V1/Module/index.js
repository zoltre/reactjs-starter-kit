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


    logout = () => {
      Z_Global.logout();
      this.setState({'logged_out':true});
    }

    /* --------------------------------------------------------- */

    //handleChange = (e) => {this.setState({ [e.target.name]: e.target.value }) }

    /* --------------------------------------------------------- */

    render() {
        return (

          <div>

            <button className="btn" onClick={this.logout}>
             Logout {this.state.name}
            </button>

            { this.state.logged_out && <Redirect to='/login' /> }

          </div>



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
