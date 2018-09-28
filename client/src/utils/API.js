import axios from "axios";

export default {
 
  // searchArticle: function(searchterm, startdate, enddate) { 
  //   const apikey = "02e5a12e46bd44faa379b80fbed7c6c0";   
  //   return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchterm+"&begin_date="+startdate+"&end_date="+enddate+"&api-key="+apikey);
  // },
 
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
 
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // },

  // searchSavedArticle: function() {
  //   return axios.get("/api/articles");
  // }

  getGeoCode: function(address){
    const apikey= "AIzaSyCxFvOfI3TIp-t_lGYU0o0oD6Uh120miHc";
    let queryurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+apikey;
    return axios.get(queryurl);
  } 
};
