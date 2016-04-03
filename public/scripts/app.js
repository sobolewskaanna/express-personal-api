console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var profilesSource   = $("#profiles-template").html();
  var profilesTemplate = Handlebars.compile(profilesSource);

  $.ajax({
    method: 'GET',
    url: '/profile',
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

});
