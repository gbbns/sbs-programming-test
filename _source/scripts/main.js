window.FlickrGallery = (function(undefined)  {
  "use strict";

  var GalleryStage = 'flickr-gallery';

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
    var galleryEl = document.getElementsByClassName("c-gallery-tile");

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
