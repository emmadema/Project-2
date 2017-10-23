console.log("JS is working");

/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */



$(document).ready(function() {
    console.log('app.js loaded!');
    $.get('/addClothing.ejs').success(function (clothing) {
     	clothing.forEach(function(clothing) {
        renderClohting(clothing);
      });
    });


    $('#clothing-form form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/addClothing.ejs', formData, function(clothing) {
        console.log('clothing after POST', clothing);
        renderAlbum(album);  //render the server's response
      });
        $(this).trigger("reset");
    });

  function renderClothing(clothing) {
    console.log('rendering clothing: ', clothing);

    var clothingHtml =
    "        <!-- one clothing -->" +
    "        <div class='row clothing' data-clothing-id='" + clothing._id + "'>" +
    "          <div class='col-md-10 col-md-offset-1'>" +
    "            <div class='panel panel-default'>" +
    "              <div class='panel-body'>" +
    "              <!-- begin clothing internal row -->" +
    "                <div class='row'>" +
    "                  <div class='col-md-3 col-xs-12 thumbnail clothing-art'>" +
    "                     <img src='" + "http://placehold.it/400x400'" +  " alt='clothing image'>" +
    "                  </div>" +
    "                  <div class='col-md-9 col-xs-12'>" +
    "                    <ul class='list-group'>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Name:</h4>" +
    "                        <span class='clothing-name'>" + clothing.typeOf + "</span>" +
    "                      </li>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Season:</h4>" +
    "                        <span class='artist-name'>" + clothing.season+ "</span>" +
    "                      </li>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Color: </h4>" +
    "                        <span class='clothing-name'>" + clothing.color+ "</span>" +
    "                      </li>" +
    "                    </ul>" +
    "                  </div>" +
    "                </div>" +
    "                <!-- end of clothing internal row -->" +

    "              </div>" + // end of panel-body

    "              <div class='panel-footer'>" +
    "                <button class='btn btn-primary add-clothing'>Add Clothing Item</button>" +
    "              </div>" +

    "            </div>" +
    "          </div>" +
    "          <!-- end one item-->";

    $('#clothing').prepend(clothingHtml);
  }
});