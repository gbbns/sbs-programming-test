import chai from 'chai';
chai.should();

var assert = chai.assert;
var expect = chai.expect;

import clientMain from '../build/assets/scripts/main.js';

describe('Flickr API test', function() {

  // var galleryContainer = document.getElementById('flickr-gallery');

  var galleryContainer = '#flickr-gallery';

  it('should check gallery container exists', function() {
    expect(galleryContainer).to.not.equal(null);
  });

  it('should be able to create a new image tile', function(){
  });

  it('should be able to add data to localstorage', function(){
  });

  it('should return valid data', function(){
  });

  it('should check if item is favourited', function(){
  });
});
