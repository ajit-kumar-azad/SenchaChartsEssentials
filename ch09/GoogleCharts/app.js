// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

        var data = new google.visualization.arrayToDataTable([
          ['Month', 'Sales', 'Order'],
          ['Q1', 100, 20],
          ['Q2', 250, 120],
          ['Q3', 75, 40],
          ['Q4', 120, 25]
        ]);

        var options = {
          colors: ['#94AE0A', '#486989'],
          chart: {
            title: 'Quarterly Sales and Orders'
          },
          // backgroundColor: {
          //   fill: 'pink'
          // },
          series: {
            0: { type: 'bars' , axis: 'sales' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'order' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              sales: {label: 'Sales'}, // Left y-axis.
              order: {side: 'right', label: 'Order'} // Right y-axis.
            }
          }
        };

      var chart = new google.visualization.ComboChart(document.getElementById('chartdiv'));
      chart.draw(data, options);
}