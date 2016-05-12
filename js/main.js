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
    
    var dataBool = true;

    // Create an instance of your ParagraphChart, setting the color to blue
    var bins = SquareBin();

    // Select the container div, bind the data (datum) to it,
    // then call your instantiation of the ParagraphChart function
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
