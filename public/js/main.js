$(document).ready(function() {

  /* Data points defined as an array of LatLng objects */
	

	var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

	map = new google.maps.Map(document.getElementById('map_canvas'), {
	  center: sanFrancisco,
	  zoom: 13,
	  mapTypeId: google.maps.MapTypeId.MAP
	});

	var heatmap = new google.maps.visualization.HeatmapLayer({
	  data: heatmapData
	});
	heatmap.setMap(map);

});
