Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.chart.MarketClock',
        'SCE.series.MarketClock',
        'SCE.store.MarketTimings',
        'SCE.store.LocalMarketTimings'
    ],

    xtype: 'app-main',

    items: [{
        xtype: 'marketclock',
        // legend: {
        //     docked: 'right'
        // },
        height: 500,
        width: 500,
        store: Ext.create('SCE.store.MarketTimings'),
        series: [{
            type: 'marketclock',
            angleField: 'data'
        }]
    }]
});