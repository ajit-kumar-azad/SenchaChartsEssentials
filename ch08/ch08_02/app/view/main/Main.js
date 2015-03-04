Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'SCE.chart.MarketClock',
        'SCE.series.MarketClock',
        'SCE.store.MarketTimings',
        'SCE.store.LocalMarketTimings',
        'SCE.interactions.Annotation'
    ],

    xtype: 'app-main',

    items: [{
        xtype: 'marketclock',
        interactions: ['annotation'],
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