Ext.define('SCE.view.main.Pie', {
    extend: 'Ext.container.Container',

    xtype: 'app-pie',
    
    requires: ['SCE.view.chart.theme.Awesome'],

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        this.callParent(arguments);

        Ext.create('Ext.chart.PolarChart', {
        // xtype: 'cartesian',
        floating: true,
        title: 'Chart',

        // theme: 'awesome',

        interactions: ['rotate'],
        height: 500,
        width: 500,

        insetPadding: 40,
        // insetPadding: {
        //     top: 40,
        //     left: 20,
        //     bottom: 5,
        //     right: 5
        // },

        legend: true,

        autoShow: true,

        store: {
            fields: ['month', 'sales', 'order'],
            data: [
                { month: 'Q1', sales: 100, order: 20 },
                { month: 'Q2', sales: 250, order: 120 },
                { month: 'Q3', sales: 75, order: 40},
                { month: 'Q4', sales: 120, order: 25}
            ]
        },
        series: {
            type: 'pie',
            label: {
                field: 'month',
                display: 'rotate'
            },
            xField: 'sales',
            renderer: function(sprite, config, rendererData, index) {
                var sales = rendererData.store.getData().items[index].get('sales');
                var order = rendererData.store.getData().items[index].get('order');

                return {
                    strokeStyle: 'red',
                    lineWidth: 2,
                    label: sprite.attr.label + ' Sales: ₹' + sales,
                    endRho: sprite.attr.endRho * order/sales * 1.5
                }
            }

        }
    });
    }
});
