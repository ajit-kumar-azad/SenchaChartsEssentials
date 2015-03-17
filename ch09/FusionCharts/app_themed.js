FusionCharts.ready(function () {
    var salesAnlysisChart = new FusionCharts({
        type: 'mscombidy2d',
        renderAt: 'chartdiv',
        width: '600',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "awesome",
                "caption": "Quarterly Sales and Orders",
                "xAxisname": "Quarter",
                "pYAxisName": "Sales",
                "sYAxisName": "Order"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Q1"
                        },
                        {
                            "label": "Q2"
                        },
                        {
                            "label": "Q3"
                        },
                        {
                            "label": "Q4"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesName": "Sales",
                    "data": [
                        {
                            "value": 100
                        },
                        {
                            "value": 250
                        },
                        {
                            "value": 75
                        },
                        {
                            "value": 120
                        }
                    ]
                },
                {
                    "seriesName": "Order",
                    "parentYAxis": "S",
                    "renderAs": "area",
                    "data": [
                        {
                            "value": 20,
                            "anchorRadius": "10",
                            "anchorBgColor": "#FF0000"
                        },
                        {
                            "value": 120,
                            "anchorRadius": "60",
                            "anchorBgColor": "#000000"
                        },
                        {
                            "value": 40,
                            "anchorRadius": "20",
                            "anchorBgColor": "#FF0000"
                        },
                        {
                            "value": 25,
                            "anchorRadius": "15",
                            "anchorBgColor": "#000000"
                        }
                    ]
                }
            ]
        }
    }).render();
});