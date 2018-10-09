import axios from 'axios';
import { Z_API_Urls } from '../../../../Config';
import { Z_Global } from '../../../../Global';

/* --------------------------------------------------------- */

export const Z_Component_Actions = {
    login
};

/* --------------------------------------------------------- */

function set_tokens(tokens){

  if( tokens.token ){

    Z_Global.setSs( 'token', tokens.token );

    return true;

  } else {

    return false;

  }

}

/* --------------------------------------------------------- */

function login(email,password){

  let credentials = {

     "username" : email,
     "password" : password

   };

   let login_response = {}

   console.log(credentials);

   // axios.post( `${Z_API_Urls.SERVER}/${Z_API_Urls.LOGIN}/` , credentials )
   axios.post( 'http://localhost:81/api-token-auth/' , credentials )
      .then(response => {

        console.log('Login Response: ',response);

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
