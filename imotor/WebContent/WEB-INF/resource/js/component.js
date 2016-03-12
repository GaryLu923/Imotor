
var Grid=ReactBootstrap.Grid;
var Row=ReactBootstrap.Row;
var Col=ReactBootstrap.Col;
var Button=ReactBootstrap.Button;
var ButtonToolbar=ReactBootstrap.ButtonToolbar;
var ButtonInput=ReactBootstrap.ButtonInput;
var Input=ReactBootstrap.Input;
var Glyphicon=ReactBootstrap.Glyphicon;
var Navbar=ReactBootstrap.Navbar;
var NavItem=ReactBootstrap.NavItem;
var Nav=ReactBootstrap.Nav;
var tempMap;
var directionsService = new google.maps.DirectionsService;  
var directionsDisplay = new google.maps.DirectionsRenderer;


var Title=React.createClass({displayName: "Title",
	getInitialState:function() {
		return {travelForm1: this.refs.travelForm1};
	},
	componentDidMount:function(){
			window.addEventListener('scroll', this.handleScroll);
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
			var paddingTopStyle = {
				paddingTop: '12%'
			};
			var paddingMotorStyle = {
				paddingTop: '12%',
				paddingLeft: '16%'
			};
			var paddingHeightTopLeftStyle = {
				height: '100%',
				paddingTop: '920px',	
				paddingLeft: '8%' 
			};
			var paddingWeatherStyle = {
				paddingTop: '12%',
				paddingLeft: '15%'		
			};
			var paddingTrafficStyle = {
				paddingTop: '12%',
				paddingLeft: '15%'		
			};
			var paddingChargeStyle = {
				width:'100%',
				paddingTop: '12%',
				paddingLeft: '15%'		
			};

		return (		
				React.createElement(Grid, {className: "col-xs-12 col-md-12 col-lg-12"}, 
					React.createElement(Row, null, 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(ThemeImg, null)
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(MenuBar, null)
						), 
						React.createElement("div", {style: paddingHeightTopLeftStyle}, 
						React.createElement(Col, {xs: 11, md: 11}, 
							React.createElement(IntroImg, null)
						)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement("div", {style: paddingMotorStyle}, 
							React.createElement(MotorImg, null)
							)
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(Imotor, null)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 10, md: 10}, 
							React.createElement("div", {style: paddingTopStyle}, 
							React.createElement(PathImg, null)
							)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 11, md: 11}, 
							React.createElement("div", {style: paddingWeatherStyle}, 
							React.createElement(WeatherImg, null)
							)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 11, md: 11}, 
							React.createElement("div", {style: paddingTrafficStyle}, 
							React.createElement(TrafficImg, null)
							)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 11, md: 11}, 
							React.createElement("div", {style: paddingChargeStyle}, 
							React.createElement(ChargeImg, null)
							)
							
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement("div", {style: paddingTopStyle}, 
							React.createElement(TravelForm, {Store: this.props.Store, ref: "travelForm1"})			
							)
						), 
						
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(SubmitAndResetForm, {Store: this.props.Store})
						), 
						React.createElement("div", {className: ""}, 
							React.createElement(Col, {style: divStyle, xs: 12, md: 10}, 
								React.createElement(MapComponent, {state: this.state, Store: this.props.Store})
							), 
							React.createElement(Col, {xs: 12, md: 2}, 
								React.createElement(MapSwitcher, {Store: this.props.Store})
							)
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

var MenuBar=React.createClass({displayName: "MenuBar",
	changePicture:function(){
		console.log("Item1");
		this.getDOMNode().children();
	},
	clickMethod:function(name,event){
		if(name=="Home"){
			 console.log(this.getDOMNode());
				$(this.getDOMNode()).animate({
        			scrollTop: $("#fatorImg").offset().top
    			}, 500);	
			}else if(name=="Imotor"){
				$(this.getDOMNode()).animate({
        			scrollTop: $("#fatorImg").offset().top
    			}, 600);	
			}else if(name =="Path"){
				$(this.getDOMNode()).animate({
        			scrollTop: $("#pathImg").offset().top
    			}, 6000);	
			}else if(name=="Demo"){
				$(this.getDOMNode()).animate({
        			scrollTop: $("#demoImg").offset().top
    			}, 500);	
			}else if(name=="Fator"){
				$(this.getDOMNode()).animate({
        			scrollTop: $("#fatorImg").offset().top
    			}, 500);	
			}
	},
	render:function(){		
		var Home="Home";
		var Imotor="Imotor";
		var Path="Path";
		var Fator="Fator";
		var Demo="Demo";
		var navBtnStyleCenter = {
			paddingTop:'55px'
		}; 
		return (
			React.createElement("div", {className: "navBar"}, 
				React.createElement(Nav, null, 
					React.createElement(NavItem, {style: navBtnStyleCenter, className: "itemHome", onClick: this.clickMethod.bind(this,Home)}), 
					React.createElement(NavItem, {style: navBtnStyleCenter, className: "itemImotor", onClick: this.clickMethod.bind(this,Imotor)}), 
					React.createElement(NavItem, {style: navBtnStyleCenter, className: "itemPath", onClick: this.clickMethod.bind(this,Path)}), 
					React.createElement(NavItem, {style: navBtnStyleCenter, className: "itemFator", onClick: this.clickMethod.bind(this,Fator)}), 
					React.createElement(NavItem, {style: navBtnStyleCenter, className: "itemDemo", onClick: this.clickMethod.bind(this,Demo)})
				)
			)
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

			tempMap = map;

				map.data.forEach(function(feature) {
					//If you want, check here for some constraints.
					map.data.remove(feature);

				});
				//map.data.loadGeoJson(geoJsonURL);

		        var centerM = new google.maps.LatLng(nowPos.coords.latitude, nowPos.coords.longitude);
		        map.setCenter(centerM);
		        var	imageM="../resource/img/localtionICON.png"; 
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
				
				/*charge position data*/
				for(i=0;i<store.positionData.length;i++) {
					var lat = store.positionData[i].wgs84aX;
					var lng = store.positionData[i].wgs84aY; 
					var sta = store.positionData[i].sta; 

					console.log ("store.positionData["+i+"]:"+JSON.stringify(store.positionData[i]));	
					if (i<store.positionData.length-1) {
						geoJSONStr = geoJSONStr +",";
					}
					var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
					var marker;
					if (i==246) {
						var imageNEAR = "http://a.bbkz.net/guide/images/f/fa/ICON%E9%96%83%E9%9B%BB.png";
						var marker = new google.maps.Marker({icon: imageNEAR, position: LatLngX, map:map, title: sta});
					} else {
						var plug="../resource/img/chargeICON.png";
						marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});
					}


					google.maps.event.addListener(marker, 'click', (function(mm, tt, wgs84aX, wgs84aY) {
					    return function() { 
							console.log ("title:"+tt); 
					        		
							infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
					        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
							infowindow.open(map, mm);
							store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
//							store.endPoint = tt;
							store.endPoint= wgs84aY+","+wgs84aX;

							temp.props.state.travelForm1.change();
							// temp.props.Store.travelForm1.change();
							//{startPoint:'5678'});
					    }
					})(marker, store.positionData[i].sta, store.positionData[i].wgs84aX, store.positionData[i].wgs84aY));


					console.log ("XXXX marker "+i+" : "+marker);
				}
				/*charge weather data*/
				for(i=0;i<store.weatherData.length;i++){
					var lat = store.weatherData[i].wgs84aX;
					var lng = store.weatherData[i].wgs84aY; 
					var sta = store.weatherData[i].sta; 
					var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
					var marker;
					var plug="../resource/img/weather2ICON.png";
						marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});


					google.maps.event.addListener(marker, 'click', (function(mm, tt, wgs84aX, wgs84aY) {
					    return function() { 
							console.log ("title:"+tt); 
					        		
							infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
					        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
							infowindow.open(map, mm);
							store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
//							store.endPoint = tt;
							store.endPoint= wgs84aY+","+wgs84aX;

							temp.props.state.travelForm1.change();
							// temp.props.Store.travelForm1.change();
							//{startPoint:'5678'});
					    }
					})(marker, store.weatherData[i].sta, store.weatherData[i].wgs84aX, store.weatherData[i].wgs84aY));

				}
				/* Traffic Data*/
				for(i=0;i<store.trafficData.length;i++){
					var lat = store.trafficData[i].endwgsx;
					var lng = store.trafficData[i].endwgsy; 
					var name = store.trafficData[i].sectionname;
					var avgspd=store.trafficData[i].avgspd; 
					var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
					var marker;
					var plug;
					var plugHigh="../resource/img/traffic1ICON.png";
					var plugMedium="../resource/img/traffic2ICON.png";
					var plugLow="../resource/img/traffic3ICON.png";
						if(avgspd<20){
							plug=plugLow;
						}else if(avgspd>=20&&avgspd<=30){
							plug=plugMedium;
						}else if(avgspd>=30){
							plug=plugHigh;
						}					
						marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});


					google.maps.event.addListener(marker, 'click', (function(mm, tt, endwgsx, endwgsy) {
					    return function() { 
							console.log ("title:"+tt); 
					        		
							infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
					        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
							infowindow.open(map, mm);
							store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
							//	store.endPoint = tt;
							// store.endPoint= wgs84aY+","+wgs84aX;

							temp.props.state.travelForm1.change();
							// temp.props.Store.travelForm1.change();
							//{startPoint:'5678'});
					    }
					})(marker, store.trafficData[i].sectionname,store.trafficData[i].endwgsx, store.trafficData[i].endwgsy,store.trafficData[i].avgspd));

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
					React.createElement(Input, {onChange: this.change, value: this.state.startPoint, ref: "startPoint", type: "text", label: "Depature point(經緯度)", placeholder: "Enter text"})
				), 
				React.createElement(Col, {xs: 12, md: 6}, 
					React.createElement(Input, {onChange: this.change, value: this.state.endPoint, ref: "endPoint", type: "text", label: "Destination point(經緯度)", placeholder: "Enter text"})
				)
			)
		);
	}
});

