function addLocalCsvLayer(colorIcon, listName) {
	console.log("addLocalCsvLayer");	
    	var proxy = "http://localhost:8080/";

	$.get(proxy + "datos.csv").done(function(data){
		
		var csvGroupLayer = new L.LayerGroup();	    
		var allTextLines = data.split(/\r\n|\n/);

		for (var i=0; i<allTextLines.length - 1; i++) {
			var data = allTextLines[i].split(',');

			var lat = data[0];
			var lon = data[1];
			var value = data[2];
			
			var marker = L.marker([lat, lon], {icon:colorIcon}).bindPopup(value);
			marker.addTo(csvGroupLayer);	
		}    
		
		map.addLayer(csvGroupLayer);
		layerControl.addOverlay(csvGroupLayer, listName);
	});

}
