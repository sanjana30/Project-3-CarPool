import axios from "axios";

export default {

    /**
     *
     * deleteArticle : Here I have written a sample code to verify the user in each execution
     *
     */

    // deleteArticle: function (id) {
    //     let token = sessionStorage.getItem('token');
    //     let config = {
    //         headers: {
    //             Authorization: token,
    //         }
    //     };
    //     return axios.delete("/api/articles/" + id, config);
    // }
    

    loginUser: function (login) {
        return axios.post("/api/users/authenticate", login);
    },

    registerNewUser: function (registerForm) {
        return axios.post("/api/users/register", registerForm);
    },


  getGeoCode: function(address){
    const apikey= "AIzaSyCxFvOfI3TIp-t_lGYU0o0oD6Uh120miHc";
    let queryurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+apikey;
    return axios.get(queryurl);
  } 

};
