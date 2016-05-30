window.FlickrGallery = (function(undefined)  {
  "use strict";

  var GalleryStage = 'flickr-gallery';

  var GALLERY_TILE = 'c-gallery-tile';

  function init(data){

    if(!document.getElementById(GalleryStage)){
      return;
    }

    console.log(data);
    setupGallery(data);

    // localstorage test

    // setup event listeners
    addListeners();
  }

  function setupGallery(data){

    // process data
    window.GalleryReader.init(data);


  }

  function addListeners(){
    var galleryEl = document.getElementsByClassName(GALLERY_TILE);

    for (var i = 0; i < galleryEl.length; i++) {
      galleryEl[i].addEventListener("click", handleItemClick);
    }

  }

  function handleItemClick(){

  }



  return {
    init: init
  };
})();
