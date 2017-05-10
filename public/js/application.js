$(document).ready(function() {
  let iconURLs = {
    hotel: '../public/images/lodging_0star.png',
    restaurant: '../public/images/restaurant.png',
    activity: '../public/images/star-3.png'
  };
  for(let i = 0; i < hotels.length; i++){
    $('#hotel-choices').append('<option>' + hotels[i].name + '</option>');
    $('#restaurant-choices').append('<option>' + restaurants[i].name + '</option>');
    $('#activity-choices').append('<option>' + activities[i].name + '</option>');
  }
  //Add to itinerary button
  $('.btn-primary').on('click', function(){
    let id = $(this).siblings('select').attr('id');
    let type = $(this).siblings('select').attr('data-type');
    let option = $(this).siblings('select').val();
    if(type === 'hotel'){
      if($('#' + id + '-itinerary').children().length) $('#' + id + '-itinerary .title').text(option);
      else{
        $('#' + id + '-itinerary').append(
        '<div class="itinerary-item">' +
        '<span class="title">' + option + '</span>' +
        '<button class="btn btn-xs btn-danger remove btn-circle">' + 'x' + '</button>' +
        '</div>'
        );
      }
    }
    else{
      $('#' + id + '-itinerary').append(
      '<div class="itinerary-item">' +
      '<span class="title">' + option + '</span>' +
      '<button class="btn btn-xs btn-danger remove btn-circle">' + 'x' + '</button>' +
      '</div>'
      );
    }


    //drawMarker(type, hotels[0].place.location);
  });
  //Remove itinerary button
  $('#itinerary').on('click', '.remove', function(){
    $(this).parent().remove();
  });
  //Add days button
  $('#day-add').on('click', function(){
    index++;
    let newButton = '<button class="btn btn-circle day-btn day-num">' + index + '</button>';
    $('#day-add').before(newButton);
    $('#day-title span').text('Day ' + index);
    let dayInstance = {
      hotel: $('#hotel-choices-itinerary .title').text(),
      restaurant: $('#restaurant-choices-itinerary .title').text(),
      activity: $('#activity-choices-itinerary .title').text()
    }
    arrayOfDays.push(dayInstance);
    $('.list-group div').remove();

  });
  //Remove days button
  $('#day-title').on('click', '.remove', function(){
    $(this).siblings().remove();
  });
  //Switch days buttons
  $('.day-num').on('click', function(){
    let day = $(this).text();
    let dayInstance = arrayOfDays[parseInt(day) -1];
    $('#hotel-choices-itinerary').empty().append(
        '<div class="itinerary-item">' +
        '<span class="title">' + dayInstance.hotel + '</span>' +
        '<button class="btn btn-xs btn-danger remove btn-circle">' + 'x' + '</button>' +
        '</div>'
      );
    $('#restaurant-choices-itinerary').empty().append(
        '<div class="itinerary-item">' +
        '<span class="title">' + dayInstance.restaurant + '</span>' +
        '<button class="btn btn-xs btn-danger remove btn-circle">' + 'x' + '</button>' +
        '</div>'
      );
    $('#activity-choices-itinerary').empty().append(
        '<div class="itinerary-item">' +
        '<span class="title">' + dayInstance.activity + '</span>' +
        '<button class="btn btn-xs btn-danger remove btn-circle">' + 'x' + '</button>' +
        '</div>'
      );
  })

  // function drawMarker (type, coords) {
  //   var latLng = new google.maps.LatLng(coords[0], coords[1]);
  //   var iconURL = iconURLs[type];
  //   var marker = new google.maps.Marker({
  //     icon: iconURL,
  //     position: latLng
  //   });
  //   marker.setMap(currentMap);
  // }

});
// function drawMarker (type, coords) {
//   var latLng = new google.maps.LatLng(coords[0], coords[1]);
//   var iconURL = iconURLs[type];
//   var marker = new google.maps.Marker({
//     icon: iconURL,
//     position: latLng
//   });
//   marker.setMap(currentMap);
// }
