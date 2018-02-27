'use strict';

const sample = {
  'kind': 'youtube#searchListResponse',
  'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/-OemHlwNRLUqOUlNJbpxgUiBFRY"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': { 'totalResults': 1000000, 'resultsPerPage': 5 },

  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/D3mMdZJZYLaodYDNUJsnnzUF37E"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'gjNukU-3jPk'
      },
      'snippet': {
        'publishedAt': '2018-01-13T23:01:58.000Z',
        'channelId': 'UCGBtk3J7PL40ZMhf3_1YBwg',
        'title': 'Evolution of Batman in Cartoons in 45 Minutes (2018)',
        'description': 'A look at how animated Batman has changed since 1968. Thanks for watching! Make sure to write your suggestions in the comments below. List of cartoons and voice actors: 1. Batman with Robin...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/default.jpg',
            'width': 120, 'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/mqdefault.jpg',
            'width': 320, 'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/gjNukU-3jPk/hqdefault.jpg',
            'width': 480, 'height': 360
          }
        },
        'channelTitle': 'Then & Now',
        'liveBroadcastContent': 'none'
      }
    },
  ]
};

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
const fetchVideos = function (searchTerm, callback) {
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
// fetchVideos('batman', data => decorateResponse(data));

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function (response) {
  const results = response.items.map((item) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnails: item.snippet.thumbnails.default.url
    };
  });
  // addVideosToStore(results);
  return results;
};

//test decorateResponse
//console.log(decorateResponse(sample));

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function (video) {
  return `
<li><a href="https://www.youtube.com/watch?v=${video.id}" target= "blank"><img src="${video.thumbnails}"/></a></li>`
};

//tested generateVideoItemHtml
//console.log(generateVideoItemHtml(decorateResponse(sample)));

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function (videos) {
  store.videos = videos;
  console.log(store.videos);
  render();
  //console.log(store);
  //console.log(resultVar);
};





// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function () {
const resultsVariable = store.videos.map( (item) => generateVideoItemHtml(item));
$('.results').html(resultsVariable);
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
  $('#submit-button').on('click', function(event) {
   event.preventDefault();
   const newSearchItems = $('#search-term').val();
   $('#search-term').val('');
   console.log(newSearchItems);
   fetchVideos(newSearchItems, function(response){
   let videos = decorateResponse(response);
   console.log(videos);
   addVideosToStore(videos);
   render();
   });

  // test before adding to store
  // add videos to store
  // re-render
  });

};

// When DOM is ready:
$(function () {
  handleFormSubmit();
});