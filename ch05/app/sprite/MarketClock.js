Ext.define('SCE.sprite.MarketClock', {
    alias: 'sprite.marketclock',
    extend: 'Ext.draw.sprite.Sector',

    render: function (surface, ctx, clip, rect) {
        // var me = this,
        //     attr = me.attr,
        //     itemCfg = {},
        //     changes;

        // if (attr.renderer) {
        //     itemCfg = {
        //         type: 'sector',
        //         text: attr.text,
        //         centerX: attr.centerX,
        //         centerY: attr.centerY,
        //         margin: attr.margin,
        //         startAngle: Math.min(attr.startAngle, attr.endAngle),
        //         endAngle: Math.max(attr.startAngle, attr.endAngle),
        //         startRho: Math.min(attr.startRho, attr.endRho),
        //         endRho: Math.max(attr.startRho, attr.endRho)
        //     };
        //     changes = attr.renderer.call(me, me, itemCfg, me.rendererData, me.rendererIndex);
        //     me.setAttributes(changes);
        //     me.useAttributes(ctx, clip);
        // }

        // // Draw the sector
        // me.callParent([surface, ctx, clip, rect]);

        // Draw the labels
        // if (attr.label && me.getBoundMarker('labels')) {
        //     me.placeLabel();
        // }
    }
});