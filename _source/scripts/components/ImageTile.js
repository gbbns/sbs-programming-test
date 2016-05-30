window.ImageTile = (function(undefined)  {
  "use strict";

  function createTile(data){

    var tile = getTileData(data);
    tile = buildTile(tile);

    return tile;
  }

  function getTileData(passedData){
    var data = passedData;
    var tileData = {};

    tileData.title = cleanData(data.title);
    tileData.description = cleanData(data.description);
    tileData.thumb = cleanImage(data.media.m);
    tileData.link = cleanData(data.link);

    return tileData;
  }

  function cleanImage(dataItem){
    var tileInfo = dataItem;

    if(!tileInfo){
      tileInfo = 'http://placehold.it/350x150';
    }
    return tileInfo;
  }

  function cleanData(dataItem){
    var tileInfo = dataItem;

    if(!tileInfo){
      tileInfo = 'Not provided';
    }
    return tileInfo;
  }

  function buildTile(data){
    var newTile;
    var buildTileInfo = data;

    newTile = '<div class="c-gallery-tile">' +
                '<img data-id="'+ buildTileInfo.link +'" src="' + buildTileInfo.thumb + '" alt="' + buildTileInfo.title + '" />' +
              '</div>';

    return newTile;
  }

  return {
    createTile: createTile
  };
})();
