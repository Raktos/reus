/**
 * Created by Jason on 05/11/16.
 */

$(function() {
    var data = [
        {x: 1, y: 2},
        {x: 1, y: 4},
        {x: 2, y: 2},
        {x: 3, y: 2},
        {x: 4, y: 2},
        {x: 3, y: 8},
        {x: 2, y: 2},
        {x: 7, y: 8},
        {x: 10, y: 1},
        {x: 5, y: 3},
        {x: 7, y: 4},
        {x: 3, y: 3},
        {x: 8, y: 3},
        {x: 1, y: 2},
        {x: 1, y: 5}
    ];
    
    var data2 = [
        {x: 4, y: 2},
        {x: 2, y: 2},
        {x: 2, y: 2},
        {x: 3, y: 5},
        {x: 14, y: 2},
        {x: 28, y: 8},
        {x: 89, y: 78},
        {x: 4, y: 6},
        {x: 10, y: 1},
        {x: 5, y: 3},
        {x: 7, y: 4},
        {x: 3, y: 5},
        {x: 8, y: 5},
        {x: 1, y: 2},
        {x: 1, y: 5},
        {x: 1, y: 2},
        {x: 1, y: 4},
        {x: 2, y: 2},
        {x: 3, y: 2},
        {x: 4, y: 2},
        {x: 3, y: 8},
        {x: 2, y: 2},
        {x: 7, y: 8},
        {x: 10, y: 1},
        {x: 5, y: 3},
        {x: 7, y: 4},
        {x: 3, y: 3},
        {x: 8, y: 3},
        {x: 1, y: 2},
        {x: 1, y: 5}
    ];

    var lifeVsGDP = [
        {y: 31.3, x: 1200},
        {y: 32.26, x: 9000},
        {y: 35.25, x: 800},
        {y: 36.94, x: 3000},
        {y: 36.96, x: 1900},
        {y: 37.98, x: 600},
        {y: 39.01, x: 1900},
        {y: 39.33, x: 1300},
        {y: 39.47, x: 4900},
        {y: 41.24, x: 700},
        {y: 41.71, x: 1100},
        {y: 42.21, x: 800},
        {y: 42.65, x: 1400},
        {y: 42.77, x: 7200},
        {y: 42.84, x: 500},
        {y: 43.2, x: 600},
        {y: 44.46, x: 1100},
        {y: 44.56, x: 600},
        {y: 44.88, x: 1400},
        {y: 45.22, x: 1000},
        {y: 45.43, x: 900},
        {y: 46.56, x: 10700},
        {y: 46.97, x: 800},
        {y: 46.97, x: 800},
        {y: 47.34, x: 500},
        {y: 48.05, x: 1800},
        {y: 48.15, x: 1000},
        {y: 48.51, x: 1200},
        {y: 48.93, x: 700},
        {y: 49.54, x: 2100},
        {y: 50.02, x: 700},
        {y: 51.01, x: 900},
        {y: 51.08, x: 1100},
        {y: 51.61, x: 1600},
        {y: 51.93, x: 1800},
        {y: 53.43, x: 1500},
        {y: 53.58, x: 1400},
        {y: 54.3, x: 1700},
        {y: 54.38, x: 1700},
        {y: 55.79, x: 1800},
        {y: 56.14, x: 800},
        {y: 56.37, x: 1600},
        {y: 56.53, x: 2200},
        {y: 57.12, x: 5500},
        {y: 57.73, x: 1900},
        {y: 57.92, x: 1900},
        {y: 59.0, x: 1400},
        {y: 60.6, x: 2600},
        {y: 60.97, x: 800},
        {y: 61.19, x: 5800},
        {y: 61.33, x: 1900},
        {y: 61.71, x: 2900},
        {y: 62.2, x: 2100},
        {y: 63.09, x: 4000},
        {y: 63.16, x: 3400},
        {y: 63.48, x: 6300},
        {y: 63.62, x: 2900},
        {y: 63.66, x: 1600},
        {y: 63.81, x: 1800},
        {y: 64.0, x: 1700},
        {y: 64.19, x: 2200},
        {y: 64.37, x: 1000},
        {y: 64.76, x: 2500},
        {y: 64.78, x: 2400},
        {y: 64.88, x: 1800},
        {y: 65.23, x: 4100},
        {y: 65.71, x: 16700},
        {y: 66.28, x: 1200},
        {y: 66.5, x: 5400},
        {y: 66.65, x: 2600},
        {y: 66.68, x: 3500},
        {y: 67.66, x: 8900},
        {y: 67.81, x: 1500},
        {y: 67.96, x: 6000},
        {y: 68.43, x: 6100},
        {y: 68.73, x: 11800},
        {y: 68.88, x: 5800},
        {y: 68.94, x: 3200},
        {y: 69.23, x: 4000},
        {y: 69.29, x: 4600},
        {y: 69.31, x: 10200},
        {y: 69.35, x: 7000},
        {y: 69.39, x: 3300},
        {y: 69.59, x: 9500},
        {y: 69.6, x: 11400},
        {y: 69.68, x: 2300},
        {y: 70.04, x: 4000},
        {y: 70.05, x: 2500},
        {y: 70.31, x: 12300},
        {y: 70.41, x: 4000},
        {y: 70.54, x: 6000},
        {y: 70.62, x: 4800},
        {y: 70.62, x: 7000},
        {y: 70.79, x: 1300},
        {y: 70.88, x: 5100},
        {y: 71.13, x: 7600},
        {y: 71.14, x: 6300},
        {y: 71.24, x: 7400},
        {y: 71.4, x: 600},
        {y: 71.67, x: 9000},
        {y: 71.8, x: 11400},
        {y: 71.8, x: 7600},
        {y: 71.8, x: 6700},
        {y: 71.84, x: 15700},
        {y: 71.89, x: 3300},
        {y: 72.07, x: 4800},
        {y: 72.17, x: 13900},
        {y: 72.22, x: 5000},
        {y: 72.29, x: 6100},
        {y: 72.3, x: 9000},
        {y: 72.32, x: 6300},
        {y: 72.37, x: 4500},
        {y: 72.58, x: 13100},
        {y: 72.62, x: 3700},
        {y: 72.68, x: 1100},
        {y: 73.14, x: 21500},
        {y: 73.52, x: 15000},
        {y: 73.72, x: 16900},
        {y: 73.81, x: 4800},
        {y: 73.91, x: 11100},
        {y: 74.12, x: 5500},
        {y: 74.3, x: 23600},
        {y: 74.37, x: 10600},
        {y: 74.4, x: 4700},
        {y: 74.4, x: 6900},
        {y: 74.43, x: 13300},
        {y: 74.49, x: 6700},
        {y: 74.75, x: 23200},
        {y: 75.18, x: 15700},
        {y: 75.36, x: 17800},
        {y: 75.38, x: 11400},
        {y: 75.45, x: 17500},
        {y: 75.48, x: 11200},
        {y: 75.51, x: 19000},
        {y: 75.85, x: 3900},
        {y: 75.87, x: 12800},
        {y: 76.07, x: 6400},
        {y: 76.35, x: 18000},
        {y: 76.35, x: 9900},
        {y: 76.43, x: 9100},
        {y: 76.65, x: 19000},
        {y: 76.69, x: 8300},
        {y: 76.8, x: 2900},
        {y: 76.87, x: 23400},
        {y: 77.1, x: 31100},
        {y: 77.14, x: 37800},
        {y: 77.26, x: 16800},
        {y: 77.35, x: 29600},
        {y: 77.41, x: 36000},
        {y: 77.53, x: 7900},
        {y: 77.66, x: 55100},
        {y: 77.88, x: 4300},
        {y: 77.92, x: 27400},
        {y: 77.98, x: 28500},
        {y: 78.16, x: 27700},
        {y: 78.17, x: 30000},
        {y: 78.29, x: 29100},
        {y: 78.32, x: 21600},
        {y: 78.42, x: 27600},
        {y: 78.43, x: 17700},
        {y: 78.72, x: 14400},
        {y: 78.74, x: 28600},
        {y: 78.89, x: 20000},
        {y: 78.93, x: 40000},
        {y: 79.02, x: 19800},
        {y: 79.09, x: 37800},
        {y: 79.23, x: 22000},
        {y: 79.28, x: 27600},
        {y: 79.4, x: 26700},
        {y: 79.8, x: 30900},
        {y: 79.83, x: 29800},
        {y: 79.93, x: 28800},
        {y: 79.97, x: 26800},
        {y: 79.99, x: 32700},
        {y: 80.04, x: 40000},
        {y: 80.13, x: 29000},
        {y: 80.42, x: 23700},
        {y: 80.93, x: 28200},
        {y: 81.87, x: 19400},
        {y: 83.49, x: 26800}
    ];
    
    var dataBool = true;

    var lifeVsGDPchartWrapper = d3.select('#lifeVsGDP');
    var lifeVsGDPBins = SquareBin();
    lifeVsGDPBins.title('Life Expactancy vs GDP at Birth')
        .xLabel('GDP at Brith')
        .yLabel('Life Expectancy')
        .len(20)
        .opac(0.5)
        .grid(false);

    lifeVsGDPchartWrapper.datum(lifeVsGDP).call(lifeVsGDPBins);
    
    var bins = SquareBin();
    
    var chartWrapper = d3.select('#viz');

    chartWrapper.datum(data).call(bins);

    $('#data').click(function() {
        if (dataBool) {
            chartWrapper.datum(data2).call(bins);
        } else {
            chartWrapper.datum(data).call(bins);
        }

        dataBool = !dataBool;
    });

    $('#color').click(function() {
        bins.color($('#color-text').val());
        chartWrapper.call(bins);
    });

    $('#opac').click(function() {
        bins.opac($('#opac-text').val());
        chartWrapper.call(bins);
    });

    $('#len').click(function() {
        bins.len($('#len-text').val());
        chartWrapper.call(bins);
    });

    $('#grid').click(function() {
        bins.grid(!bins.grid());
        chartWrapper.call(bins);
    });

    $('#height').click(function() {
        bins.height($('#height-text').val());
        chartWrapper.call(bins);
    });

    $('#width').click(function() {
        bins.width($('#width-text').val());
        chartWrapper.call(bins);
    });

    $('#title').click(function() {
        bins.title($('#title-text').val());
        chartWrapper.call(bins);
    });

    $('#xLabel').click(function() {
        bins.xLabel($('#xLabel-text').val());
        chartWrapper.call(bins);
    });

    $('#yLabel').click(function() {
        bins.yLabel($('#yLabel-text').val());
        chartWrapper.call(bins);
    });
});
