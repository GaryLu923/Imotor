function Store () {
		this.depaturePoint="default";
		this.destinationPoint="defult";
		this.startPoint="";
		this.endPoint="";
		this.startPointObj={};
		this.endPointObj={};
		this.travelForm1={};
		this.travelForm2={};
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
	startPos: {},
	userPosition:{
		"x":"",
		"y":""
	},
	getDepaturePoint:function getDepaturePoint(){
		return this.depaturePoint;
	},
	getDestinationPoint:function getDestinationPoint() {
		return this.destinationPoint;
	},
	getPositionData:function getPositionData() {
		return this.positionData;
	},
	cleanDepaturePoint:function cleanDepaturePoint(){
		this.depaturePoint="";
	},
	cleanDestinationPoint:function cleanDestinationPoint(){
		this.destinationPoint="";
	},
	cleanPositionData:function cleanPositionData(){
		this.positionData=[];
	},
};