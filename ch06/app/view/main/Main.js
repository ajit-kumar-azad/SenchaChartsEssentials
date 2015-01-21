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
