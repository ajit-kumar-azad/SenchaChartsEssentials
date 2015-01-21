Ext.define('SCE.sprite.PeriodicTable', {
    alias: 'sprite.ptSeries',
    extend: 'Ext.draw.sprite.Rect',

    render: function (surface, ctx, clip, rect) {
        var me = this,
            attr = me.attr;

        // Draw the rectangle
        me.callParent([surface, ctx, clip, rect]);

        // Draw the labels
        me.placeLabels(surface, ctx, clip, rect, attr);

    },

    placeLabels: function(surface, ctx, clip, rect, attr) {
    	surface.add({
    		type: 'text',
    		x: attr.x + 5,
    		y: attr.y + 15,
    		text: attr.z,
    		fontSize: 10,
    		fillStyle: 'white'
    	});

    	surface.add({
    		type: 'text',
    		x: attr.x + 25,
    		y: attr.y + 35,
    		text: attr.symbol,
    		textAlign: 'center',
    		fontSize: 15,
    		fillStyle: 'white'
    	});
    }
});