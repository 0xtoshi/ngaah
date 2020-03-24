/*
----------------------------------------------
    : Custom - Dashboard Social Media js :
----------------------------------------------
*/
"use strict";
$(document).ready(function() {
    var navigation_performance = document.querySelector('.js-switch-performance');
    var switchery = new Switchery(navigation_performance, { color: '#944dff', size: 'small' });
    /* -----  Piety - Data Attributes Chart ----- */
    $(".piety-data-attributes span").peity("donut");
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
	/* -----  Chartjs - Global Style  ----- */
    Chart.defaults.global.defaultFontFamily = 'Nunito Sans';
    Chart.defaults.global.defaultFontColor = '#8A98AC';
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontStyle = 'normal';
    Chart.defaults.global.maintainAspectRatio = 0;
    Chart.defaults.global.lineWidth = 2;
    Chart.defaults.global.tooltips.backgroundColor = '#282828';
    Chart.defaults.global.tooltips.titleFontSize = 14;
    Chart.defaults.global.tooltips.titleFontStyle = 'normal';
    Chart.defaults.global.tooltips.bodyFontSize = 12;
    Chart.defaults.global.tooltips.bodyFontStyle = 'normal';
    Chart.defaults.global.tooltips.bodyFontColor = '#8A98AC';
    Chart.defaults.global.tooltips.xPadding = 10;
    Chart.defaults.global.tooltips.yPadding = 10;
    Chart.defaults.global.tooltips.titleMarginBottom = 10;
    Chart.defaults.global.tooltips.bodySpacing = 8;
    Chart.defaults.global.tooltips.cornerRadius = 5;    
    Chart.defaults.global.legend.labels.boxWidth = 15;
    Chart.defaults.global.legend.labels.fontSize = 15;
    Chart.defaults.global.legend.labels.padding = 16;
    /* -----  Chartjs - Boundary Area Chart  ----- */
    var boundaryAreaID = document.getElementById("chartjs-boundary-area-chart").getContext('2d');
    var boundaryArea = new Chart(boundaryAreaID, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                backgroundColor: ["rgba(148,77,255,0.5)"],
                borderColor: ["#944dff"],
                pointBorderColor: ["#944dff","#944dff","#944dff","#944dff","#944dff","#944dff","#944dff"],
                pointBackgroundColor: ["#944dff","#944dff","#944dff","#944dff","#944dff","#944dff","#944dff"],
                pointBorderWidth: 0,
                data: [-25.05, 76.00, 75.89, -19.27, -19.38, 55.86, 11.17, -70.45],
                label: 'Series A',
                fill: 'start'
            }]
        },
        options: {
            title: {
                text: 'fill: start',
                display: false
            },
            maintainAspectRatio: true,
            spanGaps: true,
            elements: {
            	point: {
		            radius: 0,
		          }                   
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            legend: {
	            display: false
	        },
            scales: {
                xAxes: [{  
                	display: false,
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0
                    },     
                    gridLines: {
                        color: '#e9eff9',
                        lineWidth: 1,
                        borderDash: [3]
                    }
                }],
                yAxes: [{
                	display: false,
                    gridLines: {
                        color: '#e9eff9',
                        lineWidth: 1,
                        borderDash: [3],
                        zeroLineColor: '#e9eff9',
                    }
                }]
            }
        }
    });
    /* -----  Chartjs - Bar Chart  ----- */
    var barChartID = document.getElementById("chartjs-bar-chart").getContext('2d');
    var barChart = new Chart(barChartID, {
        type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Conversion',
                    backgroundColor: '#944dff',
                    borderWidth: 0.5,
                    data: [50, 70, 40, 100, 60, 40, 80, 40, 50, 70, 30, 60]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: false,       
                        gridLines: {
                            color: '#e9eff9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                    	display: false,
                        gridLines: {
                            color: '#e9eff9',
                            lineWidth: 1,
                            borderDash: [3]
                        },
		              	ticks: {
			                display: false,
			                min: 0,
			                max: 100
			            }
                    }]
                }
            }
    });
    /* -----  Chartjs - Stacked Area Chart  ----- */
    var stackedAreaID = document.getElementById("chartjs-stacked-area-chart").getContext('2d');
    var stackedArea = new Chart(stackedAreaID, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Series A',
                borderColor: ["#944dff"],
                backgroundColor: ["#944dff"],
                pointBorderColor: ["#944dff","#944dff","#944dff","#944dff","#944dff","#944dff","#944dff"],
                pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBorderWidth: 2,
                data: [100, 17, 30, 18, 138, 17, 55],
            }, {
                label: 'Series B',
                borderColor: ["#ffe411"],
                backgroundColor: ["#ffe411"],
                pointBorderColor: ["#ffe411","#ffe411","#ffe411","#ffe411","#ffe411","#ffe411","#ffe411"],
                pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBorderWidth: 2,
                data: [15, 138, 55, 50, 55, 25, 70],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            elements: {
            	point: {
		            radius: 0,
		          }
            },
            scales: {
                xAxes: [{
                	display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    },
                    gridLines: {
                        color: '#e9eff9',
                        lineWidth: 1,
                        borderDash: [3]
                    }
                }],
                yAxes: [{
                	display: false,
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    gridLines: {
                        color: '#e9eff9',
                        lineWidth: 1,
                        borderDash: [3]
                    }
                }]
            }
        }
    });
    /* -- Chartjs - Pie Chart -- */
    var pieChartID = document.getElementById("chartjs-pie-chart").getContext('2d');
    var pieChart = new Chart(pieChartID, {
        type: 'pie',
        data: {
            datasets: [{
                data: [40,35,25],
                borderColor: 'transparent',
                backgroundColor: ["#944dff","#ffe411","#e9eff9"],
                label: 'Dataset 1'
            }],
            labels: ['Instagram','Facebook','News Feed']
        },
        options: {
            responsive: true,
            legend: {
                display: false
            }
        }
    });
    /* -- Chartjs - Doughnut Chart -- */
    var doughnutChartID = document.getElementById("chartjs-doughnut-chart").getContext('2d');
    var doughnutChart = new Chart(doughnutChartID, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [40,35,25],
                borderColor: 'transparent',
                backgroundColor: ["#944dff","#ffe411","#e9eff9"],
                label: 'Dataset 1'
            }],
            labels: ['Mobile','Tablet','Desktop']
        },
        options: {
            responsive: true,  
            cutoutPercentage: 75,              
            legend: {
                position: 'bottom'
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
});