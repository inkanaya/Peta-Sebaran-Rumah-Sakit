var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriDarkGray_1 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RumahSakitTangsel_2 = new ol.format.GeoJSON();
var features_RumahSakitTangsel_2 = format_RumahSakitTangsel_2.readFeatures(json_RumahSakitTangsel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitTangsel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitTangsel_2.addFeatures(features_RumahSakitTangsel_2);
var lyr_RumahSakitTangsel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitTangsel_2, 
                style: style_RumahSakitTangsel_2,
                popuplayertitle: 'Rumah Sakit Tangsel',
                interactive: true,
                title: '<img src="styles/legend/RumahSakitTangsel_2.png" /> Rumah Sakit Tangsel'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_EsriDarkGray_1.setVisible(true);lyr_RumahSakitTangsel_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_EsriDarkGray_1,lyr_RumahSakitTangsel_2];
lyr_RumahSakitTangsel_2.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_RumahSakitTangsel_2.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_RumahSakitTangsel_2.set('fieldLabels', {'id': 'no label', 'Keterangan': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_RumahSakitTangsel_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});