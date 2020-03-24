/*
----------------------------------------
    : Custom - Sparkline Charts js :
----------------------------------------
*/
"use strict";
$(document).ready(function() {
	/* -- Sparkline - Line -- */
	var sparklineLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#sparkline-line').sparkline(sparklineLineData, {
	    type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#944dff',
        fillColor: 'transparent',
        highlightLineColor: '#e9eff9',
        highlightSpotColor: 'rgba(148,77,255,0.5)'
	});
	/* -- Sparkline - Area Line -- */
	var sparklineAreaLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#sparkline-area-line').sparkline(sparklineAreaLineData, {
        type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#944dff',
        fillColor: 'rgba(148,77,255,0.5)',
        highlightLineColor: '#e9eff9',
        highlightSpotColor: 'rgba(148,77,255,0.5)'
	});
	/* -----  Sparkline - Pie Chart  ----- */
	var sparklinePieData = [30, 30, 30];
    $('#sparkline-pie').sparkline(sparklinePieData, {
        type: 'pie',
        width: '150',
        height: '150',
        sliceColors: ['#ffe411', '#e9eff9', '#944dff']
    });
	/* -----  Sparkline - Bar  ----- */
	var sparklineBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#sparkline-bar').sparkline(sparklineBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#944dff',
        barWidth: '12',
        barSpacing: '5'      
	});
	/* -----  Sparkline - Composite Chart  ----- */
	var sparklineCompositeBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	var sparklineCompositeLineData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#sparkline-composite-bar').sparkline(sparklineCompositeBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#944dff',
        barWidth: '12',
        barSpacing: '5'
    });    
    $('#sparkline-composite-bar').sparkline(sparklineCompositeLineData, {
        type: 'line',
        width: "100%",
        height: '150',
        lineColor: '#ff4b5b',
        fillColor: 'transparent',
        composite: true,
        highlightLineColor: '#e9eff9',
        highlightSpotColor: 'rgba(148,77,255,0.5)'
    });
     /* -----  Sparkline - Tristate Chart  ----- */
    var sparklineTristateData = [1,0,1,-1,-1,1,-1,0,0,1];
	$("#sparkline-tristate").sparkline(sparklineTristateData, {
	    type: 'tristate',
	    width: '150',
	    height: '150',
	    posBarColor: '#944dff',
	    negBarColor: '#ffe411',
	    zeroBarColor: '#e9eff9',
	    barWidth: 12,
	    barSpacing: 5
	});
    /* -----  Sparkline - Discrete Chart  ----- */
    var sparklineDiscreteData = [4,6,7,7,4,3,2,1,4,4];
    $("#sparkline-discrete").sparkline(sparklineDiscreteData, {
    	type: 'discrete',
	    width: '150',
	    height: '50',
	    lineColor: '#944dff',
	    thresholdColor: '#944dff',
	    thresholdWidth: '12',
	});
    /* -----  Sparkline - Bullet Chart  ----- */
    var sparklineBulletData = [10,12,12,9,7];
    $("#sparkline-bullet").sparkline(sparklineBulletData, {
	    type: 'bullet',
	    width: '150',
	    height: '50',
	    targetColor: '#ff4b5b',
	    performanceColor: '#944dff',
    	rangeColors: ['rgba(148,77,255,0.2)','rgba(148,77,255,0.4)','rgba(148,77,255,0.6)']
	});
    /* -----  Sparkline - Box Plot Chart  ----- */
    var sparklineBoxPlotData = [4,27,34,52,54,59,61,68,78,82,85,87,91,93,100];
    $("#sparkline-box-plot").sparkline(sparklineBoxPlotData, {
	    type: 'box',
	    width: '150',
	    height: '50',
	    raw: false,
	    boxLineColor: '#944dff',
	    boxFillColor: 'rgba(148,77,255,0.5)',
	    whiskerColor: '#944dff',
	    outlierLineColor: '#944dff',
	    outlierFillColor: '#e9eff9',
	    medianColor: '#ff4b5b',
	    targetColor: '#2bcd72'
	});
});