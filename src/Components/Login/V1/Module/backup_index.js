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
          password: '',

          user_validated: false,
          user_valid: true,
          user_error: '',

          password_validated: false,
          password_valid: true,
          passsword_error: ''
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

    validate_user = () => {

      var user_info = Z_Auth.validate_user( this.state.email );

      this.setState({ user_valid : user_info.user_valid , user_error : user_info.user_error })

      if( user_info.user_valid ){
        this.setState({ user_validated : true })
      }

    }
    /* --------------------------------------------------------- */

    validate_password = () => {

      alert('here 2')

      console.log('Validating Password');

      // Z_Auth.validate_password( this.state.email, this.state.password );

    }

    /* --------------------------------------------------------- */

    login = () => {

      if( this.state.user_validated ){

        this.validate_password();

      } else {

        this.validate_user();

      }

    }

    /* --------------------------------------------------------- */

    onSubmit = (e) => {
      e.preventDefault();
      // this.login();
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

                        <div className={this.state.user_validated ? "d-none": ""}>

                          <div className={this.state.user_valid ? "bmd-form-group": "bmd-form-group has-danger"}>
                            <div className="input-group p-10">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className={this.state.user_valid ? "material-icons": "material-icons red"}>email</i>
                                </span>
                              </div>
                              <input autoComplete="off" type="text" className={this.state.user_valid ? "form-control": "form-control red"} id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email" />
                            </div>
                            <div className={this.state.user_valid ? "invisible": "visible text-center red text-b"}>
                              &nbsp; {this.state.user_error}
                            </div>
                          </div>

                        </div>

                        <div className={this.state.user_validated ? "": "d-none"}>

                        </div>


                        <div className={this.state.password_valid ? "bmd-form-group": "bmd-form-group has-danger"}>
                          <div className="input-group p-10">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input autoComplete="off" type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer justify-content-center">
                        <input type="submit" value="Next" className="btn btn-primary" onClick={this.login}/>
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
