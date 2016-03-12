function Store () {
		this.depaturePoint="default";
		this.destinationPoint="defult";
		this.startPoint="";
		this.endPoint="";
		this.startPointObj={};
		this.endPointObj={};
		this.travelForm1={};
		this.travelForm2={};
		this.chargeMarkers=[];
		this.trafficData=[];
		this.weatherData=[];
		this.trafficMarkers = [];
		this.weatherMarkers=[];
}

Store.prototype = {
	travelForm1:{},
	travelForm2:{},
	startPointObj:{},
	endPointObj:{},
	depaturePoint:"",
	destinationPoint:"",
	startPoint:"",
	endPoint:"",
	positionData:[],
	trafficData:[],
	weatherData:[],
	positionLayer:{
		chargeLayer:false,
		weatherLayer:false,
		trafficLayer:false
	},
	startPos: {},
	userPosition:{
		"x":"",
		"y":""
	},
	getPositionLayer:function getPositionLayer(){
		return this.positionLayer;
	},
	getDepaturePoint:function getDepaturePoint(){
		return this.depaturePoint;
	},
	getDestinationPoint:function getDestinationPoint() {
		return this.destinationPoint;
	},
	getChargePositionData:function getChargePositionData() {
		return this.positionData;
	},
	cleanDepaturePoint:function cleanDepaturePoint(){
		this.depaturePoint="";
	},
	cleanDestinationPoint:function cleanDestinationPoint(){
		this.destinationPoint="";
	},
	cleanChargePositionData:function cleanChargePositionData(){
		this.positionData=[];
	},
};