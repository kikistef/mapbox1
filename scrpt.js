



map.on('load', function(){

    map.addSource('trafficSource', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1'
    });

    
    var buttonEl = document.getElementById('trafficButton');
    buttonEl.addEventListener('click', function(e){
        addTraffic();
		
    });
	

});



function addTraffic(){
    var firstPOILabel = map.getStyle().layers.filter(function(obj){ 
        return obj["source-layer"] == "poi_label";
    });

    for(var i = 0; i < trafficLayers.length; i++) {
        map.addLayer(trafficLayers[i], firstPOILabel[0].id);
    }

}
