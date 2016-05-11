$(function() {
  d3.csv('data/data.csv', function(error, data){
  var myChart = SquareBin();
  // var myChart = SquareBin().color('#f39c12')
  // 							.len(10)
  // 							.xLabel('THIS IS X AXIS')
  // 							.yLabel(' Y AXIS TESTING')
  // 							.grid(true);

  var chartWrapper = d3.select('#chart')
      .datum(data)
      .call(myChart);
  });
});