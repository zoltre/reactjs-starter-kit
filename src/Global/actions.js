/* --------------------------------------------------------- */

export const Z_Global = {
    goTo,
    logout,
    is_authenticated,
    setSs
};

/* --------------------------------------------------------- */

function setSs(key,value){
  sessionStorage.setItem(key,value);
}

/* --------------------------------------------------------- */

function getSs(key){
  return sessionStorage.getItem(key);
}

/* --------------------------------------------------------- */

function removeSs(key){
  sessionStorage.removeItem(key);
}

/* --------------------------------------------------------- */

function goTo(object, path){
  object.props.history.push(path);
}

/* --------------------------------------------------------- */

function is_authenticated(){

  if( getSs('access_token') ){
    return true;
  } else {
    return false;
  }

}

/* --------------------------------------------------------- */

function logout() {

    removeSs('access_token');
    removeSs('refresh_token');

}

/* --------------------------------------------------------- */

function handleResponse(response) {

  if (!response.ok) {
      if (response.status === 401) {
          logout();
          console.log('Logging out');
          return false;
      }
  }

  return true;

}


/* --------------------------------------------------------- */
