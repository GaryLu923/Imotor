<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>

</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<link href="../resource/vender/bootstrap/bootstrap.min.css" rel="stylesheet"/>
<link href="../resource/vender/bootstrap/react-bootstrap-table-all.min.css" rel="stylesheet"/>
<link href="../resource/css/dashboard.css" type="text/css" rel="stylesheet">
<link href="../resource/css/title.css" type="text/css" rel="stylesheet">
<link href="../resource/img/favicon.ico" rel="icon" type="image/x-icon" />
<!-- jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js">
</script>
<!-- AlaSQL -->
<script src="http://cdn.jsdelivr.net/alasql/0.2/alasql.min.js"></script>
<!-- venders react & bootstrap-->

<script src="../resource/vender/react/react.min.js"></script>
<script src="../resource/vender/react/react-dom.min.js"></script>
<script src="../resource/vender/bootstrap/bootstrap.min.js"></script>
<script src="../resource/vender/bootstrap/react-bootstrap-table.min.js"></script>
<script type="../resource/vender/bootstrap/glyphicon-hal"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.27.3/react-bootstrap.js"></script>
<script src="../resource/js/component.js"></script>
<script src="../resource/js/store.js"></script>
<script src="../resource/js/api.js"></script>

<!-- Google MAP -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true" ></script>      
<script type="text/javascript"></script>
</head>

<body>
	<div class="col-xs-12 col-md-12 col-lg-12" id="titleContainer"></div>
	<div class="col-xs-12 col-md-12 col-lg-12" id="webContainer"></div>
</body>

<script>
		var store=new Store;
		var api=new API;
		if (navigator.geolocation) {
			console.log('Geolocation is supported!');
		} else {
			console.log('Geolocation is not supported for this Browser/OS version yet.');
		}
			ReactDOM.render(React.createElement(Title,{Store: store}),document.getElementById("titleContainer"));

	// ReactDOM.render(React.createElement(UploadComponent),document.getElementById("webContainer"));
</script>

</html>
