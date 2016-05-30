window.localstorageItem = (function(undefined)  {
  "use strict";

  function saveLocalItem(imageLink) {
    if (!window.localStorage) {
      return;
    }

    localStorage.setItem('FlickrGalleryImageID', imageLink);
  }

  function loadLocalItem() {

  }

  return {
    saveItem: saveLocalItem,
    loadItem: loadLocalItem
  };
})();
