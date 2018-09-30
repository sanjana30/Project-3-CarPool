import axios from "axios";

export default {
    // Gets all books
    searchArticle: function (searchterm, startdate, enddate) {
        const apikey = "02e5a12e46bd44faa379b80fbed7c6c0";
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchterm + "&begin_date=" + startdate + "&end_date=" + enddate + "&api-key=" + apikey);
    },

    // getBook: function(id) {
    //   return axios.get("/api/books/" + id);
    // },

    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },

    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },

    searchSavedArticle: function () {
        return axios.get("/api/articles");
    },

    loginUser: function (login) {
        return axios.post("/api/users/authenticate", login);
    },

    registerNewUser: function (registerForm) {
        return axios.post("/api/users", registerForm);
    }

};
