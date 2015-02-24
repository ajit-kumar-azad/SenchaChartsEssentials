Ext.define('SCE.sprite.MarketClock', {
    alias: 'sprite.marketclock',
    extend: 'Ext.draw.sprite.Sector',

    render: function (surface, ctx, clip, rect) {
        var me = this,
            attr = me.attr,
            itemCfg = {},
            changes;

        var startAngle = Math.min(attr.startAngle, attr.endAngle);
        var endAngle = Math.max(attr.startAngle, attr.endAngle);
        var startRho = Math.min(attr.startRho, attr.endRho);
        var endRho = Math.max(attr.startRho, attr.endRho);

        if (attr.renderer) {
            itemCfg = {
                type: 'sector',
                centerX: attr.centerX,
                centerY: attr.centerY,
                margin: attr.margin,
                startAngle: startAngle,
                endAngle: endAngle,
                startRho: startRho,
                endRho: endRho
            };
            changes = attr.renderer.call(me, me, itemCfg, me.rendererData, me.rendererIndex);
            me.setAttributes(changes);
            me.useAttributes(ctx, clip);
        }

        // Draw the sector
        me.callParent([surface, ctx, clip, rect]);

        this.drawTextAlongArc(ctx, attr.text, attr.centerX, attr.centerY, startRho + 10, startAngle, endAngle - startAngle);
    },

    drawTextAlongArc: function(ctx, text,x,y,radius,startAngle, sectorSize){
      var radianPerLetter = Math.PI/30;
       ctx.save();
       ctx.translate(x,y);
       ctx.rotate(startAngle + ((sectorSize - (radianPerLetter*text.length))/2));

       for(var i=0;i<text.length;i++){
          ctx.save();
          ctx.translate(radius, 0);

            ctx.translate(10, -10);

            ctx.rotate(1.4)
            ctx.translate(-10, 10);          
            ctx.fillStyle = 'black';

          ctx.fillText(text[i],0,0);
          ctx.restore();
          ctx.rotate(radianPerLetter);
       }
       ctx.restore();
    }
});