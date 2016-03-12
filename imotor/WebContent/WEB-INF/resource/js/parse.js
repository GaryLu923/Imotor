var store=new Store;
var api=new API;
$.ajax({
    method: "GET",
    url: "/json/charge.json",
    data: {},
    dataType: "json"
}).done(function( data ) {
    store.positionData = data;
});

$.ajax({
    method: "GET",
    url: "/hello/getWeatherDataSet",
    data: {},
    dataType: "json"
}).done(function( data ) {
    store.weatherData = data;
});
$.ajax({
    method: "GET",
    url: "/hello/getVDSpeedDataSet",
    data: {},
    dataType: "json"
}).done(function( data ) {
    store.trafficData = data;
});