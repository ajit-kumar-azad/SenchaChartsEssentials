var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "creditsPosition": "bottom-right",
    "fontSize": 14,
    "titles": [
        {
            "size": 22,
            "text": "Quarterly Sales and Orders"
        }
    ],
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 80,
        "periodValueText": "Total: ₹ [[value.sum]]",
        "backgroundColor": "#FBEFF2",
        "backgroundAlpha": 0.7,
        "fontSize": 11
    },
    "dataProvider": [
        { month: 'Q1', sales: 100, order: 20 },
        { month: 'Q2', sales: 250, order: 120 },
        { month: 'Q3', sales: 75, order: 40},
        { month: 'Q4', sales: 120, order: 25}
    ],
    "valueAxes": [{
        "id": "salesAxis",
        "gridAlpha": 0,
        "position": "left",
        "title": "Sales",
        "labelFunction": function(value, valueText, valueAxis) {
            return "₹ " + value;
        }
    }, {
        "id": "orderAxis",
        "gridAlpha": 0,
        "axisColor": "red",
        "position": "right",
        "title": "Order",
        "labelFunction": function(value, valueText, valueAxis) {
            return "₹ " + value;
        }
    }],
    "graphs": [{
        "balloonText": "[[month]] Sales: ₹ [[value]]",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendValueText": "[[month]]: ₹ [[value]]",
        "title": "Sales",
        "type": "column",
        "valueField": "sales",
        "valueAxis": "salesAxis",
        "fillColors": "#94AE0A",
        "lineColor": "#566606"
    }, {
        "balloonText": "[[month]] Orders: ₹ [[value]]",
        "bullet": "round",
        "bulletAlpha": 0.4,
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletSizeField": "order",
        "dashLengthField": "dashLength",
        "legendValueText": "[[month]]: ₹ [[value]]",
        "title": "Order",
        "fillAlphas": 0.4,
        "valueField": "order",
        "valueAxis": "orderAxis",
        "fillColors": "red",
        "lineColor": "#486989"
    }],
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor":"#000000",
         "fullWidth":true,
        "valueBalloonsEnabled": false,
        "zoomable": false
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "month"
});