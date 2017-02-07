// this is a function to require API hide on browserSync
var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;
var apiKey = "YOUR-API-KEY-GOES-HERE";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
// this is a function to call the weather and merge it together
$(document).ready(function() {
  var currentWeatherObject = new Weather();
  currentWeatherObject.getWeather();
exports.weatherModule = Weather;
