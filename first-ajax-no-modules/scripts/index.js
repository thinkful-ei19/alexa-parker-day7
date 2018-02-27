'use strict';

const sample = {'kind':'youtube#searchListResponse','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/-OemHlwNRLUqOUlNJbpxgUiBFRY"','nextPageToken':'CAUQAA','regionCode':'US','pageInfo':{'totalResults':1000000,'resultsPerPage':5},'items':[{'kind':'youtube#searchResult','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/D3mMdZJZYLaodYDNUJsnnzUF37E"','id':{'kind':'youtube#video','videoId':'gjNukU-3jPk'},'snippet':{'publishedAt':'2018-01-13T23:01:58.000Z','channelId':'UCGBtk3J7PL40ZMhf3_1YBwg','title':'Evolution of Batman in Cartoons in 45 Minutes (2018)','description':'A look at how animated Batman has changed since 1968. Thanks for watching! Make sure to write your suggestions in the comments below. List of cartoons and voice actors: 1. Batman with Robin...','thumbnails':{'default':{'url':'https://i.ytimg.com/vi/gjNukU-3jPk/default.jpg','width':120,'height':90},'medium':{'url':'https://i.ytimg.com/vi/gjNukU-3jPk/mqdefault.jpg','width':320,'height':180},'high':{'url':'https://i.ytimg.com/vi/gjNukU-3jPk/hqdefault.jpg','width':480,'height':360}},'channelTitle':'Then & Now','liveBroadcastContent':'none'}},{'kind':'youtube#searchResult','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/zbgWjTr9rWilsjpSGCbioqY6iE4"','id':{'kind':'youtube#video','videoId':'JUWgGzqxgQo'},'snippet':{'publishedAt':'2017-09-23T15:00:01.000Z','channelId':'UCyu8StPfZWapR6rfW_JgqcA','title':'An Animated History of Batman | Batman Day | DC Kids','description':'From Batman: The Animated Series to Justice League Action, check out the very best of Batman\'s animated history. DCKids is home to all your favorite DC characters, videos, comics, games...','thumbnails':{'default':{'url':'https://i.ytimg.com/vi/JUWgGzqxgQo/default.jpg','width':120,'height':90},'medium':{'url':'https://i.ytimg.com/vi/JUWgGzqxgQo/mqdefault.jpg','width':320,'height':180},'high':{'url':'https://i.ytimg.com/vi/JUWgGzqxgQo/hqdefault.jpg','width':480,'height':360}},'channelTitle':'DC Kids','liveBroadcastContent':'none'}},{'kind':'youtube#searchResult','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/LR_QQel1oHIYeeYusEg7uOCIi-w"','id':{'kind':'youtube#video','videoId':'tD9WCpNFpnY'},'snippet':{'publishedAt':'2018-02-07T18:00:10.000Z','channelId':'UCB9_VH_CNbbH4GfKu8qh63w','title':'Black Panther VS Batman (Marvel VS DC) | DEATH BATTLE!','description':'Blue Apron is treating you to $30 off your first order with FREE shipping! Head to http://www.BlueApron.com/BATTLE The King of Wakanda and the Knight of Gotham battle for their lives! Which...','thumbnails':{'default':{'url':'https://i.ytimg.com/vi/tD9WCpNFpnY/default.jpg','width':120,'height':90},'medium':{'url':'https://i.ytimg.com/vi/tD9WCpNFpnY/mqdefault.jpg','width':320,'height':180},'high':{'url':'https://i.ytimg.com/vi/tD9WCpNFpnY/hqdefault.jpg','width':480,'height':360}},'channelTitle':'ScrewAttack!','liveBroadcastContent':'none'}},{'kind':'youtube#searchResult','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/Pr1hxENgDlmXfrc2IJYiavGN0jU"','id':{'kind':'youtube#video','videoId':'NwNdnAw61AA'},'snippet':{'publishedAt':'2017-11-20T08:00:02.000Z','channelId':'UCiZVMOinTQGb8HQu53VbV4Q','title':'BATMAN: The Enemy Within Episode 3 All Cutscenes (Season 2) Fractured Mask | Game Movie 1080p 60FPS','description':'Everything Wrong With Episode 3: https://www.youtube.com/watch?v=0ztZqpj0z2U ▻ GLP Shirts and Merch: https://tinyurl.com/y7sbgb3j ▻ Instagram: http://instagram.com/glplaygr0und ▻ Twitter:...','thumbnails':{'default':{'url':'https://i.ytimg.com/vi/NwNdnAw61AA/default.jpg','width':120,'height':90},'medium':{'url':'https://i.ytimg.com/vi/NwNdnAw61AA/mqdefault.jpg','width':320,'height':180},'high':{'url':'https://i.ytimg.com/vi/NwNdnAw61AA/hqdefault.jpg','width':480,'height':360}},'channelTitle':'Gamer\'s Little Playground','liveBroadcastContent':'none'}},{'kind':'youtube#searchResult','etag':'"_gJQceDMxJ8gP-8T2HLXUoURK8c/jaDvlPK2LxFD8pstce88eXI6sUc"','id':{'kind':'youtube#video','videoId':'-fRRCz_d4K8'},'snippet':{'publishedAt':'2017-12-02T20:08:44.000Z','channelId':'UCc-2P5tCezbxegb7gxp6EXg','title':'Big BATMAN Adventure Journey to find Toy SURPRISES by HobbyKidsTV','description':'Go on an adventure journey with the HobbyKids! Climb Tarantula Hill and find several clues to Batman\'s Bat Cave. Will the HobbyKids find him? Subscribe for NEW Shows: http://www.youtube.com/subsc...','thumbnails':{'default':{'url':'https://i.ytimg.com/vi/-fRRCz_d4K8/default.jpg','width':120,'height':90},'medium':{'url':'https://i.ytimg.com/vi/-fRRCz_d4K8/mqdefault.jpg','width':320,'height':180},'high':{'url':'https://i.ytimg.com/vi/-fRRCz_d4K8/hqdefault.jpg','width':480,'height':360}},'channelTitle':'HobbyKidsTV','liveBroadcastContent':'none'}}]};

const API_KEY = 'AIzaSyD-iH7PkPVU1yYQ7SAbIiLdTs0Qt2cprlM';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
*/

const store = {
  videos: []
};

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm,
    maxResults: 5,
    type: 'video',
  };
  $.getJSON(BASE_URL, query, callback);
};

//testing fetchVideos
//fetchVideos('batman', data => console.log(JSON.stringify(data)));
//fetchVideos('batman', data => console.log(data));

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  const results = response.items.map( (item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      thumbnails: item.snippet.thumbnails.default
    };
  });
  return results;
};

//test decorateResponse
//console.log(decorateResponse(sample));

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
