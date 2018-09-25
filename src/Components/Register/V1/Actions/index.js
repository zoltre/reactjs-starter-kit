import axios from 'axios';
import { Z_API_Urls } from '../../../../Config';
/* --------------------------------------------------------- */

export const Z_Register = {
    register
};

/* --------------------------------------------------------- */

function register(email,password){

  let credentials = {
     "email": email,
     "password": password
   };


   return new Promise( function(resolve) {

       console.log('Before flight');

       axios.post( `${Z_API_Urls.SERVER}/${Z_API_Urls.REGISTER}`, credentials )
           .then( response => {

             console.log('All Responses',response);

             if( response.status === 400 ){

               console.log('400 response', response);


             } else if (response.status === 200) {

               console.log('200 response',response);

             }

           });
   });

}

/* --------------------------------------------------------- */

function handleResponse(response) {

  if (!response.ok) {
      if (response.status === 401) {
          // logout();
          console.log('Logging out');
          return false;
      }
  }

  return true;

}

/* --------------------------------------------------------- */
