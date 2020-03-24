/*
-------------------------------------------
    : Custom - Dashboard Analytics js :
-------------------------------------------
*/
"use strict";
$(document).ready(function() {
    /* -- Morris - Area Chart without Smooth -- */
    Morris.Area({
        element: 'morris-area-without-smooth',
        data: [
            { y: '2006', a: 0, b: 0 },
            { y: '2007', a: 130,  b: 100 },
            { y: '2008', a: 80,  b: 60 },
            { y: '2009', a: 70,  b: 200 },
            { y: '2010', a: 180,  b: 150 },
            { y: '2011', a: 105,  b: 90 },
            { y: '2012', a: 250,  b: 150 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#ffe411', '#944dff'],
        pointStrokeColors: ['#ffffff', '#ffffff'],
        fillOpacity: 0.8,
        pointSize: 0,
        lineWidth: 0,
        behaveLikeLine: true,
        smooth: false,
        gridLineColor: 'rgba(0,0,0,0.1)',
        gridTextColor: "#8A98AC",
        hideHover: 'auto',
        resize: true,
    });    
    /* -- Morris - Donut Chart -- */
    Morris.Donut({
      element: 'morris-donut',
      data: [
        {value: 70, label: 'Foo'},
        {value: 15, label: 'Bar'},
        {value: 10, label: 'Baz'}
      ],
      colors: ['#944dff', '#ffe411','#e9eff9'],
      resize: true,
      labelColor: "#8A98AC",
      backgroundColor: "transparent",
      formatter: function (x) { return x + "%"}
    });
    /* -- Morris - Bar Chart -- */
    Morris.Bar({
        element: 'morris-bar',
        data: [
            {y: '2011 Q1', a: 30, b: 20, c: 10},
            {y: '2011 Q2', a: 10, b: 20, c: 10},
            {y: '2011 Q3', a: 40, b: 30, c: 20},
            {y: '2011 Q4', a: 20, b: 30, c: 40},
            {y: '2011 Q5', a: 10, b: 20, c: 10},
            {y: '2011 Q6', a: 10, b: 20, c: 30}
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B','Series C'],
        barColors: ['#944dff', '#ffe411','#e9eff9'],
        gridLineColor: 'rgba(0,0,0,0.1)',
        gridTextColor: "#8A98AC",
        hideHover: 'auto',
        resize: true
    });
    /* -- Piety - Updating Chart -- */
    var updatingChart = $(".piety-updating-chart").peity("line", { 
        width: 70,
        height: 30,
        fill: ["rgba(148,77,255,0.5)"],
        stroke: "#944dff"
    })
    setInterval(function() {
      var random = Math.round(Math.random() * 10)
      var values = updatingChart.text().split(",")
      values.shift()
      values.push(random)

      updatingChart
        .text(values.join(","))
        .change()
    }, 1000)    
});