var SubmitAndResetForm=React.createClass({displayName: "SubmitAndResetForm",
	getDirection: function() { 
		var startCoord;
		var endCoord;
/*
		console.log ("start direction:"+store.startPoint+"\t"+store.endPoint);
//		var address = document.getElementById("address").value;
		var geocoder=new google.maps.Geocoder();
		geocoder.geocode( { 'address': store.startPoint}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				startCoord = results;
				// map.setCenter(results[0].geometry.location);
				// var marker = new google.maps.Marker({
				// 	map: map,
				// 	position: results[0].geometry.location
				// });
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
		geocoder.geocode( { 'address': store.endPoint}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				endCoord = results;
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
		console.log ('startCoord:'+startCoord);
		console.log ('endCoord:'+endCoord);
*/
		directionsDisplay.setMap(null);
		directionsDisplay.setDirections({routes:[]})
		var directionsRequest = {
			origin: store.startPoint,
			destination: store.endPoint,
			travelMode: google.maps.DirectionsTravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.METRIC
		};
		directionsService.route(directionsRequest, function (response, status) {
			console.log ("direction status:"+status);
			console.log ("direction response:"+response);

			if (status == google.maps.DirectionsStatus.OK) {           
				console.log (JSON.stringify(response));         
			//do work with response data
			} else {
				console.log (response);
			   //Error has occured
			}
		});
			directionsDisplay.setMap(tempMap);
			directionsService.route({
			                origin: store.startPoint,
			                destination: store.endPoint,
			                travelMode: google.maps.TravelMode.DRIVING
			        }, function(response, status) {
			                if (status === google.maps.DirectionsStatus.OK) {
			                directionsDisplay.setDirections(response);
			        } else {
			                window.alert('Directions request failed due to ' + status);
			        }
		});
	},
	getResetTriggerText:function(){   
		var test=this.props.store.depaturePoint;
		return test+"_Reset Depature point and Destination point";
	},
	getSubmitTriggerText:function() {
		return "Submit Depature point and Destination point";
	},
	render:function() {
		return (
					React.createElement(ButtonToolbar, null, 
						React.createElement(Col, {xs: 1, md: 1}, 
						React.createElement(ButtonInput, {bsSize: "large", bsStyle: "danger", type: "reset", value: "reset"})
						), 
						React.createElement(Col, {xs: 1, md: 1}, 
						React.createElement(ButtonInput, {onClick: this.getDirection, bsSize: "large", bsStyle: "success", type: "submit", value: "submit"})	
						)
					)
		
		);
	}
});


