
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
		return {
			travelForm1: this.refs.travelForm1, 
			mapComponent1: this.refs.mapComponent1,
			mapSwitcher1: this.refs.mapSwitcher1
		};
	},
	componentDidMount:function(){
			window.addEventListener('scroll', this.handleScroll);
			console.log(this.props);
			// this.props.Store.travelForm1 = this.refs.travelForm1;
			this.props.Store.travelForm2 = this.refs.travelForm2;

			this.setState({travelForm1: this.refs.travelForm1});
			this.setState({mapSwitcher1:this.refs.mapSwitcher1});
			this.setState({mapComponent1:this.refs.mapComponent1});
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
			var paddingHeightTopLeftStyle = {
				height: '100%',
				paddingTop: '15%',	
				paddingLeft: '8%' 
			};
			var paddingWeatherStyle = {
				paddingTop: '12%',
				paddingLeft: '5%'		
			};
			var paddingTrafficStyle = {
				paddingTop: '12%',
				paddingLeft: '9%'		
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
							React.createElement("div", {style: paddingTopStyle}, 
							React.createElement(MotorImg, null)
							)
						), 
						React.createElement(Col, {xs: 12, md: 12}, 
							React.createElement(Imotor, null)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 11, md: 11}, 
							React.createElement("div", {style: paddingTopStyle}, 
							React.createElement(PathImg, null)
							)
						), 
						React.createElement(Col, {xs: 1, md: 1}
						), 
						React.createElement(Col, {xs: 10, md: 10}, 
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
								React.createElement(MapComponent, {state: this.state, Store: this.props.Store, ref: "mapComponent1"})
							), 
							React.createElement(Col, {xs: 12, md: 2}, 
								React.createElement(MapSwitcher, {Store: this.props.Store, state: this.state, ref: "mapSwitcher1"})
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
		return (
			React.createElement("div", {className: "navBar"}, 
				React.createElement(Nav, null, 
					React.createElement(NavItem, {className: "itemHome", onClick: this.clickMethod.bind(this,Home)}), 
					React.createElement(NavItem, {className: "itemImotor", onClick: this.clickMethod.bind(this,Imotor)}), 
					React.createElement(NavItem, {className: "itemPath", onClick: this.clickMethod.bind(this,Path)}), 
					React.createElement(NavItem, {className: "itemFator", onClick: this.clickMethod.bind(this,Fator)}), 
					React.createElement(NavItem, {className: "itemDemo", onClick: this.clickMethod.bind(this,Demo)})
				)
			)
		);
	}
});
var MapComponent=React.createClass({displayName: "MapComponent",
	getUserGPS:function(){
			console.log("Getting USER GPS..."); 
	},
	weatherLayerOn: function() {
		console.log ('weatherLayerOn is change');
		var weatherMarkers = this.props.weatherMarkers;
		this.props.Store.weatherMarkers.forEach(function(cc) {
			cc.setMap(tempMap);
		});
	},
	weatherLayerOff: function() {
		console.log ('weatherLayerOff is change');
		var weatherMarkers = this.props.weatherMarkers;
		this.props.Store.weatherMarkers.forEach(function(cc) {
			cc.setMap(null);
		});
	},
	weatherInitialLayer: function(map,nowPos,temp) {
	    /*charge weather data*/
		for(i=0;i<store.weatherData.length;i++){
			var lat = store.weatherData[i].wgs84aX;
			var lng = store.weatherData[i].wgs84aY; 
			var sta = store.weatherData[i].sta;
			var infowindow = new google.maps.InfoWindow(); 
			var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
			var marker;
			var plug="../resource/img/weather2ICON.png";
				marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});
				this.props.Store.weatherMarkers.push(marker);

			google.maps.event.addListener(marker, 'click', (function(mm, tt, wgs84aX, wgs84aY) {
			    return function() { 
					console.log ("title:"+tt); 
			        		
					infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
			        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
					infowindow.open(map, mm);
					store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
//							store.endPoint = tt;
					store.endPoint= wgs84aY+","+wgs84aX;

					component.props.state.travelForm1.change();
					// temp.props.Store.travelForm1.change();
					//{startPoint:'5678'});
			    }
			})(marker, store.weatherData[i].sta, store.weatherData[i].wgs84aX, store.weatherData[i].wgs84aY));

		}

	},
	trafficLayerOn: function() {
		console.log ('trafficLayerOn is change');
		var trafficMarkers = this.props.trafficMarkers;
		this.props.Store.trafficMarkers.forEach(function(cc) {
			cc.setMap(tempMap);
		});

	},
	trafficLayerOff: function() {
		console.log ('trafficLayerOff is change');
		var trafficMarkers = this.props.trafficMarkers;
		this.props.Store.trafficMarkers.forEach(function(cc) {
			cc.setMap(null);
		});
	},
	trafficInitialLayer: function(map,nowPos,component) {
		// Traffic Data
		for(i=0;i<store.trafficData.length;i++){
			var lat = store.trafficData[i].endwgsx;
			var lng = store.trafficData[i].endwgsy; 
			var name = store.trafficData[i].sectionname;
			var avgspd=store.trafficData[i].avgspd;
			var infowindow = new google.maps.InfoWindow(); 
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
				marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: name});
				this.props.Store.trafficMarkers.push (marker);

			google.maps.event.addListener(marker, 'click', (function(mm, tt, endwgsx, endwgsy) {
			    return function() { 
					console.log ("title:"+tt); 
					infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
			        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
					infowindow.open(map, mm);
					store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
					component.props.state.travelForm1.change();
			    }
			})(marker, store.trafficData[i].sectionname,store.trafficData[i].endwgsx, store.trafficData[i].endwgsy,store.trafficData[i].avgspd));

		}
	},
	chargeLayerOff: function() {
		console.log ('MapComponent1 is change');
		var chargeMarkers = this.props.chargeMarkers;
		this.props.Store.chargeMarkers.forEach(function(cc) {
			cc.setMap(null);
		});
	},
	chargeLayerOn: function() {
		console.log ('MapComponent1 is change');
		var chargeMarkers = this.props.chargeMarkers;
		this.props.Store.chargeMarkers.forEach(function(cc) {
			cc.setMap(tempMap);
		});
	},
	chargeLayerInitial: function(map,nowPos,component) {
			console.log ("chargeLayerOn store.positionData:"+JSON.stringify(store.positionData));
				for(i=0;i<store.positionData.length;i++) {
					var lat = store.positionData[i].wgs84aX;
					var lng = store.positionData[i].wgs84aY; 
					var sta = store.positionData[i].sta;
					var nowPos;
					var infowindow = new google.maps.InfoWindow(); 
					console.log ("store.positionData["+i+"]:"+JSON.stringify(store.positionData[i]));
					var LatLngX = new google.maps.LatLng(parseFloat(lng),parseFloat(lat));
					var marker;
					if (i==246) {
						var imageNEAR = "http://a.bbkz.net/guide/images/f/fa/ICON%E9%96%83%E9%9B%BB.png";
						var marker = new google.maps.Marker({icon: imageNEAR, position: LatLngX, map:map, title: sta});
					} else {
						var plug="../resource/img/chargeICON.png";
						marker = new google.maps.Marker({icon: plug, size: new google.maps.Size(20, 32), position: LatLngX, map:map, title: sta});
						this.props.Store.chargeMarkers.push (marker);
					}

					google.maps.event.addListener(marker, 'click', (function(mm, tt, wgs84aX, wgs84aY) {
					    return function() { 
							console.log ("title:"+tt);        		
							infowindow.title = "<H1 style='background-color:#000000'>"+tt+"</H1>";
					        		infowindow.setContent("<H1 style='background-color:#000000'>"+tt+"</H1>");
							infowindow.open(map, mm);
							store.startPoint = nowPos.coords.latitude+","+nowPos.coords.longitude;
							store.endPoint= wgs84aY+","+wgs84aX;
							temp.props.state.travelForm1.change();
							temp.props.state.mapSwitcher1.change();
					    }
					})(marker, store.positionData[i].sta, store.positionData[i].wgs84aX, store.positionData[i].wgs84aY));


					console.log ("XXXX marker "+i+" : "+marker);
				}


	},
	getDefaultProps: function () {
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
	        };

    },
    componentWillMount: function() {
    	console.log ("ComponentWillMount: "+this.props.lat+"\t"+this.props.lng);
    },
    componentDidMount: function (rootNode) {
    	console.log ("ComponentDidMount");
 		var nowPos;
 		console.log(this);
 		var component=this;
 		var temp = this;

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
				tempMap = map;
				map.data.forEach(function(feature) {
					//If you want, check here for some constraints.
					map.data.remove(feature);

				});
				//map.data.loadGeoJson(geoJsonURL);

		        var centerM = new google.maps.LatLng(nowPos.coords.latitude, nowPos.coords.longitude);
		        map.setCenter(centerM);
		        var	imageM="../resource/img/localtionICON.png"; 

				var markerM = new google.maps.Marker({icon: imageM ,position: centerM, map:map, title: 'Here!'});
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
		        temp.setState({map: map});
				temp.chargeLayerInitial(map,nowPos,component);
				console.log(this);
				temp.weatherInitialLayer(map,nowPos,component);
				temp.trafficInitialLayer(map,nowPos,component);

			};
			var errorCallback = function() {
				console.log ("gps error");
			};
			navigator.geolocation.getCurrentPosition(geoSuccess,errorCallback);
			
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
	change: function() {
		console.log ("mapSwitch1 is change");
	},
	clickHandler:function(label,event){
		if(label=="charge"){
			// this.store.cleanPositionData();

			if(this.props.Store.positionLayer.chargeLayer==false){
				this.props.Store.positionLayer.chargeLayer=true;
					api.getChargeInfo();
		//			MapComponent.render();
		this.props.state.mapComponent1.chargeLayerOn();

		// this.setState({startPoint:this.props.Store.startPoint});
		// this.setState({endPoint:this.props.Store.endPoint});

			}else{
				this.props.Store.positionLayer.chargeLayer=false;
				this.props.Store.cleanChargePositionData();
				this.props.state.mapComponent1.chargeLayerOff();
			} 
		}else if(label=="traffic"){
			if(this.props.Store.positionLayer.trafficLayer==false){
				this.props.Store.positionLayer.trafficLayer=true;
				this.props.state.mapComponent1.trafficLayerOn();
			}else{
				this.props.Store.positionLayer.trafficLayer=false;
				this.props.state.mapComponent1.trafficLayerOff();
				// this.props.Store.cleanPositionData();
			} 
		}else if(label=="weather"){
			if(this.props.Store.positionLayer.weatherLayer==false){
				this.props.Store.positionLayer.weatherLayer=true;
				this.props.state.mapComponent1.weatherLayerOn();
			}else{
				this.props.Store.positionLayer.weatherLayer=false;
				this.props.state.mapComponent1.weatherLayerOff();
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
    	var styleT = {	padding:'4% 0 0 0' , font_size:'30px' } ;   
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

        return (

        	React.createElement(Grid, {className: "col-xs-12 col-md-12 col-lg-12"}, 
				React.createElement(Row, null, 
					React.createElement(Col, {style: divStyle, xs: 5, md: 5}, 
						React.createElement(Image, {src: this.state.motor})
					), 
					React.createElement(Col, {xs: 7, md: 7}, 
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
    },
    __changeAllChecks: function() {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value };
        });

        this.setState({ data: state });

    }
    
    

});


