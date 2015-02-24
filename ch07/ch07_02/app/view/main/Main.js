Ext.define('SCE.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'polar',
        title: 'Chart',
        height: 500,
        width: 500,
        interactions: ['rotate'],
        store: {
            fields: ['sample', 'value'],
            data: [
                { sample: '1', value: 100 },
                { sample: '2', value: 250 },
                { sample: '3', value: 175}
            ]
        },
        series: [{
            type: 'pie',
            xField: 'value',
            label: {
                field: 'sample',
                renderer: function(txt) {
                    return "Sample " + txt;
                }
            }
        }]
    }]
});
