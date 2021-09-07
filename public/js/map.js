mapboxgl.accessToken = 'pk.eyJ1IjoicGl0YWRldmVsb3BlciIsImEiOiJja3Q3YThqcXowank2MndwaDV6ODR4MTk5In0.2jIK84Mnbm0N6G1YPxHZEg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom:9,
center:[-71.157895, 42.707741]
});
function loadMap() {
    map.on('load', () => {         
        // Add a layer to use the image to represent the data.
        map.addLayer({
        id: 'points',
        type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type:'Feature',
                            goemetry: {
                                type: 'Point',
                                coordinates:[-71.157895, 42.707741]
                            },
                            properties: {
                                storeId: '001',
                                icon:'shop'
                            }
                        }
                    ]
                }
        }, // reference the data source
        layout: {
            'icon-image': '{icon}-15',
            'icon-size': 1.5,
            'text-field': '{storeId}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.9],
            'text-anchor': 'top'
        }
    });
   });
        
}

loadMap()