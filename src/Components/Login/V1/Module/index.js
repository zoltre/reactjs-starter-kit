import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Z_Auth } from '../Actions';
import { Z_Global } from '../../../../Global/actions';

class Page extends Component {

    /* --------------------------------------------------------- */

    constructor(props) {

        super(props);

        this.state = {
          email: 'nerraw',
          password: 'sairf',
          error: false,
          error_message: 'User or Password does not match'
        }

    }

    /* --------------------------------------------------------- */

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    /* --------------------------------------------------------- */

    componentDidMount = () => {
      if( Z_Global.is_authenticated() ){
        Z_Global.goTo(this, '/template');
      }
    }


    /* --------------------------------------------------------- */

    login = () => { Z_Auth.login( this.state.email, this.state.password ) }

    /* --------------------------------------------------------- */

    onSubmit = (e) => {
      e.preventDefault();
      // this.login();
    }

    /* --------------------------------------------------------- */

    render() {
        return (

          <div>

          <form name="form" onSubmit={this.onSubmit}>
            <div>
              <input autoComplete="off" type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
            </div>

            <div>
              <input autoComplete="off" type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
            </div>

            <div>
              <input type="submit" value="Login" className="btn btn-primary" onClick={ this.login } />
            </div>
          </form>

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
