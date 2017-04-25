$(document).ready(function() {


 $('form').submit(function (event) {
   event.preventDefault();
   var $searchField = $('#search');
   var $submitButton = $('#submit');

   $searchField.prop(disabled, true);
   $submitButton.prop(disabled, true).val(searching....);
   
     the AJAX part
    var flickerAPI = httpapi.flickr.comservicesfeedsphotos_public.gnejsoncallback=;
    var searchTerm =  $searchField.val();
    var flickrOptions = {
      tags searchTerm,
      format json
    };
    function displayPhotos(data) {
      var photoHTML = 'ul';
      $.each(data.items,function(i,photo) {
        photoHTML += 'li class=grid-25 tablet-grid-50';
        photoHTML += 'a href=' + photo.link + ' class=image';
        photoHTML += 'img src=' + photo.media.m + 'ali';
      });  end each
      photoHTML += 'ul';
      $('#photos').html(photoHTML);
      $searchField.prop(disabled, false);
      $submitButton.prop(disabled, false).val(Search);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });  end click

});  end ready