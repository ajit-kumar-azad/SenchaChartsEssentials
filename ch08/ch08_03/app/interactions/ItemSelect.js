Ext.define('SCE.interactions.ItemSelect', {

    extend: 'Ext.chart.interactions.Abstract',

    type: 'itemselect',
    alias: 'interaction.itemselect',

    config: {
        gestures: {
            tap: 'onTapGesture',
            mousedown: 'onTapGesture'
        }
    },

    onTapGesture: function (e) {
        var me = this,
            item = me.getItemForEvent(e);

        if (item) {
            me.getChart().fireEvent('itemselect', item);
        }
    }
});
