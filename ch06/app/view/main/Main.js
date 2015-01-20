/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    requires: ['Ext.chart.SpaceFillingChart', 
            'Ext.draw.Color', 
            'SCE.store.PTElements',
            'SCE.series.PeriodicTable'],
    
    layout: {
        type: 'fit'
    },

    items: {
        xtype: 'spacefilling',
        colors: [],
        store: Ext.create('SCE.store.PTElements'),
        series: {
            type: 'periodictable'
        },
        sprites: {
            type: 'text',
            text: 'Periodic Table',
            fontSize: 40,
            x: 400,
            y: 40
        }
    }
});
