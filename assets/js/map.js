//Step 1: Add the OSM base map and the map object to the WebGIS
//Put here the OSM layer.
let osm = new ol.layer.Tile({
    title: "Open Street Map",
    type: "base",
    visible: false,
    source: new ol.source.OSM()
});

//Step *: Add suceptibility clip Valle Imagna

var Reclass_resampled_susceptibility_map = new ol.layer.Image({
  title: "Suceptibility map",
  source: new ol.source.ImageWMS({
      url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3AReclass_resampled_susceptibility_map&bbox=536399.205%2C5066963.4401%2C547016.1198%2C5079867.0751&width=631&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
      params: { 'LAYERS': 'Reclass_resampled_susceptibility_map', 'STYLES': 'suceptibility'}
  }),
  opacity: 1,
  visible: true  // Set the layer to be visible by default
});


//Step *: Add Population clip Valle Imagna
var Worldpop_clipped = new ol.layer.Image({
    title: "Population",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3AWorldpop_clipped&bbox=536399.205%2C5066963.4401%2C547016.1198%2C5079867.0751&width=631&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'Worldpop_clipped', 'STYLES': 'Pop_density'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add ls inventory
var vectorSource = new ol.source.Vector({});

function loadFeatures(response) {
  vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(response));
}

var base_url = "https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/ows?";
var wfs_url = base_url;
wfs_url += "service=WFS&";
wfs_url += "version=2.0.0&";
wfs_url += "request=GetFeature&";
wfs_url += "typeName=gisgeoserver_05%3ALS_inventory&";
wfs_url += "outputFormat=text%2Fjavascript&";
wfs_url += "srsname=EPSG:3857&";
wfs_url += "format_options=callback:loadFeatures";

$.ajax({url: wfs_url, dataType: 'jsonp'});

var LS_inventory = new ol.layer.Vector({
  title: "LS inventory",
  source: vectorSource,
  visible: true
});



//Step *: Add aspect clip Valle Imagna
var aspect = new ol.layer.Image({
    title: "Aspect",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Aaspect&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'aspect', 'STYLES': 'Aspect'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});


//Step *: Add dtm clip Valle Imagna
var dtm = new ol.layer.Image({
    title: "Dtm",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Adtm&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'dtm', 'STYLES': 'dtm'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add dusaf clip Valle Imagna
var dusaf = new ol.layer.Image({
    title: "Dusaf",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Adusaf&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'dusaf', 'STYLES': 'dusaf'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add faults clip Valle Imagna
var faults = new ol.layer.Image({
    title: "Faults",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Afaults&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'faults', 'STYLES': 'faults'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add ndvi clip Valle Imagna
var ndvi = new ol.layer.Image({
    title: "Ndvi",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Afaults&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'ndvi', 'STYLES': 'ndvi'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add plan clip Valle Imagna
var plan = new ol.layer.Image({
    title: "Plan",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Aplan&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'plan', 'STYLES': 'plan'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add profile clip Valle Imagna
var profile = new ol.layer.Image({
    title: "Profile",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Aplan&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'profile', 'STYLES': 'profile'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add rivers clip Valle Imagna
var rivers = new ol.layer.Image({
    title: "Rivers",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Arivers&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'rivers', 'STYLES': 'rivers'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Step *: Add roads clip Valle Imagna
var roads = new ol.layer.Image({
    title: "Roads",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3Aroads&bbox=536410.0%2C5067015.0%2C546985.0%2C5079815.0&width=634&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'roads', 'STYLES': 'roads'}
    }),
    opacity: 1,
    visible: false  // Set the layer to be visible by default
});

//Add test and train points
var Testing_points_sampled = new ol.layer.Image({
    title: "Testing points",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3ATesting_points_sampled&bbox=537049.767596203%2C5068136.9723774195%2C546214.2056630501%2C5079606.03210117&width=613&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'Testing_points_sampled', 'STYLES': 'testing_pt'}
    }),
    opacity: 1,
    visible: false
});
var Training_points_sampled = new ol.layer.Image({
    title: "Training points",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisgeoserver_05%3ATraining_points_sampled&bbox=537050.4892907584%2C5067069.2166941855%2C546645.4743933523%2C5079667.042552076&width=584&height=768&srs=EPSG%3A32632&styles=&format=application/openlayers',
        params: { 'LAYERS': 'Training_points_sampled', 'STYLES': 'training_pt'}
    }),
    opacity: 1,
    visible: false
});




//Step *: AGGIUNGERE TUTTI GLI ALTRI COME FATTO SOPRA

//Add the layers to layer groups ///AGGIOUNGERE ALTRI GRUPPI TIPO analysis layers AND territorial layers
let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});

let Analytical_output = new ol.layer.Group({  //AGGIORNARE IL NOME DEL GRUPPO CON QUALCOSA PIU CARINO
    title: "Analytical output",
    layers: [Reclass_resampled_susceptibility_map]    //POPOLARE [] CON I NUOVI LAYER AGGIUNTI
});

let Analytical_input = new ol.layer.Group({  //AGGIORNARE IL NOME DEL GRUPPO CON QUALCOSA PIU CARINO
    title: "Analytical input",
    layers: [LS_inventory, Worldpop_clipped, aspect, dtm, dusaf, faults, ndvi, plan, profile, rivers, roads, Testing_points_sampled, Training_points_sampled]    //POPOLARE [] CON I NUOVI LAYER AGGIUNTI
});




//Put here the main map object.
const initialZoom = 12.2;
const initialCoordinates = [9.534668, 45.811851];
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, Analytical_input, Analytical_output],
    view: new ol.View({
        center: ol.proj.fromLonLat(initialCoordinates),
        zoom: initialZoom
    })
});

// Add the map controls:
map.addControl(new ol.control.ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.OverviewMap());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '-.----, -.----'
    })
);

