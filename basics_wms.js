function addWmsLayer(url, layerName, opacity, listName) {
	console.log("addWmsLayer");	

	var source = L.WMS.source(url, {
	    'opacity': opacity,	
	    'transparent': true
	});

	var wmsLayer =  source.getLayer(layerName);

	map.addLayer(wmsLayer);
	layerControl.addOverlay(wmsLayer, listName);
}

