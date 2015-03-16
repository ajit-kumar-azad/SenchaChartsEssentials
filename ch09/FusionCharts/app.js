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
                "xAxisname": "Quarter",
                "pYAxisName": "Sales",
                "sYAxisName": "Order",
                "numberPrefix": "$",
                "showBorder": "0",
                "showValues": "0",
                "paletteColors": "#94AE0A,#486989",
                "baseFontSize": "14",
                "bgImage": "http://www.psdgraphics.com/file/energy-efficiency-background.jpg",
                "bgImageAlpha": "40",
                "bgImageScale": "20",
                "showCanvasBorder": "0",
                "canvasBgAlpha": "0",
                // "canvasBgColor": "#ffffff",
                "captionAlignment": "left",
                "captionFontSize": "22",
                "divlineColor": "#FFFFFF",
                // "divLineIsDashed": "1",
                // "divLineDashLen": "1",
                // "divLineGapLen": "1",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "plotHoverEffect": "1",
                // "toolTipColor": "#ffffff",
                // "toolTipBorderThickness": "0",
                // "toolTipBgColor": "#000000",
                // "toolTipBgAlpha": "80",
                // "toolTipBorderRadius": "2",
                // "toolTipPadding": "5",
                // "legendBgColor": "#ffffff",
                // "legendBorderAlpha": '0',
                // "legendShadow": '0',
                // "legendItemFontSize": '10',
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
                            "value": "100"
                        },
                        {
                            "value": "250"
                        },
                        {
                            "value": "75"
                        },
                        {
                            "value": "120"
                        }
                    ]
                },
                {
                    "seriesName": "Order",
                    "parentYAxis": "S",
                    "renderAs": "line",
                    "data": [
                        {
                            "value": "20"
                        },
                        {
                            "value": "120"
                        },
                        {
                            "value": "40"
                        },
                        {
                            "value": "25"
                        }
                    ]
                }
            ]
        }
    }).render();
});