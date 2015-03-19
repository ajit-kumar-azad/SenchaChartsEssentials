$(function () {
    new Highcharts.Chart({

        chart: {
            renderTo: 'chartdiv'
        },

        title: {
            text: 'Quarterly Sales and Orders'
        },

        xAxis: { 
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
            title: 'Quarters',
            labels: {
                format: '{value}'
            }
        },

        yAxis: [{
            tickWidth: 1,
            gridLineWidth: 0,
            allowDecimals: false,
            min: 0,
            lineWidth: 1,
            title: {
                text: 'Sales'
            },
            labels: {
                format: '₹ {value}'
            }
        }, {
            tickWidth: 1,
            gridLineWidth: 0,
            lineColor: 'red',
            tickColor: 'red',
            allowDecimals: false,
            min: 0,
            lineWidth: 1,
            title: {
                text: 'Orders'
            },
            opposite: true,
            labels: {
                format: '₹ {value}'
            }
        }],

        tooltip: {
            formatter: function () {
                return this.point.name + ' ' + this.series.name + ': ₹' + this.y;
            }
        },

        plotOptions: {
            area: {
                fillOpacity: 0.3
            }
        },

        series: [{
            type: 'column',
            name: 'Sales',
            yAxis: 0,
            data: [{
                name: 'Q1',
                type: 'category',
                y: 100
            }, {
                name: 'Q2',
                type: 'category',
                y: 250
            }, {
                name: 'Q3',
                type: 'category',
                y: 75
            }, {
                name: 'Q4',
                type: 'category',
                y: 120
            }],
            style: {
                color: 'red'
            }
        }, {
            type: 'area',
            name: 'Orders',
            yAxis: 1,
            data: [{
                name: 'Q1',
                type: 'category',
                y: 20,
                marker: {
                    radius: 8
                }
            }, {
                name: 'Q2',
                type: 'category',
                y: 120,
                marker: {
                    radius: 24,
                    states: {
                        hover: {
                            radius: 28
                        }
                    }
                }
            }, {
                name: 'Q3',
                type: 'category',
                y: 40,
                marker: {
                    radius: 16
                }
            }, {
                name: 'Q4',
                type: 'category',
                y: 25,
                marker: {
                    radius: 10
                }
            }]
        }]
    });
});