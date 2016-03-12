function Store () {
		this.depaturePoint="default";
		this.destinationPoint="defult";
		this.startPoint="";
		this.endPoint="";
		this.startPointObj={};
		this.endPointObj={};
		this.travelForm1={};
		this.travelForm2={};
		this.weatherData=[];
		this.trafficData=[];
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
	weatherData:[],
	trafficData:[],
	positionData:[],
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
var store=new Store;