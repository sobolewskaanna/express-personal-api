console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  //profile template
  var profilesSource   = $("#profiles-template").html();
  var profilesTemplate = Handlebars.compile(profilesSource);
  //restaurants template
  var restaurantsSource   = $("#restaurants-template").html();
  var restaurantsTemplate = Handlebars.compile(restaurantsSource);

  $.ajax({
    method: 'GET',
    url: '/profiles',
    dataType: 'json',
    success: onProfileSuccess,
    error: onError
  });

  function onProfileSuccess(data) {
    var profilesHTML = profilesTemplate({profiles: data});
    $('#profiles').append(profilesHTML);
  }

  function onError(error) {
    console.log('didn\'t find shit');
  }

  $.ajax({
    method: 'GET',
    url: '/restaurants',
    dataType: 'json',
    success: onRestaurantSuccess,
    error: onError
  });

  function onRestaurantSuccess(data) {
    var restaurantsHTML = restaurantsTemplate({restaurants: data});
    $('#restaurants').append(restauratsHTML);
  }

});
