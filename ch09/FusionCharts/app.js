FusionCharts.ready(function () {
    var salesAnlysisChart = new FusionCharts({
        type: 'mscombidy2d',    //http://docs.fusioncharts.com/tutorial-setup-list-of-charts.html
        renderAt: 'chartdiv',
        width: '600',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Sales and Orders",
                "captionPadding": "40",
                "xAxisname": "Quarter",
                "pYAxisName": "Sales",
                "sYAxisName": "Order",
                "numberPrefix": "₹",
                "sNumberPrefix": "₹",
                "showBorder": "0",
                "showValues": "0",
                "paletteColors": "#94AE0A,#486989",
                "baseFontSize": "14",
                // "bgImage": "http://www.psdgraphics.com/file/energy-efficiency-background.jpg",
                // "bgImageAlpha": "40",
                // "bgImageScale": "12",
                // "bgImageDisplayMode": "fit",
                "bgColor": "#ffffff",
                "showCanvasBorder": "0",
                "canvasBgAlpha": "0",
                // "canvasBgColor": "#ffffff",
                "captionAlignment": "left",
                "captionFontSize": "22",
                // "numDivLines": "0",
                // "divlineColor": "#FFFFFF",
                // "divLineIsDashed": "1",
                // "divLineDashLen": "1",
                // "divLineGapLen": "1",
                "showXAxisLine": "1",
                "xAxisLineThickness": "1",
                "xAxisLineColor": "#999999",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "plotHoverEffect": "1",
                "drawAnchors": "1",
                "anchorRadius": 10,
                "anchorBgColor": '#F78181',
                "anchorBgAlpha": "30",
                "anchorAlpha": "100",
                // "toolTipColor": "#ffffff",
                // "toolTipBorderThickness": "0",
                // "toolTipBgColor": "#000000",
                // "toolTipBgAlpha": "80",
                // "toolTipBorderRadius": "2",
                // "toolTipPadding": "5",
                "legendBgColor": "#FBEFF2",
                "legendBorderColor": '#CCCCCC',
                // "legendShadow": '0',
                "legendItemFontSize": '22',
                // "legendItemFontColor": '#666666'
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