import axios from 'axios';
import { Z_API_Urls } from '../../../../Config';
import { Z_Global } from '../../../../Global/actions';

/* --------------------------------------------------------- */

export const Z_Auth = {
    login
};

/* --------------------------------------------------------- */

function set_tokens(tokens){

  if( tokens.id ){

    Z_Global.setSs( 'token', tokens.id );
    return true;

  } else {

    return false;

  }

}

/* --------------------------------------------------------- */

function login(email,password){

  let credentials = {
     "username": email,
     "password": password
   };

   let login_response = {}

   axios.post( `${Z_API_Urls.SERVER}/${Z_API_Urls.LOGIN}` , credentials )
      .then(response => {

        console.log(response);

        if(response.status === 200){
          set_tokens(response.data);
          window.location.reload();
        }

        login_response.valid = true;

      })

      .catch(error => {

        login_response.valid = false;

      });

    return login_response;


}

/* --------------------------------------------------------- */
