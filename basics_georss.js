function addGeoRssLayer(url, colorIcon, listName) {
	console.log("addGeoRssLayer");	
	var proxy = "https://crossorigin.me/";
	
	jQuery.getFeed({
		url: proxy + url,
		success: function(feed) {
			var output = {}; 
			var geoRssGroupLayer = new L.LayerGroup();
			console.log("success");				
			console.log(feed.items.length);	
			for(var i = 0; i < feed.items.length; i++) {

				var item = feed.items[i];

				output["description"] = item.description;
				output["link"] = item.link;
				output["title"] = item.title;
				output["updated"] = item.updated;
				output["point"] = item.point;


				var marker = L.marker([output['point'].split(' ')[0], output['point'].split(' ')[1]], {icon: colorIcon});
				var popupContent = output.description; 
				marker.bindPopup(popupContent);

				marker.addTo(geoRssGroupLayer);
			}
			map.addLayer(geoRssGroupLayer);
			layerControl.addOverlay(geoRssGroupLayer, listName);	

		}		
	})
}
