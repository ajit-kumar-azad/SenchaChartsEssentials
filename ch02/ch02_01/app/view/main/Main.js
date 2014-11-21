Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    requires: ['SCE.view.chart.theme.SCE'],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'cartesian',
        title: 'Chart',
        theme: 'sce',
        height: 500,
        width: 500,
        insetPadding: 40,
        legend: true,
        interactions: ['crosshair', 'itemhighlight'],
        store: {
            fields: ['sample', 'value'],
            data: [
                { month: 'Q1', sales: 100, order: 20 },
                { month: 'Q2', sales: 250, order: 120 },
                { month: 'Q3', sales: 75, order: 40},
                { month: 'Q4', sales: 120, order: 25}
            ]
        },
        axes: [{
            title: 'Sale',
            type: 'numeric',
            position: 'left',
            fields: ['sales']
        },
        {
            title: 'Order',
            type: 'numeric',
            position: 'right',
            fields: ['order'],
            maximum: 200
        },
        {
            title: 'Quarter',
            type: 'category',
            position: 'bottom',
            fields: ['month']
        }],
        sprites: [{
            type: 'text',
            text: 'Quaterly Sales and Orders',
            font: '22px Helvetica',
            width: 100,
            height: 20,
            x: 40,
            y: 20
        }],
        series: [{
            type: 'bar',
            xField: 'month',
            yField: 'sales',
            title: 'Sale',
            highlight: {
                strokeStyle: '#094144',
                fillStyle: '#60D5DB'
            }
        }, {
            type: 'area',
            xField: 'month',
            yField: 'order',
            title: 'Order',
            showMarkers: true,
            marker: {
                type: 'circle',
                radius: 5
            },
            style: {
                opacity: 0.5
            }
        }]
    }]
});
