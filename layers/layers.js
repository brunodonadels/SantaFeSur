var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_2 = new ol.format.GeoJSON();
var features_Departamento_2 = format_Departamento_2.readFeatures(json_Departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_2.addFeatures(features_Departamento_2);
var lyr_Departamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_2, 
                style: style_Departamento_2,
                interactive: true,
                title: '<img src="styles/legend/Departamento_2.png" /> Departamento'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 25.000 - 32.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 32.001 - 67.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 67.501 - 325.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 325.001 o más<br />'
        });
var format_ViviendasreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasreasruralesINDEC_4 = format_ViviendasreasruralesINDEC_4.readFeatures(json_ViviendasreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasreasruralesINDEC_4.addFeatures(features_ViviendasreasruralesINDEC_4);
var lyr_ViviendasreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasreasruralesINDEC_4, 
                style: style_ViviendasreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_4_0.png" /> 1.500 - 3.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_4_1.png" /> 3.001 - 5.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_4_2.png" /> 5.001 - 7.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_4_3.png" /> 7.001 - 11.000<br />'
        });
var format_CabezasporcinosMAGyP_5 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_5 = format_CabezasporcinosMAGyP_5.readFeatures(json_CabezasporcinosMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_5.addFeatures(features_CabezasporcinosMAGyP_5);
var lyr_CabezasporcinosMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_5, 
                style: style_CabezasporcinosMAGyP_5,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_5_0.png" /> 10.000 - 15.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_5_1.png" /> 15.001 - 40.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_5_2.png" /> 40.001 - 70.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_5_3.png" /> 70.001 - 132.500<br />'
        });
var format_CabezasovinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_6 = format_CabezasovinosMAGyP_6.readFeatures(json_CabezasovinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_6.addFeatures(features_CabezasovinosMAGyP_6);
var lyr_CabezasovinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_6, 
                style: style_CabezasovinosMAGyP_6,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_6_0.png" /> 2.500 - 4.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_6_1.png" /> 4.001 - 6.500<br />\
    <img src="styles/legend/CabezasovinosMAGyP_6_2.png" /> 6.501 o más<br />'
        });
var format_CabezascaprinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezascaprinosMAGyP_7 = format_CabezascaprinosMAGyP_7.readFeatures(json_CabezascaprinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezascaprinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezascaprinosMAGyP_7.addFeatures(features_CabezascaprinosMAGyP_7);
var lyr_CabezascaprinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezascaprinosMAGyP_7, 
                style: style_CabezascaprinosMAGyP_7,
                interactive: true,
    title: 'Cabezas caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_7_0.png" /> 150 - 450<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_7_1.png" /> 451 - 700<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_7_2.png" /> 701 - 1.500<br />'
        });
var format_CabezasbovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasbovinosMAGyP_8 = format_CabezasbovinosMAGyP_8.readFeatures(json_CabezasbovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasbovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasbovinosMAGyP_8.addFeatures(features_CabezasbovinosMAGyP_8);
var lyr_CabezasbovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasbovinosMAGyP_8, 
                style: style_CabezasbovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_8_0.png" /> 37.500 - 65.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_8_1.png" /> 65.001 - 180.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_8_2.png" /> 180.001 - 375.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_8_3.png" /> 375.001 o más<br />'
        });
var format_HectreashortalizasINDEC_9 = new ol.format.GeoJSON();
var features_HectreashortalizasINDEC_9 = format_HectreashortalizasINDEC_9.readFeatures(json_HectreashortalizasINDEC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreashortalizasINDEC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreashortalizasINDEC_9.addFeatures(features_HectreashortalizasINDEC_9);
var lyr_HectreashortalizasINDEC_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreashortalizasINDEC_9, 
                style: style_HectreashortalizasINDEC_9,
                interactive: true,
    title: 'Hectáreas hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreashortalizasINDEC_9_0.png" /> 0<br />\
    <img src="styles/legend/HectreashortalizasINDEC_9_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreashortalizasINDEC_9_2.png" /> 201 - 1.475<br />\
    <img src="styles/legend/HectreashortalizasINDEC_9_3.png" /> 1.476 o más<br />'
        });
var format_HectreasduraznerosINDEC_10 = new ol.format.GeoJSON();
var features_HectreasduraznerosINDEC_10 = format_HectreasduraznerosINDEC_10.readFeatures(json_HectreasduraznerosINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasduraznerosINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasduraznerosINDEC_10.addFeatures(features_HectreasduraznerosINDEC_10);
var lyr_HectreasduraznerosINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasduraznerosINDEC_10, 
                style: style_HectreasduraznerosINDEC_10,
                interactive: true,
    title: 'Hectáreas durazneros (INDEC)<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_10_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_10_2.png" /> 6 - 70<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_10_3.png" /> 71 o más<br />'
        });
