var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipiosRedesINFO_1 = new ol.format.GeoJSON();
var features_municipiosRedesINFO_1 = format_municipiosRedesINFO_1.readFeatures(json_municipiosRedesINFO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipiosRedesINFO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipiosRedesINFO_1.addFeatures(features_municipiosRedesINFO_1);
var lyr_municipiosRedesINFO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipiosRedesINFO_1, 
                style: style_municipiosRedesINFO_1,
                popuplayertitle: 'municipiosRedesINFO',
                interactive: true,
                title: '<img src="styles/legend/municipiosRedesINFO_1.png" /> municipiosRedesINFO'
            });
var format_municipiosRedesINFO_PUNTO_2 = new ol.format.GeoJSON();
var features_municipiosRedesINFO_PUNTO_2 = format_municipiosRedesINFO_PUNTO_2.readFeatures(json_municipiosRedesINFO_PUNTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipiosRedesINFO_PUNTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipiosRedesINFO_PUNTO_2.addFeatures(features_municipiosRedesINFO_PUNTO_2);
cluster_municipiosRedesINFO_PUNTO_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_municipiosRedesINFO_PUNTO_2
});
var lyr_municipiosRedesINFO_PUNTO_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_municipiosRedesINFO_PUNTO_2, 
                style: style_municipiosRedesINFO_PUNTO_2,
                popuplayertitle: 'municipiosRedesINFO_PUNTO',
                interactive: true,
                title: '<img src="styles/legend/municipiosRedesINFO_PUNTO_2.png" /> municipiosRedesINFO_PUNTO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_municipiosRedesINFO_1.setVisible(true);lyr_municipiosRedesINFO_PUNTO_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_municipiosRedesINFO_1,lyr_municipiosRedesINFO_PUNTO_2];
lyr_municipiosRedesINFO_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'ENT_MUN': 'ENT_MUN', 'X': 'X', 'Y': 'Y', 'OBJECTID': 'OBJECTID', 'munv': 'munv', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'DEICISION': 'DEICISION', 'CVENT': 'CVENT', 'CVMUN': 'CVMUN', 'CVINEGI': 'CVINEGI', 'PAGINA': 'PAGINA', 'LINK': 'LINK', 'POB_TOTAL': 'POB_TOTAL', 'POB_MASCUL': 'POB_MASCUL', 'POB_FEMENI': 'POB_FEMENI', 'TOTAL_DE_V': 'TOTAL_DE_V', 'VPH_PC': 'VPH_PC', 'VPH_CEL': 'VPH_CEL', 'VPH_INTER': 'VPH_INTER', });
lyr_municipiosRedesINFO_PUNTO_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'ENT_MUN': 'ENT_MUN', 'X': 'X', 'Y': 'Y', 'OBJECTID': 'OBJECTID', 'munv': 'munv', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'DEICISION': 'DEICISION', 'CVENT': 'CVENT', 'CVMUN': 'CVMUN', 'CVINEGI': 'CVINEGI', 'PAGINA': 'PAGINA', 'LINK': 'LINK', 'POB_TOTAL': 'POB_TOTAL', 'POB_MASCUL': 'POB_MASCUL', 'POB_FEMENI': 'POB_FEMENI', 'TOTAL_DE_V': 'TOTAL_DE_V', 'VPH_PC': 'VPH_PC', 'VPH_CEL': 'VPH_CEL', 'VPH_INTER': 'VPH_INTER', 'ORIG_FID': 'ORIG_FID', });
lyr_municipiosRedesINFO_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'ENT_MUN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OBJECTID': 'Range', 'munv': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEICISION': 'TextEdit', 'CVENT': 'TextEdit', 'CVMUN': 'TextEdit', 'CVINEGI': 'TextEdit', 'PAGINA': 'TextEdit', 'LINK': 'TextEdit', 'POB_TOTAL': 'TextEdit', 'POB_MASCUL': 'TextEdit', 'POB_FEMENI': 'TextEdit', 'TOTAL_DE_V': 'TextEdit', 'VPH_PC': 'TextEdit', 'VPH_CEL': 'TextEdit', 'VPH_INTER': 'TextEdit', });
lyr_municipiosRedesINFO_PUNTO_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'ENT_MUN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OBJECTID': 'Range', 'munv': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEICISION': 'TextEdit', 'CVENT': 'TextEdit', 'CVMUN': 'TextEdit', 'CVINEGI': 'TextEdit', 'PAGINA': 'TextEdit', 'LINK': 'TextEdit', 'POB_TOTAL': 'TextEdit', 'POB_MASCUL': 'TextEdit', 'POB_FEMENI': 'TextEdit', 'TOTAL_DE_V': 'TextEdit', 'VPH_PC': 'TextEdit', 'VPH_CEL': 'TextEdit', 'VPH_INTER': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_municipiosRedesINFO_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'ENT_MUN': 'no label', 'X': 'no label', 'Y': 'no label', 'OBJECTID': 'no label', 'munv': 'no label', 'ESTADO': 'no label', 'MUNICIPIO': 'no label', 'DEICISION': 'no label', 'CVENT': 'no label', 'CVMUN': 'no label', 'CVINEGI': 'no label', 'PAGINA': 'no label', 'LINK': 'no label', 'POB_TOTAL': 'no label', 'POB_MASCUL': 'no label', 'POB_FEMENI': 'no label', 'TOTAL_DE_V': 'no label', 'VPH_PC': 'no label', 'VPH_CEL': 'no label', 'VPH_INTER': 'no label', });
lyr_municipiosRedesINFO_PUNTO_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'ENT_MUN': 'no label', 'X': 'no label', 'Y': 'no label', 'OBJECTID': 'no label', 'munv': 'no label', 'ESTADO': 'no label', 'MUNICIPIO': 'no label', 'DEICISION': 'no label', 'CVENT': 'no label', 'CVMUN': 'no label', 'CVINEGI': 'no label', 'PAGINA': 'no label', 'LINK': 'no label', 'POB_TOTAL': 'no label', 'POB_MASCUL': 'no label', 'POB_FEMENI': 'no label', 'TOTAL_DE_V': 'no label', 'VPH_PC': 'no label', 'VPH_CEL': 'no label', 'VPH_INTER': 'no label', 'ORIG_FID': 'no label', });
lyr_municipiosRedesINFO_PUNTO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});