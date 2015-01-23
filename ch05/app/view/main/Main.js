Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.chart.MarketClock',
        'SCE.series.MarketClock',
        'SCE.store.MarketTimings'
    ],

    xtype: 'app-main',

    items: [{
            xtype: 'marketclock',
            height: 700,
            width: 700,
            store: Ext.create('SCE.store.MarketTimings'),
            series: [{
                type: 'marketclock',
                angleField: 'data'
            }]
        }]
});