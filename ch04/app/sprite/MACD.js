/**
 * @class SCE.sprite.MACD
 * @extends Ext.chart.series.sprite.Line
 *
 * MACD series sprite. This draws the dashed line at zero level
 */
Ext.define('SCE.sprite.MACD', {
    alias: 'sprite.macd',
    extend: 'Ext.chart.series.sprite.Line',

    /**
    * @private Override {@link Ext.chart.series.sprite.Line#renderAggregates}
    */
    renderAggregates: function (aggregates, start, end, surface, ctx, clip, rect) {
        this.callParent(arguments);

        var me = this,
            attr = me.attr,
            matrix = attr.matrix,
            xx = matrix.getXX(),
            yy = matrix.getYY(),
            dx = matrix.getDX(),
            dy = matrix.getDY(),
            list = this.list || (this.list = []),
            i,
            minXs = aggregates.minX,
            maxXs = aggregates.maxX,
            minYs = aggregates.minY,
            maxYs = aggregates.maxY,
            idx = aggregates.startIdx;

        list.length = 0;
        for (i = start; i < end; i++) {
            var minX = minXs[i],
                maxX = maxXs[i],
                minY = minYs[i],
                maxY = maxYs[i];

            if (minX < maxX) {
                list.push(minX * xx + dx, minY * yy + dy, idx[i]);
                list.push(maxX * xx + dx, maxY * yy + dy, idx[i]);
            } else if (minX > maxX) {
                list.push(maxX * xx + dx, maxY * yy + dy, idx[i]);
                list.push(minX * xx + dx, minY * yy + dy, idx[i]);
            } else {
                list.push(maxX * xx + dx, maxY * yy + dy, idx[i]);
            }
        }

        var pixelAdjust = attr.lineWidth * surface.devicePixelRatio / 2;

        pixelAdjust -= Math.floor(pixelAdjust);

        var zeroLevel = Math.round(0 * yy + dy) - pixelAdjust;
        me.drawYLine(ctx, rect[2], zeroLevel, true);
    },

    /**
     * @private
     * Draws a line parallel to X-axis
     * @param ctx SVG or Canvas context
     * @param x length of the line
     * @param y ordinate where the line needs to be drawn
     * @return 
     *
     */
    drawYLine: function(ctx, x, y, dashed) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(x, y);
        ctx.closePath();

        var linedash;
        if (dashed) {
            linedash = ctx.getLineDash();
            ctx.setLineDash([3]);
        }
        ctx.stroke();

        //reset the dash style
        if (dashed) {
            ctx.setLineDash(linedash);
        }
    }
});