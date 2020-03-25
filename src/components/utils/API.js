import axios from "axios";

export default {
  search: function(query) {
    return axios.get("https://dog.ceo/api/breed/" + query + "/images");
  },
  searchRandom: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};
