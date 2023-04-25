const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
  headers: {
    'X-RapidAPI-Key': 'ff57ac75cfmsh9a5dd881333ac19p13f491jsn37413c4c676b',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});