Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.series.MarketClock',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'SCE.store.MarketTimings'
    ],

    xtype: 'app-main',
    layout: 'fit',
    width: 500,
    height: 500,

    items: [{
            xtype: 'polar',
            width: '100%',
            height: 500,
            store: Ext.create('SCE.store.MarketTimings', {}),
            insetPadding: 50,
            innerPadding: 20,
            series: [{
                type: 'marketclock',
                angleField: 'data',
                label: {
                    field: 'market',
                    display: 'inside'
                },
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('market') + ': ' + storeItem.get('data') + '%');
                    }
                }
            }],
            axes: [{
                type: 'numeric',
                position: 'radial',
                fields: 'data',
                // renderer: function (v) { return v + '%'; },
                grid: true,
                minimum: 0,
                maximum: 25,
                majorTickSteps: 4
            }, {
                type: 'category',
                position: 'angular',
                fields: 'market',
                grid: true
            }]
        }]
});