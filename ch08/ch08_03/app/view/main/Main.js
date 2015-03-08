Ext.define('SCE.view.main.Main', {
    extend: 'Ext.panel.Panel',

    xtype: 'app-main',

    requires: ['Ext.chart.SpaceFillingChart', 
            'Ext.draw.Color', 
            'SCE.store.PTElements',
            'SCE.series.PeriodicTable',
            'SCE.store.HindiPTElements',
            'SCE.chart.PeriodicTable',
            'SCE.interactions.ItemHighlight'],
    
    layout: {
        type: 'fit'
    },

    dockedItems: {
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'label',
            text: 'Language:'
        },{
            text: 'Hindi',
            handler: function(btn) {
                var newStore = Ext.getStore('HindiPTElements');
                if (!newStore)
                    newStore = Ext.create('SCE.store.HindiPTElements');

                btn.up('app-main').down('periodictable').setStore(newStore);
            }
        }, {
            text: 'English',
            handler: function(btn) {
                var newStore = Ext.getStore('PTElements');
                if (!newStore)
                    newStore = Ext.create('SCE.store.PTElements');

                btn.up('app-main').down('periodictable').setStore(newStore);
            }
        }]
    }, 

    items: [{
        xtype: 'periodictable',
        interactions: ['sce-itemhighlight'],
        colors: [],
        store: Ext.create('SCE.store.HindiPTElements'),
        series: {
            type: 'periodictable',
            highlight: {
                fillStyle: 'cyan',
                width: 200,
                height: 200,
                strokeStyle: 'red'
            }
        },
        width: 1000,
        height: 700,
        sprites: {
            type: 'text',
            text: 'Periodic Table',
            fontSize: 40,
            x: 400,
            y: 40
        },
        listeners: {
            itemhighlight: function(itemSelected) {
                if (itemSelected && itemSelected.record) {
                    alert('Selected element is: ' + itemSelected.record.get(itemSelected.field));
                }
            }
        }
    }]
});
