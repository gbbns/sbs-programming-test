window.localstorageItem = (function(undefined)  {
  "use strict";

  function saveLocalItem(imageLink) {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.setItem(imageLink, 'selected');
  }

  function loadLocalItem() {
    var localImageID = localStorage.getItem("FlickrGalleryImageID");

    if (!localImageID === null) {
      console.log('ImageID = ', localImageID);
      // hero.setAttribute("src", heroURL);
    }
  }

  function removeLocalItem(imageLink){
    window.localStorage.removeItem(imageLink);
  }

  return {
    saveItem: saveLocalItem,
    loadItem: loadLocalItem,
    removeItem: removeLocalItem
  };
})();
