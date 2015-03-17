// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

        var data = new google.visualization.arrayToDataTable([
          ['Month', 'Sales', {role: 'tooltip'}, 'Order', {role: 'tooltip'}, {role: 'emphasis'}, {'type': 'string', 'role': 'style'}],
          ['Q1', 100, 'Q1 Sales: \u20B9100', 20, 'Q1 Orders: \u20B920', false, 'point { size: 10; fill-color: red'],
          ['Q2', 250, 'Q2 Sales: \u20B9250', 120, 'Q2 Orders: \u20B9120', false, 'point { size: 60; fill-color: black'],
          ['Q3', 75, 'Q3 Sales: \u20B975', 40, 'Q3 Orders: \u20B940', true, 'point { size: 20; fill-color: red'],
          ['Q4', 120, 'Q4 Sales: \u20B9120', 25, 'Q4 Orders: \u20B925', true, 'point { size: 15; fill-color: black']
        ]);

        var options = {
          colors: ['#94AE0A', '#486989'],
          // theme: 'maximized',
          title: 'Quarterly Sales and Orders',
          titleTextStyle: {
            fontSize: 22
          },
          // backgroundColor: {
          //   fill: 'pink'
          // },
          animation: {
            startup: true,
            easing: 'in',
            duration: 1000
          },
          legend: {
            alignment: 'center',
            position: 'bottom',
            textStyle: {
              fontSize: 22
            }
          },
          series: {
            0: { type: 'bars' , targetAxisIndex: 0 }, 
            1: { type: 'area', targetAxisIndex: 1} 
          },
          hAxis: {
            title: 'Quarter',
            titleTextStyle: { 
              color: 'red',
              italic: false,
              bold: true 
            }
          },
          vAxes: {
            0: {
              title: 'Sales',
              titleTextStyle: { 
                italic: false 
              },
              format: "\u20B9 #,###"
            }, 
            1: {
              title: 'Order',
              titleTextStyle: { 
                italic: false 
              },
              format: "\u20B9 #,###",
              // gridlines: {
              //   color: '#ffffff'
              // }
            }
          },
          pointSize: 10,
          dataOpacity: 0.3,
          areaOpacity: 0.5,
          fontSize: 14
        };

      var chart = new google.visualization.ComboChart(document.getElementById('chartdiv'));
      chart.draw(data, options);
}