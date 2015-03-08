Ext.define('SCE.interactions.ItemHighlight', {

    extend: 'Ext.chart.interactions.ItemHighlight',

    type: 'sce-itemhighlight',
    alias: 'interaction.sce-itemhighlight',

    gestures: {
        mousemove: Ext.emptyFn,
        mouseenter: Ext.emptyFn,
        mouseleave: Ext.emptyFn,
        mousedown: Ext.emptyFn,
        mouseup: Ext.emptyFn
    }

});