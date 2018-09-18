import axios from 'axios';
import { SERVER } from '../../../../Config';

/* --------------------------------------------------------- */

export const Z_Auth = {
    login
};

/* --------------------------------------------------------- */

function login(email,password){

  let credentials = {
     "email": email,
     "password": password
   };


   return new Promise( function(resolve) {
       axios.post( `${SERVER}/login`, credentials )
           .then( response => {

             if( response.status === 200 ){

               let tokens = response.data;

               if( tokens.access_token && tokens.refresh_token ){

                 sessionStorage.setItem('access_token', tokens.access_token );
                 sessionStorage.setItem('refresh_token', tokens.refresh_token );

                 window.location.reload();

               }

             }

           });
   });

}

/* --------------------------------------------------------- */