var MapSwitcher=React.createClass({displayName: "MapSwitcher",
	clickHandler:function(label,event){
		if(label=="charge"){
			// this.store.cleanPositionData();
			if(this.props.Store.positionLayer.chargeLayer==false){
				this.props.Store.positionLayer.chargeLayer=true;
					api.getChargeInfo();

			}else{
				this.props.Store.positionLayer.chargeLayer=false;
				this.props.Store.cleanChargePositionData();
			} 
		}else if(label=="traffic"){
			if(this.props.Store.positionLayer.trafficLayer==false){
				this.props.Store.positionLayer.trafficLayer=true;
			}else{
				this.props.Store.positionLayer.trafficLayer=false;
				// this.props.Store.cleanPositionData();
			} 
		}else if(label=="weather"){
			if(this.props.Store.positionLayer.weatherLayer==false){
				this.props.Store.positionLayer.weatherLayer=true;
			}else{
				this.props.Store.positionLayer.weatherLayer=false;
				// this.props.Store.cleanPositionData();
			} 
		}
	},
	getInitialState(){
		console.log(this);
		return this.props.Store.getPositionLayer();
	},
	render:function() {
		var weather="weather";
		var traffic="traffic";
		var charge="charge";
		return (
			React.createElement("div", {className: "mapSwitcher"}, 
				React.createElement(SwitchButton, {name: "switch-1", label: "weather", onChange: this.clickHandler.bind(this,weather), defaultChecked: this.state.weatherLayer}), 
				React.createElement(SwitchButton, {name: "switch-2", label: "traffic", onChange: this.clickHandler.bind(this,traffic), defaultChecked: this.state.trafficLayer}), 
				React.createElement(SwitchButton, {name: "switch-3", label: "charge", onChange: this.clickHandler.bind(this,charge), defaultChecked: this.state.chargeLayer})		
			)
		);
	}
});

