import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Z_Register } from '../Actions/index';
import { Z_Global } from '../../../../Global/actions';

class Page extends Component {

    /* --------------------------------------------------------- */

    constructor(props) {

        super(props);

        this.state = {
          email: 'nerraw',
          password: 'sairf'
        }

    }

    /* --------------------------------------------------------- */

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    /* --------------------------------------------------------- */

    componentDidMount = () => {
      if( Z_Global.is_authenticated() ){
        Z_Global.goTo(this, '/dashboard');
      }
    }


    /* --------------------------------------------------------- */

    register = () => { Z_Register.register( this.state.email, this.state.password ) }

    /* --------------------------------------------------------- */


    onSubmit = (e) => {
      e.preventDefault();
      this.register();
    }

    /* --------------------------------------------------------- */

    render() {
        return (
          <div>

            <h3>Register</h3>

           <form onSubmit={this.onSubmit}>

           <div>
            <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
           </div>

           <div>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
           </div>

            <button className="btn" onClick={this.login}>
             Register
            </button>


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
