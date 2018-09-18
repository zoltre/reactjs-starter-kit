import axios from 'axios';
import { SERVER } from '../../../../Config';
import { Z_Global } from '../../../../Global/actions';

/* --------------------------------------------------------- */

export const Z_Auth = {
    login
};

/* --------------------------------------------------------- */

function set_tokens(tokens){

  if( tokens.access_token && tokens.refresh_token ){

    Z_Global.setSs( 'access_token', tokens.access_token );
    Z_Global.setSs( 'refresh_token', tokens.refresh_token  );

    return true;

  } else {

    return false;

  }

}

/* --------------------------------------------------------- */

function login(email,password){

  let credentials = {
     "email": email,
     "password": password
   };

   let login_response = {}

   axios.post( `${SERVER}/login` , credentials )
      .then(response => {

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
