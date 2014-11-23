Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    layout: {
        type: 'fit'
    },

    items: {
        xtype: 'spacefilling',
        series: {
            type: 'gauge',
            minimum: 100,
            maximum: 800,
            value: 400,
            donut: 30,
            needle: true,
            colors: ['orange', 'blue']

        }
    }
});
