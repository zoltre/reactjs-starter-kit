import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Z_Auth } from '../Actions';
import { Z_Global } from '../../../../Global';

class Feature extends Component {

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
        Z_Global.goTo(this, '/template');
      }
    }


    /* --------------------------------------------------------- */

    login = () => { Z_Auth.login( this.state.email, this.state.password ) }

    /* --------------------------------------------------------- */

    onSubmit = (e) => {
      e.preventDefault();
      this.login();
    }

    /* --------------------------------------------------------- */

    render() {
        return (
          <div>

          <h3>Login V2</h3>

           <form onSubmit={this.onSubmit}>

           <div>
            <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
           </div>

           <div>
            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
           </div>

            <button className="btn" onClick={this.login}>
             Login
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

const connectedFeature = connect(mapStateToProps)(Feature);
export { connectedFeature as Feature };
