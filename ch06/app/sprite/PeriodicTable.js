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

        var zScale = 0.2, symScale = 0.3, nameScale = 0.18;

    	surface.add({
    		type: 'text',
    		x: attr.x + 5,
    		y: attr.y + attr.width * zScale,
    		text: attr.z,
    		fontSize: attr.width * zScale,
    		fillStyle: 'white'
    	});

    	surface.add({
    		type: 'text',
    		x: attr.x + 25,
    		y: attr.y + attr.width * (zScale + symScale),
    		text: attr.symbol,
    		textAlign: 'center',
    		fontSize: attr.width * symScale,
    		fillStyle: 'white'
    	});

        surface.add({
            type: 'text',
            x: attr.x + 5,
            y: attr.y + attr.width*(1 - nameScale),
            text: attr.name,
            fontSize: attr.width * nameScale,
            fillStyle: 'white'
        });

    }
});