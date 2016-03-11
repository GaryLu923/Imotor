var Grid=ReactBootstrap.Grid;
var Row=ReactBootstrap.Row;
var Col=ReactBootstrap.Col;
var Button=ReactBootstrap.Button;
var ButtonInput=ReactBootstrap.ButtonInput;
var Input=ReactBootstrap.Input;
var Glyphicon=ReactBootstrap.Glyphicon;

var Title=React.createClass({displayName: "Title",
	getInitialState:function() {
		return {travelForm1: this.refs.travelForm1};
	},
	componentDidMount:function(){
			console.log(this.props);
			// this.props.Store.travelForm1 = this.refs.travelForm1;
			this.props.Store.travelForm2 = this.refs.travelForm2;
			this.setState({travelForm1: this.refs.travelForm1});
	}, 
	render:function(){
			var divStyle = {
			height:'100%',
			color: 'white',
			WebkitTransition: 'all', // note the capital 'W' here
			msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		};
		return (
		
				React.createElement(Grid, {className: "col-xs-12 col-md-12 col-lg-12"}, 
					React.createElement(Row, null, 
						React.createElement(Col, {xs: 2, md: 1}, 
							React.createElement(MenuButton, null)
						), 					
						React.createElement(Col, {xs: 10, md: 11}, 
							React.createElement("h1", null, "NewTaipeiHackthon")
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(TravelForm, {Store: this.props.Store, ref: "travelForm1"}), 
							React.createElement(TravelForm, {Store: this.props.Store, ref: "travelForm2"})
				
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(SubmitAndResetForm, {Store: this.props.Store})
						), 
						React.createElement(Col, {style: divStyle, xs: 12, md: 12}, 
							React.createElement(MapComponent, {state: this.state, Store: this.props.Store})
						)
					)
				)
		);
	}
});

var MenuButton=React.createClass({displayName: "MenuButton",
	render:function(){
		return( 
				React.createElement(Button, {bsSize: "large", className: "menuButton"})
		);
	}
});

var MapComponent=React.createClass({displayName: "MapComponent",
	getUserGPS:function(){
			console.log("Getting USER GPS...");
	},
	getDefaultProps: function () {
    //		mapCenterLat: this.props.store.startPos.coords.latitude,
	//		mapCenterLng: -113.4073126
    
    	//console.log ("getDefaultProps store.startPos.coords:"+store.startPos.coords.latitude);
//			mapCenterLat: store.startPos.coords.latitude,
//			mapCenterLng: store.startPos.coords.longitude

		var nowPos;
		var geoSuccess = function(position) {
				nowPos = position;

				console.log ("gps success latitude 123:"+nowPos.coords.latitude);
				console.log ("gps success longitude 123:"+nowPos.coords.longitude);
			};
			var errorCallback = function() {
				console.log ("gps error");
			};
			navigator.geolocation.getCurrentPosition(geoSuccess,errorCallback);
	        
	        return {
				initialZoom : 8
//				mapCenterLat: parseFloat(nowPos.coords.latitude),
//				mapCenterLng: parseFloat(nowPos.coords.longitude)
//					mapCenterLat: ,
//					mapCenterLng: 

	        };

    },
    componentWillMount: function() {
    	console.log ("ComponentWillMount: "+this.props.lat+"\t"+this.props.lng);
    },
    componentDidMount: function (rootNode) {

    	console.log ("ComponentDidMount");
 		var nowPos;
 		var temp = this;
// 		temp.getDOMNode()
		var infowindow = new google.maps.InfoWindow();

		var geoSuccess = function(position) {
				nowPos = position;

				console.log ("gps success latitude 123:"+nowPos.coords.latitude);
				console.log ("gps success longitude 123:"+nowPos.coords.longitude);

		        var mapOptions = {
		        	mapTypeId: google.maps.MapTypeId.ROADMAP,
		            zoom: 16

		    	};
		        var map = new google.maps.Map(temp.getDOMNode(), mapOptions); 
//				var geoJsonURL ='/charge.json';



				map.data.forEach(function(feature) {
					//If you want, check here for some constraints.
					map.data.remove(feature);

				});
				//map.data.loadGeoJson(geoJsonURL);

		        var centerM = new google.maps.LatLng(nowPos.coords.latitude, nowPos.coords.longitude);
		        map.setCenter(centerM);
		        var imageM = "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300-rw";
				var markerM = new google.maps.Marker({icon: imageM ,position: centerM, map:map, title: sta});
					
		        
				var cityCircle = new google.maps.Circle({
					strokeColor: '#FF0000',
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: '#FF0000',
					fillOpacity: 0.35,
					map: map,
					center: centerM,
					radius: 500
				});

//		        var markerx = new google.maps.Marker({position: centerM, title: 'Hi', map: map});
		        temp.setState({map: map});
				var geoJSONStr = "{\"type\":\"FeatureCollection\",\"features\":\[";
				

				for(i=0;i<store.positionData.length;i++) {
//		//			response.responseJSON;  
		//			console.log(i+"\t"+JSON.stringify(store.positionData[i]));
		//			console.log(i+"\t"+JSON.stringify(store.positionData[i].wgs84aX));
		//			console.log(i+"\t"+JSON.stringify(store.positionData[i].wgs84aY));

					var lat = store.positionData[i].wgs84aX;
					var lng = store.positionData[i].wgs84aY; 
					var sta = store.positionData[i].sta; 

		//			geoJSONStr = geoJSONStr + "{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":";
		//			geoJSONStr = geoJSONStr + "\["+lat+","+lng+"\]";
		//			geoJSONStr = geoJSONStr + "},\"properties\": {\"sta\": \""+sta+"\"}}";
				
					if (i<store.positionData.length-1) {
						geoJSONStr = geoJSONStr +",";
					}
					var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
					var marker;
					if (i==246) {
						var imageNEAR = "http://a.bbkz.net/guide/images/f/fa/ICON%E9%96%83%E9%9B%BB.png";
						var marker = new google.maps.Marker({icon: imageNEAR, position: LatLngX, map:map, title: sta});
					} else {
						var plug = "http://findicons.com/files/icons/1672/mono/32/plug.png";
						marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});
					}
					google.maps.event.addListener(marker, 'click', (function(mm, tt) {
					    return function() { 
							console.log ("title:"+tt);
					       
							infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
					        infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
							 infowindow.open(map, mm);
							store.startPoint = tt;
							store.endPoint = tt;
							temp.props.state.travelForm1.change();
							// temp.props.Store.travelForm1.change();
							//{startPoint:'5678'});
					    }
					})(marker, store.positionData[i].sta));


					console.log ("XXXX marker "+i+" : "+marker);
				}
				geoJSONStr = geoJSONStr + "]}";
				console.log ("GeoJSON:"+geoJSONStr);


			};
			var errorCallback = function() {
				console.log ("gps error");
			};
			navigator.geolocation.getCurrentPosition(geoSuccess,errorCallback);
			// console.log ('travelForm:'+this.props.Store.travelForm);

			// this.props.Store.travelForm.setState({startPoint:'5678'});			
				// var bikeLayer = new google.maps.BicyclingLayer();
				// bikeLayer.setMap(map);
				// var transitLayer = new google.maps.TransitLayer();
				// transitLayer.setMap(map);
				// var trafficLayer = new google.maps.TrafficLayer();
 			// 	trafficLayer.setMap(map);

//		var centerLocation = new google.maps.LatLng(parseFloat(this.props.store.startPos.coords.latitude),parseFloat(this.props.store.startPos.coords.longitude));
//		var centerLocation = new google.maps.LatLng(this.props.store.startPos.coords.latitude, this.props.store.startPos.coords.longiude);
	 	//this.props.store.startPos.coords;
  
//		console.log("centerLocation:"+store.startPos.coords);
        
//            center: this.mapCenterLatLng(),
		

    },
    mapCenterLatLng: function () {
        var props = this.props;
        return 
    }, 
    render: function () { 
    	
		var divStyle = {
			height:'600px',
			color: 'white',
			WebkitTransition: 'all', // note the capital 'W' here
			msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		};

        return (
            React.createElement("div", {style: divStyle, className: "map"})
        );
    }
});

