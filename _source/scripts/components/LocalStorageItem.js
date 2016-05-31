window.localstorageItem = (function(undefined)  {
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

  function removeLocalItem(imageLink){
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
})();
