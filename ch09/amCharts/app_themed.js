var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "awesome",
    "creditsPosition": "bottom-right",
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
        "periodValueText": "Total: ₹ [[value.sum]]"
    },
    "dataProvider": [
        { month: 'Q1', sales: 100, order: 20 },
        { month: 'Q2', sales: 250, order: 120 },
        { month: 'Q3', sales: 75, order: 40},
        { month: 'Q4', sales: 120, order: 25}
    ],
    "valueAxes": [{
        "id": "salesAxis",
        "position": "left",
        "title": "Sales",
        "labelFunction": function(value, valueText, valueAxis) {
            return "₹ " + value;
        }
    }, {
        "id": "orderAxis",
        "position": "right",
        "title": "Order",
        "labelFunction": function(value, valueText, valueAxis) {
            return "₹ " + value;
        }
    }],
    "graphs": [{
        "balloonText": "[[month]] Sales: ₹ [[value]]",
        "dashLengthField": "dashLength",
        "legendValueText": "[[month]]: ₹ [[value]]",
        "title": "Sales",
        "type": "column",
        "valueField": "sales",
        "valueAxis": "salesAxis"
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
         "fullWidth":true,
        "valueBalloonsEnabled": false,
        "zoomable": false
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "month"
});