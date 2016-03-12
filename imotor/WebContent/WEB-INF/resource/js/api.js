function API(){
	charge=this.getChargeInfo();
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
		return $.get('/hello/getImotorDataSet', function(data) {
		},"json");
	},
	getChargeInfo:function	getChargeInfo(){
		// return $.get('/json/charge.json', function(data) {
		// },"json");
			$.ajax({
                method: "GET",
                url: "/json/charge.json",
                data: {},
                dataType: "json"
        }).done(function( data ) {
                store.positionData = data;
        });
	}
};