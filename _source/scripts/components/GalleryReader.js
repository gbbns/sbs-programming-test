window.GalleryReader = (function(undefined)  {
  "use strict";

  var dataLength;
  var GalleryStage = 'flickr-gallery';

  function init(data){
    dataLength = data.items.length;
    getImageData(data);
  }

  function getImageData(data){
    for (var i = 0; i < dataLength; i++) {
      var imageTileInfo = window.ImageTile.createTile(data.items[i]);
      displayImageTile(imageTileInfo);
    }
  }

  function displayImageTile(imageTileInfo){

    var galleryStageEl = document.getElementById(GalleryStage);
    galleryStageEl.innerHTML += imageTileInfo;
  }

  return {
    init: init
  };
})();