var TravelForm = React.createClass({displayName: "TravelForm",
	getInitialState:function() {
		return {startPoint:'1234',endPoint:'222'};
	},
	setText:function(tt) {
		this.setState({startPoint: tt});
	},
	change:function(){
		this.setState({startPoint:this.props.Store.startPoint});
		this.setState({endPoint:this.props.Store.endPoint});
	},
	startPointChange:function() {
		// this.setState({startPoint: this.props.stroe.startPoint});
		this.setState({startPoint: this.state.startPoint});
	},
	endPointChange: function() {
		// this.setState({endPoint: this.props.stroe.endPoint});
		this.setState({startPoint: this.state.endPoint});
	},
	componentDidMount:function(){
		this.props.Store.startPointObj = this.refs.startPoint;
		this.props.Store.endPointObj = this.refs.endPoint;
		console.log ("startPointObj:"+this.props.Store.startPointObj);
		console.log ("endPointObj:"+this.props.Store.endPointObj);
		console.log(this.props.store);		
	},
	render:function() {

		return (
			React.createElement("div", {className: "travelFrom"}, 
				React.createElement(Col, {xs: 12, md: 6}, 
					React.createElement(Input, {onChange: this.change, value: this.state.startPoint, ref: "startPoint", type: "text", label: "Depature point", placeholder: "Enter text"})
				), 
				React.createElement(Col, {xs: 12, md: 6}, 
					React.createElement(Input, {onChange: this.change, value: this.state.endPoint, ref: "endPoint", type: "text", label: "Destination point", placeholder: "Enter text"})
				)
			)
		);
	}
});

var SubmitAndResetForm=React.createClass({displayName: "SubmitAndResetForm",
	getResetTriggerText:function(){
		var test=this.props.store.depaturePoint;
		return test+"_Reset Depature point and Destination point";
	},
	getSubmitTriggerText:function() {
		return "Submit Depature point and Destination point";
	},
	render:function() {
		return (
			React.createElement("div", null, 
				React.createElement(Col, {xs: 6, md: 6}, 
						React.createElement(ButtonInput, {bsSize: "large", bsStyle: "danger", type: "reset", value: "reset"})
				), 

				React.createElement(Col, {xs: 6, md: 6}, 
						React.createElement(ButtonInput, {bsSize: "large", bsStyle: "success", type: "submit", value: "submit"})	
				)
			)
		);
	}
});
