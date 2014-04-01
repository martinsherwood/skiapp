$(function(locationMap) {
	var chamrousse = new google.maps.LatLng(45.117225, 5.877747);
	var tignes = new google.maps.LatLng(45.468323, 6.905579);
	var gerardmer = new google.maps.LatLng(48.070081, 6.877292);
	var metabief = new google.maps.LatLng(46.773705, 6.350552);
	
	var map;
	var mapStyles = [
						{
							"featureType": "road",
							"elementType": "labels",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						}
					];
	
	var elevation = new google.maps.ElevationService();
	
	var dropPinBlue = "img/location-pin-blue.png";
		dropPinGreen = "img/location-pin-green.png";
		dropPinPink = "img/location-pin-pink.png";
		dropPinOrange = "img/location-pin-orange.png";
		dropPinRed = "img/location-pin-red.png";
		
	var infoChamrousse = '<div id="content">'+
						 '<div id="siteNotice">'+
						 '</div>'+
						 '<h1 id="firstHeading" class="firstHeading" style="font-size: 22px;">Chamrousse</h1>'+
						 '<div id="bodyContent">'+
						 '<p>The Chamrousse ski resort is at the situated just at the entrance to an area known as the Belledonne, only 30km from Grenoble. It is made up a of two small towns: Chamrousse 1650 (Nook) and Chamrousse 1750-1700 (Roche Beranger - Arselle Ski Area)connected by ski slopes.</p>'+
						 '</div>'+'</div>';
						 
	var infoTignes = 	 '<div id="content">'+
						 '<div id="siteNotice">'+
						 '</div>'+
						 '<h1 id="firstHeading" class="firstHeading" style="font-size: 22px;">Tignes</h1>'+
						 '<div id="bodyContent">'+
						 '<p>Tignes centres around three small villages sitting high above the tree line. Chalet hotels can be found nestled in the villages of Tignes Le Lac and Le Lavachet. Forming part of the Espace Killy ski area, Tignes provides a huge variety of ski runs for skiers and boarders from off-piste to easy green runs.</p>'+
						 '</div>'+'</div>';
	
	var infoGerardmer =  '<div id="content">'+
						 '<div id="siteNotice">'+
						 '</div>'+
						 '<h1 id="firstHeading" class="firstHeading" style="font-size: 22px;">Gerardmer</h1>'+
						 '<div id="bodyContent">'+
						 '<p>Overlooking Gérardmer and its lake, go to the Mauselaine alpine ski slopes for your skiing pleasure with 20 runs of all levels extending over 40 km and set in the midst of pine forests, beginners skiing area with skilifts and a free pulled rope.</p>'+
						 '</div>'+'</div>';
	
	var infoMetabief = 	 '<div id="content">'+
						 '<div id="siteNotice">'+
						 '</div>'+
						 '<h1 id="firstHeading" class="firstHeading" style="font-size: 22px;">Métabief</h1>'+
						 '<div id="bodyContent">'+
						 '<p>Métabief, Mont dOr has direct access to 42km of downhill skiing, with 24 individual pistes, served by 20 ski lifts. There are five Airports within two hours drive, so ski weekends, snowboard breaks and short ski holidays to Métabief. Métabief, Mont dOr offers good sking, especially, for Intermediate skiers.</p>'+
						 '</div>'+'</div>';
		
	map = new GMaps({
		div: "#locations-map",
		lat: 46.227638,
		lng: 2.213749,
		zoom: 5,
		disableDefaultUI: true,
		style: mapStyles,
		center: metabief //centre on metabief as its kinda in the centre of all four
	});
	
	//animation: google.maps.Animation.DROP,
	
	//chamrousse
	map.addMarker({
		lat: 45.117225,
		lng: 5.877747,
		title: "Chamrousse",
		icon: dropPinBlue,
		animation: google.maps.Animation.DROP,
		infoWindow: {
			content: infoChamrousse
		},
		click: function(e) {
			map.setZoom(16);
		}
	});
	
	//tignes
	map.addMarker({
		lat: 45.468323,
		lng: 6.905579,
		title: "Tignes",
		icon: dropPinOrange,
		animation: google.maps.Animation.DROP,
		infoWindow: {
			content: infoTignes
		},
		click: function(e) {
			map.setZoom(16);
		}
	});
	
	//gerardmer
	map.addMarker({
		lat: 48.070081,
		lng: 6.877292,
		title: "Gérardmer",
		icon: dropPinPink,
		animation: google.maps.Animation.DROP,
		infoWindow: {
			content: infoGerardmer
		},
		click: function(e) {
			map.setZoom(16);
		}
	});
	
	//metabief
	map.addMarker({
		lat: 46.773705,
		lng: 6.350552,
		title: "Métabief",
		icon: dropPinRed,
		animation: google.maps.Animation.DROP,
		infoWindow: {
			content: infoMetabief
		},
		click: function(e) {
			map.setZoom(16);
		}
	});
});