//Add the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

//Add the Bing Maps layers
var BING_MAPS_KEY = "Akq75SxLn-ec_s82etAIg8NC6oojH6tG52Jycx51BTKoPJdgmKXg0xYFDrGa6Rrd";
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps Aerial',
    type: 'base',
    visible: true,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    })
});

//Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
basemapLayers.getLayers().extend([bingRoads, bingAerial]);

//Add the Stamen base layers
var stamenterrain = new ol.layer.Tile({
    title: 'Stamen Terrain',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});
//Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
basemapLayers.getLayers().extend([stamenterrain, stamenToner]);

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
  element: container
});

map.addOverlay(popup);

//map.on('singleclick', function(event) {
  //var coord = map.getCoordinateFromPixel(event.pixel);
  //popup.setPosition(coord);
  //content.innerHTML = '<h5>Test Popup</h5><p>This is a test popup.</p>';
//});





closer.onclick = function() {
  popup.setPosition(undefined);
  closer.blur();
  return false;
};

map.on('pointermove', function(event) {
  var pixel = map.getEventPixel(event.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});


//////////////////// original below
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
  element: container
});

map.addOverlay(popup);

map.on('singleclick', function(event) {
  if (Reclass_resampled_susceptibility_map.getVisible()) {
    var viewResolution = map.getView().getResolution();
    var url = Reclass_resampled_susceptibility_map.getSource().getFeatureInfoUrl(
      event.coordinate,
      viewResolution,
      'EPSG:3857',
      {'INFO_FORMAT': 'application/json'}
    );

    if (url) {
      fetch(url)
        .then(function(response) { return response.json(); })
        .then(function(json) {
          var result = json.features[0].properties;
          var pixel_value = result['GRAY_INDEX'];

          var pixel = map.getPixelFromCoordinate(event.coordinate);
          popup.setPosition(event.coordinate);
          content.innerHTML = '<h5>Susceptibility Map</h5><b>Risk level: </b>' + pixel_value;
        });
    }
  } else if (LS_inventory.getVisible()) {
    var feature = map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
      return feature;
    });
    if (feature != null) {
      var pixel = event.pixel;
      var coord = map.getCoordinateFromPixel(pixel);
      popup.setPosition(coord);
      content.innerHTML = '<h5>Landslide Inventory</h5>' + '<b>Description: </b>' + feature.get('TIPOLOGIA');
    }
  }
});

closer.onclick = function() {
  popup.setPosition(undefined);
  closer.blur();
  return false;
};

map.on('pointermove', function(event) {  // Corrected event name from pointmove to pointermove
  var pixel = map.getEventPixel(event.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});
