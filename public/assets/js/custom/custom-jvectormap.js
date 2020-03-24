/*
-----------------------------------
    : Custom - Map jVector js :
-----------------------------------
*/
"use strict";
$(document).ready(function() {
    /* -- jVector Map - World Map -- */
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        markerStyle: {
          initial: {
            fill: '#2e2e2e',
            stroke: '#2e2e2e',
            "fill-opacity": 1,
            "stroke-width": 15,
            "stroke-opacity": 0.2
          }
        },
        markers: [
          {latLng: [37.18, -93.35], name: 'United States'},
          {latLng: [20.59, 78.96], name: 'India'},
          {latLng: [-25.27, 133.77], name: 'Australia'},
          {latLng: [-38.41, -63.61], name: 'Argentina'},
          {latLng: [61.52, 105.31], name: 'Russia'},
          {latLng: [-30.55, 22.93], name: 'South Africa'},
        ],
        focusOn: {
          x: 0,
          y: 0,
          scale: 1
        },
        series: {
          regions: [{
            values: {
                US:'#944dff',
                AU:'#ffe411',
                IN:'#08d26f',                
                AR:'#fc4f68',
                RU:'#81cef6',
                ZA:'#bcc4dc',                
            }
          }]
        },
        regionStyle: {
            initial: {
                fill: '#e9eff9'
            }
        }
    });
    /* -- jVector Map - USA Map --  */
    $('#usa').vectorMap({map: 'us_aea_en',backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#944dff'
            }
    }});
    /* -- jVector Map - India Map -- */
    $('#india').vectorMap({map: 'in_mill',backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#08d26f'
            }
    }});
    /* -- jVector Map - Australia Map -- */
    $('#australia').vectorMap({map : 'au_mill',backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#ffe411'
            }
    }});
    /* -- jVector Map - Argentina Map -- */
    $('#argentina').vectorMap({map: 'ar_mill',backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#fc4f68'
            }
    }});
    /* -- jVector Map - Russia Map -- */
    $('#russia').vectorMap({map: 'ru_mill',backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#81cef6'
            }
    }});
    /* -- jVector Map - South Africa Map -- */
    $('#south-africa').vectorMap({map: 'za_mill',backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#bcc4dc'
            }
    }});
});