window.FlickrGallery = (function(undefined)  {
  "use strict";

  var GalleryStage = 'flickr-gallery';

  function init(data){

    if(!document.getElementById(GalleryStage)){
      return;
    }
    setupGallery(data);
  }

  function setupGallery(data){

    // setup event listeners

    // process data

    // localstorage test

  }

  return {
    init: init
  };
})();
