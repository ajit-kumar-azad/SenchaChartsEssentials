Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.chart.MarketClock',
        'SCE.series.MarketClock',
        'SCE.store.MarketTimings'
    ],

    xtype: 'app-main',
    layout: 'fit',
    width: 500,
    height: 500,

    items: [{
            xtype: 'marketclock',
            width: '100%',
            height: 500,
            store: Ext.create('SCE.store.MarketTimings'),
            insetPadding: 50,
            innerPadding: 20,
            series: [{
                type: 'marketclock',
                angleField: 'data'
            }]
        }]
});