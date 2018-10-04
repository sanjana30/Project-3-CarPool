import axios from "axios";

export default {

    /**
     *
     * getLoggedUserDetail : to get the information of logged in user
     *
     */




    getLoggedUserDetail: function () {
        let token = sessionStorage.getItem('token');
        let config = {
            headers: {
                Authorization: token,
            }
        };
        return axios.get("/api/users/details", config);
    },

    loginUser: function (login) {
        return axios.post("/api/users/authenticate", login);
    },

    registerNewUser: function (registerForm) {
        return axios.post("/api/users/register", registerForm);
    },

    addUserLocation: function(id, locationData){
        let token = sessionStorage.getItem('token');
        let config = {
            headers: {
                Authorization: token,
            }
        };
        return axios.put("/api/users/"+id, locationData, config);
    },

    getOtherMarkers: function(id){
        // let token = sessionStorage.getItem('token');
        // let config = {
        //     headers: {
        //         Authorization: token,
        //     }
        // };
        return axios.get("/api/users/"+id);
    },
    getGeoCode: function (address) {
        const apikey = "AIzaSyCxFvOfI3TIp-t_lGYU0o0oD6Uh120miHc";
        let queryurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apikey;
        return axios.get(queryurl);
    }

};
