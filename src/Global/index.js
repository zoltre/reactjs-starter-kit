
  export const Z_Global = {

      /* --------------------------------------------------------- */
      // Local Storage

      getLs: function(key){
        return localStorage.getItem(key);
      },

      /* ----- */

      setLs: function(key,value){
        localStorage.setItem(key,value);
      },

      /* ----- */

      removeLs: function(key){
        localStorage.removeItem(key);
      },

      /* --------------------------------------------------------- */
      // Session Storage

      getSs: function(key){
        return sessionStorage.getItem(key);
      },

      setSs: function(key,value){
        sessionStorage.setItem(key,value);
      },

      removeSs: function(key){
        sessionStorage.removeItem(key);
      },

      /* --------------------------------------------------------- */
      // Cookies

      /* --------------------------------------------------------- */
      // Redirecting

      goTo: function(object, path){
        object.props.history.push(path);
      },

      /* --------------------------------------------------------- */
      // Response Handling

      handleResponse: function(response) {

        if (!response.ok) {
            if (response.status === 401) {
                this.logout();
                console.log('Logging out');
                return false;
            }
        }

        return true;

      },

      /* --------------------------------------------------------- */
      // Auth functions

      is_authenticated: function(){

        // return true;

        if( this.getSs('token') ){
          return true;
        } else {
          return false;
        }

      },

      /* ----- */

      logout: function(){
        this.removeSs('token');
      }

      /* --------------------------------------------------------- */

  };