var ThemeImg=React.createClass({displayName: "ThemeImg",
	render:function(){
		return (
				React.createElement("div", {id: "themeImg", className: "themeImg"})

		);
	}
});
var MotorImg=React.createClass({displayName: "MotorImg",
	render:function(){
		return (
				React.createElement("div", {id: "motorImg", className: "motorImg"})

		);
	}
});
var IntroImg=React.createClass({displayName: "IntroImg",
	render:function(){
		return (
				React.createElement("div", {id: "introImg", className: "introImg"})

		);
	}
});
var PathImg=React.createClass({displayName: "PathImg",
	render:function(){
		return (
				React.createElement("div", {id: "pathImg", className: "pathImg"})
			
		);
	}
});
var TrafficImg=React.createClass({displayName: "TrafficImg",
	render:function(){
		return (
				React.createElement("div", {id: "trafficImg", className: "trafficImg"})
			
		);
	}
});
var FatorImg=React.createClass({displayName: "FatorImg",
	render:function(){
		return (
				React.createElement("div", {id: "fatorImg", className: "fatorImg"})
			
		);
	}
});
var WeatherImg=React.createClass({displayName: "WeatherImg",
	render:function(){
		return (
				React.createElement("div", {id: "weatherImg", className: "weatherImg"})
			
		);
	}
});
var DemoImg=React.createClass({displayName: "DemoImg",
	render:function(){
		return (
				React.createElement("div", {id: "demoImg", className: "demoImg"})
			
		);
	}
});
var ChargeImg=React.createClass({displayName: "ChargeImg",
	render:function(){
		return (
				React.createElement("div", {id: "chargeImg", className: "chargeImg"})
			
		);
	}
});