var format_HectreslegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreslegumbresINDEC_11 = format_HectreslegumbresINDEC_11.readFeatures(json_HectreslegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreslegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreslegumbresINDEC_11.addFeatures(features_HectreslegumbresINDEC_11);
var lyr_HectreslegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreslegumbresINDEC_11, 
                style: style_HectreslegumbresINDEC_11,
                interactive: true,
    title: 'Hectáres legumbres (INDEC)<br />\
    <img src="styles/legend/HectreslegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreslegumbresINDEC_11_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreslegumbresINDEC_11_2.png" /> 101 - 2.000<br />\
    <img src="styles/legend/HectreslegumbresINDEC_11_3.png" /> 2.001 - 7.600<br />'
        });
var format_HectreasarndanosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasarndanosINDEC_12 = format_HectreasarndanosINDEC_12.readFeatures(json_HectreasarndanosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasarndanosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasarndanosINDEC_12.addFeatures(features_HectreasarndanosINDEC_12);
var lyr_HectreasarndanosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasarndanosINDEC_12, 
                style: style_HectreasarndanosINDEC_12,
                interactive: true,
    title: 'Hectáreas arándanos (INDEC)<br />\
    <img src="styles/legend/HectreasarndanosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasarndanosINDEC_12_1.png" /> 0,1 - 10<br />\
    <img src="styles/legend/HectreasarndanosINDEC_12_2.png" /> 11 - 50<br />'
        });
var format_HectreasmazMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_13 = format_HectreasmazMAGyP_13.readFeatures(json_HectreasmazMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_13.addFeatures(features_HectreasmazMAGyP_13);
var lyr_HectreasmazMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_13, 
                style: style_HectreasmazMAGyP_13,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_0.png" /> 17.500 - 25.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_1.png" /> 25.001 - 72.500<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_2.png" /> 72.501 - 120.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_13_3.png" /> 120.001 o más<br />'
        });
var format_HectreastrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreastrigoMAGyP_14 = format_HectreastrigoMAGyP_14.readFeatures(json_HectreastrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastrigoMAGyP_14.addFeatures(features_HectreastrigoMAGyP_14);
var lyr_HectreastrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastrigoMAGyP_14, 
                style: style_HectreastrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas trigo (MAGyP)<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_0.png" /> 25.000 - 45.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_1.png" /> 45.001 - 62.500<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_2.png" /> 62.501 - 120.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_14_3.png" /> 120.001 o más<br />'
        });
var format_HectreasgirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasgirasolMAGyP_15 = format_HectreasgirasolMAGyP_15.readFeatures(json_HectreasgirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasgirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasgirasolMAGyP_15.addFeatures(features_HectreasgirasolMAGyP_15);
var lyr_HectreasgirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasgirasolMAGyP_15, 
                style: style_HectreasgirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_1.png" /> 1 - 2.500<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_15_2.png" /> 2.501 o más<br />'
        });
var format_HectreassojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_16 = format_HectreassojaMAGyP_16.readFeatures(json_HectreassojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_16.addFeatures(features_HectreassojaMAGyP_16);
var lyr_HectreassojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_16, 
                style: style_HectreassojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_0.png" /> 100.000 - 175.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_1.png" /> 175.001 - 300.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_16_2.png" /> 300.001 o más<br />'
        });
var format_Localidades_17 = new ol.format.GeoJSON();
var features_Localidades_17 = format_Localidades_17.readFeatures(json_Localidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_17.addFeatures(features_Localidades_17);
var lyr_Localidades_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_17, 
                style: style_Localidades_17,
                interactive: true,
                title: '<img src="styles/legend/Localidades_17.png" /> Localidades'
            });
var format_BER_18 = new ol.format.GeoJSON();
var features_BER_18 = format_BER_18.readFeatures(json_BER_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_18.addFeatures(features_BER_18);
var lyr_BER_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_18, 
                style: style_BER_18,
                interactive: true,
                title: '<img src="styles/legend/BER_18.png" /> BER'
            });
var format_BER_19 = new ol.format.GeoJSON();
var features_BER_19 = format_BER_19.readFeatures(json_BER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_19.addFeatures(features_BER_19);
var lyr_BER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_19, 
                style: style_BER_19,
                interactive: true,
                title: '<img src="styles/legend/BER_19.png" /> BER'
            });
var format_CAIRVenadoTuerto_20 = new ol.format.GeoJSON();
var features_CAIRVenadoTuerto_20 = format_CAIRVenadoTuerto_20.readFeatures(json_CAIRVenadoTuerto_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIRVenadoTuerto_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIRVenadoTuerto_20.addFeatures(features_CAIRVenadoTuerto_20);
var lyr_CAIRVenadoTuerto_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIRVenadoTuerto_20, 
                style: style_CAIRVenadoTuerto_20,
                interactive: true,
                title: '<img src="styles/legend/CAIRVenadoTuerto_20.png" /> CAIR Venado Tuerto'
            });
