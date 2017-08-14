function addKmlLayer(url, listName) {
	console.log("addKmlLayer");	
	var proxy = "https://crossorigin.me/";


	var kmlLayer = new L.KML(proxy + url, {async: true});
				                      
	kmlLayer.on("loaded", function(e) { 
		map.fitBounds(e.target.getBounds());
	});
				        
	map.addLayer(kmlLayer);
	layerControl.addOverlay(kmlLayer, listName);		
}

function addLocalKmlLayer(url, listName) {
	console.log("addLocalKmlLayer");	
    	var proxy = "http://localhost:8080/";

	var kmlLayer = new L.KML(proxy + url, {async: true});
				                      
	kmlLayer.on("loaded", function(e) { 
		map.fitBounds(e.target.getBounds());
	});
				        
	map.addLayer(kmlLayer);
	layerControl.addOverlay(kmlLayer, listName);		
}