var Imotor = React.createClass({displayName: "Imotor",

    getInitialState: function() {
    	// this.state.motor='../resource/img/gogoro.png';
        return {
            data: [
                { id: 1, name: "Gogoro Lite", selected: true, motor: '../resource/img/gogoro.png' },
                { id: 2, name: "JY-188", selected: false, motor: '../resource/img/jy188.png' },
                { id: 3, name: "QQ-P", selected: false, motor: '../resource/img/qqp.png' },
                { id: 4, name: "E-moving bobe", selected: false, motor: '../resource/img/emoving.png' },
                { id: 5, name: "Candy2.0 EV", selected: false, motor: '../resource/img/candy.png' }
            ],
            motor:'../resource/img/gogoro.png'
        };
    },
    componentDidMount:function(){
    	// console.log(this);
    	// this.state.motor='../resource/img/gogoro.png';
    },
    render: function() {
    	var styleT = {	padding:'0 0 0 0' , font_size:'30px' , paddingTop:'8%' } ;   
    	var styleText = { fontSize:'30px' , fontFamily:'Microsoft JhengHei' , paddingLeft: '40px' };
    	var styleCheck  = { height:'20px' , width: '20px'};
    	var Div = ReactBootstrap.Div; 
    	var Image = ReactBootstrap.Image;
    	var Modal = ReactBootstrap.Modal;
    	var Button = ReactBootstrap.Button;
    	var Span = ReactBootstrap.Span;
        
        var checks = this.state.data.map(function(d) {
        	// console.log(d); 
            return ( 
                React.createElement("div", {style: styleT}, 
                    React.createElement("p", {style: styleText}, React.createElement("input", {style: styleCheck, type: "checkbox", checked: d.selected, onChange: this.__changeSelection.bind(this, d)}), d.name)
                )  
              
            );
        }.bind(this));
        var divStyle = {
			height:'100%',
			color: 'white',
			WebkitTransition: 'all', // note the capital 'W' here
			msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		};
		var styleRow = {
			paddingLeft: '16%'
		}
        return (

        	React.createElement(Grid, {className: "col-xs-12 col-md-12 col-lg-12"}, 
				React.createElement(Row, {style: styleRow}, 
					React.createElement(Col, {style: divStyle, xs: 6, md: 6}, 
						React.createElement(Image, {src: this.state.motor})
					), 
					React.createElement(Col, {xs: 6, md: 6}, 
						checks
					)					
				)
			)
        );

    },
    __changeSelection: function(id) {

    	this.state.data.map(function(d) {
    		d.selected = false;
    	});  

    	console.log ("id:"+id);

    	this.setState ({motor:id.motor});
    	
    	if(id.selected) {
    		id.selected = false;
    	} else {
    		id.selected = true;
    	} 

    	/*
        var state = this.state.data.map(function(d) {
    		d.selected = false;
            return {
                id: d.id,
                name: d.name,
                selected: (d.id === id ? !d.selected : d.selected)
            };
        });

        this.setState({ data: this.state });
        */

    },
    __changeAllChecks: function() {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value };
        });

        this.setState({ data: state });

    }
    
    

});


