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

    login = () => {

      var response = Z_Auth.login( this.state.email, this.state.password );

      console.log('Final response',response);

      if( response.valid == "1" ){

        Z_Global.goTo(this, '/eeee');

      } else if( response.name == "Frias" ) {

        this.setState({ error: true })
        console.log('Invalid response');

      }

      console.log('Done response',response.name , response );


    }

    /* --------------------------------------------------------- */

    onSubmit = (e) => {
      e.preventDefault();
      this.login();
    }

    /* --------------------------------------------------------- */

    render() {
        return (
          <div className="p-t-20">

              <div className="container-fluid">
                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                  <form name="form" onSubmit={this.onSubmit}>
                    <div className="card card-login">
                      <div className="card-header card-header-primary text-center">
                        <h4 className="card-title">Tergio</h4>
                      </div>

                      <div className="card-body ">

                        <div className={this.state.error ? "red font-16 text-center": "red font-16 text-center invisible"}>
                            &nbsp; {this.state.error_message}
                        </div>


                        <span className="bmd-form-group">
                          <div className="input-group p-10">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">person_outline</i>
                              </span>
                            </div>
                            <input autoComplete="off" type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                          </div>
                        </span>
                        <span className="bmd-form-group">
                          <div className="input-group p-10">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input autoComplete="off" type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                          </div>
                        </span>
                      </div>
                      <div className="card-footer justify-content-center">
                        <input type="submit" value="Login" className="btn btn-primary" />
                      </div>
                    </div>
                  </form>
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
