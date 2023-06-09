//Step 1: Add the OSM base map and the map object to the WebGIS
//Put here the OSM layer. 
let osm = new ol.layer.Tile({
    title: "Open Street Map",
    type: "base",
    visible: true,
    source: new ol.source.OSM()
});

//Step *: Aggiunta Population clip Valle Imagna
var Worldpop_clipped = new ol.layer.Image({
    title: "Population",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'Worldpop_clipped', 'STYLES': 'Pop_density'}
    }),
    opacity: 1
});

//Step *: AGGIUNGERE TUTTI GLI ALTRI COME FATTO SOPRA

//Add the layers to layer groups ///AGGIOUNGERE ALTRI GRUPPI TIPO analysis layers AND territorial layers
let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});

let overlayLayers = new ol.layer.Group({  //AGGIORNARE IL NOME DEL GRUPPO CON QUALCOSA PIU CARINO
    title: "Overlay Layers",
    layers: [Worldpop_clipped]    //POPOLARE [] CON I NUOVI LAYER AGGIUNTI
});

//Put here the main map object.
const initialZoom = 12;
const initialCoordinates = [9.534668, 45.811851];
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, overlayLayers],
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
    visible: false,
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
