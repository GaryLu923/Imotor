function API(){


}
API.prototype={
	// body...
	getPosition:function getPosition(){

	},
	getWeather:function getWeather(){
		return $.get('/hello/getWeatherDataSet', function(data) {
			console.log(data);
		},"json");
	},
	getVDSpeed:function getVDSpeed(){
		return $.get('/hello/getVDSpeedDataSet', function(data) {
		},"json");
	},
	getMotorInfo:function getMotorInfo(){
		return $.get('/path/to/file', function(data) {
		},"json");
	},
	getChargeInfo:function	getChargeInfo(){
		return $.get('/json/charge.json', function(data) {
		},"json");
	}
};