var format_DelegacinRosario_21 = new ol.format.GeoJSON();
var features_DelegacinRosario_21 = format_DelegacinRosario_21.readFeatures(json_DelegacinRosario_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinRosario_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinRosario_21.addFeatures(features_DelegacinRosario_21);
var lyr_DelegacinRosario_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinRosario_21, 
                style: style_DelegacinRosario_21,
                interactive: true,
                title: '<img src="styles/legend/DelegacinRosario_21.png" /> Delegación Rosario'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamento_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_ViviendasreasruralesINDEC_4.setVisible(true);lyr_CabezasporcinosMAGyP_5.setVisible(true);lyr_CabezasovinosMAGyP_6.setVisible(true);lyr_CabezascaprinosMAGyP_7.setVisible(true);lyr_CabezasbovinosMAGyP_8.setVisible(true);lyr_HectreashortalizasINDEC_9.setVisible(true);lyr_HectreasduraznerosINDEC_10.setVisible(true);lyr_HectreslegumbresINDEC_11.setVisible(true);lyr_HectreasarndanosINDEC_12.setVisible(true);lyr_HectreasmazMAGyP_13.setVisible(true);lyr_HectreastrigoMAGyP_14.setVisible(true);lyr_HectreasgirasolMAGyP_15.setVisible(true);lyr_HectreassojaMAGyP_16.setVisible(true);lyr_Localidades_17.setVisible(true);lyr_BER_18.setVisible(true);lyr_BER_19.setVisible(true);lyr_CAIRVenadoTuerto_20.setVisible(true);lyr_DelegacinRosario_21.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamento_2,lyr_PEAINDEC_3,lyr_ViviendasreasruralesINDEC_4,lyr_CabezasporcinosMAGyP_5,lyr_CabezasovinosMAGyP_6,lyr_CabezascaprinosMAGyP_7,lyr_CabezasbovinosMAGyP_8,lyr_HectreashortalizasINDEC_9,lyr_HectreasduraznerosINDEC_10,lyr_HectreslegumbresINDEC_11,lyr_HectreasarndanosINDEC_12,lyr_HectreasmazMAGyP_13,lyr_HectreastrigoMAGyP_14,lyr_HectreasgirasolMAGyP_15,lyr_HectreassojaMAGyP_16,lyr_Localidades_17,lyr_BER_18,lyr_BER_19,lyr_CAIRVenadoTuerto_20,lyr_DelegacinRosario_21];
lyr_Departamento_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasreasruralesINDEC_4.set('fieldAliases', {'Viv Rur': 'Viv Rur', });
lyr_CabezasporcinosMAGyP_5.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasovinosMAGyP_6.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezascaprinosMAGyP_7.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasbovinosMAGyP_8.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreashortalizasINDEC_9.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasduraznerosINDEC_10.set('fieldAliases', {'Duraznero': 'Duraznero', });
lyr_HectreslegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasarndanosINDEC_12.set('fieldAliases', {'Arandano': 'Arandano', });
lyr_HectreasmazMAGyP_13.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreastrigoMAGyP_14.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreasgirasolMAGyP_15.set('fieldAliases', {'girasol': 'girasol', });
lyr_HectreassojaMAGyP_16.set('fieldAliases', {'soja': 'soja', });
lyr_Localidades_17.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_18.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'admin': 'admin', });
lyr_BER_19.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'admin': 'admin', });
lyr_CAIRVenadoTuerto_20.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinRosario_21.set('fieldAliases', {'LOCALIDAD': 'LOCALIDAD', });
lyr_Departamento_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasreasruralesINDEC_4.set('fieldImages', {'Viv Rur': 'TextEdit', });
lyr_CabezasporcinosMAGyP_5.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_6.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezascaprinosMAGyP_7.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasbovinosMAGyP_8.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreashortalizasINDEC_9.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasduraznerosINDEC_10.set('fieldImages', {'Duraznero': 'TextEdit', });
lyr_HectreslegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasarndanosINDEC_12.set('fieldImages', {'Arandano': 'TextEdit', });
lyr_HectreasmazMAGyP_13.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreastrigoMAGyP_14.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreasgirasolMAGyP_15.set('fieldImages', {'girasol': 'TextEdit', });
lyr_HectreassojaMAGyP_16.set('fieldImages', {'soja': 'TextEdit', });
lyr_Localidades_17.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_18.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_BER_19.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_CAIRVenadoTuerto_20.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinRosario_21.set('fieldImages', {'LOCALIDAD': 'TextEdit', });
lyr_Departamento_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasreasruralesINDEC_4.set('fieldLabels', {'Viv Rur': 'inline label', });
lyr_CabezasporcinosMAGyP_5.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_6.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezascaprinosMAGyP_7.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasbovinosMAGyP_8.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreashortalizasINDEC_9.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasduraznerosINDEC_10.set('fieldLabels', {'Duraznero': 'inline label', });
lyr_HectreslegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasarndanosINDEC_12.set('fieldLabels', {'Arandano': 'inline label', });
lyr_HectreasmazMAGyP_13.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreastrigoMAGyP_14.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreasgirasolMAGyP_15.set('fieldLabels', {'girasol': 'inline label', });
lyr_HectreassojaMAGyP_16.set('fieldLabels', {'soja': 'inline label', });
lyr_Localidades_17.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_18.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'admin': 'inline label', });
lyr_BER_19.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'admin': 'inline label', });
lyr_CAIRVenadoTuerto_20.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinRosario_21.set('fieldLabels', {'LOCALIDAD': 'inline label', });
lyr_DelegacinRosario_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});