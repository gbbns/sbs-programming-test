'use strict';

window.FlickrGallery = function (undefined) {
  "use strict";

  var GalleryStage = 'flickr-gallery';

  var GALLERY_TILE = 'c-gallery-tile',
      SELECTED_CLASS = 'is-selected';

  function init(data) {

    if (!document.getElementById(GalleryStage)) {
      return;
    }

    setupGallery(data);
    addListeners();
  }

  function setupGallery(data) {
    // process data
    window.GalleryReader.init(data);
  }

  function addListeners() {
    var galleryEl = document.getElementsByClassName(GALLERY_TILE);

    for (var i = 0; i < galleryEl.length; i++) {
      galleryEl[i].addEventListener("click", handleItemClick);
    }
  }

  function handleItemClick(event) {
    event.preventDefault();

    var clickedItemClass = event.target.className;
    var clickedItemDataID = event.target.dataset.id;

    if (event.target.className === SELECTED_CLASS) {
      window.localstorageItem.removeItem(clickedItemDataID);
      event.target.className = '';
    } else {
      window.localstorageItem.saveItem(clickedItemDataID);
      event.target.className += SELECTED_CLASS;
    }
  }

  return {
    init: init
  };
}();
"use strict";

window.GalleryReader = function (undefined) {
  "use strict";

  var dataLength;
  var GalleryStage = 'flickr-gallery';

  function init(data) {
    dataLength = data.items.length;
    getImageData(data);
  }

  function getImageData(data) {
    for (var i = 0; i < dataLength; i++) {
      var imageTileInfo = window.ImageTile.createTile(data.items[i]);
      displayImageTile(imageTileInfo);
    }
  }

  function displayImageTile(imageTileInfo) {

    var galleryStageEl = document.getElementById(GalleryStage);
    galleryStageEl.innerHTML += imageTileInfo;
  }

  return {
    init: init
  };
}();
'use strict';

window.ImageTile = function (undefined) {
  "use strict";

  function createTile(data) {

    var tile = getTileData(data);
    tile = buildTile(tile);

    return tile;
  }

  function getTileData(passedData) {
    var data = passedData;
    var tileData = {};

    tileData.title = cleanData(data.title);
    tileData.description = cleanData(data.description);
    tileData.thumb = cleanImage(data.media.m);
    tileData.link = cleanData(data.link);

    return tileData;
  }

  function cleanImage(dataItem) {
    var tileInfo = dataItem;

    if (!tileInfo) {
      tileInfo = 'http://placehold.it/350x150';
    }
    return tileInfo;
  }

  function cleanData(dataItem) {
    var tileInfo = dataItem;

    if (!tileInfo) {
      tileInfo = 'Not provided';
    }
    return tileInfo;
  }

  function buildTile(data) {
    var newTile;
    var buildTileInfo = data;
    var buildTileCSS = window.localstorageItem.loadItem(buildTileInfo.link);

    newTile = '<div class="c-gallery-tile">' + '<img class="' + buildTileCSS + '" data-id="' + buildTileInfo.link + '" src="' + buildTileInfo.thumb + '" alt="' + buildTileInfo.title + '" />' + '</div>';

    return newTile;
  }

  return {
    createTile: createTile
  };
}();
"use strict";

window.localstorageItem = function (undefined) {
  "use strict";

  function saveLocalItem(imageLink) {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.setItem(imageLink, 'selected');
  }

  function loadLocalItem(imageLink) {
    if (!window.localStorage) {
      return;
    }

    var cssClass = "";

    var localImageID = window.localStorage.getItem(imageLink);

    if (localImageID) {
      cssClass = "is-selected";
    }

    return cssClass;
  }

  function removeLocalItem(imageLink) {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.removeItem(imageLink);
  }

  return {
    saveItem: saveLocalItem,
    loadItem: loadLocalItem,
    removeItem: removeLocalItem
  };
}();