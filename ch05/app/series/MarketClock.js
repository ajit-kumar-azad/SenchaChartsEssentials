Ext.define('SCE.series.MarketClock', {

	extend: 'Ext.chart.series.Polar',

	requires: ['SCE.sprite.MarketClock'],

	type: 'marketclock',
    alias: 'series.marketclock',
    seriesType: 'marketclock',
	
    getSprites: function () {
        var me = this,
            store = me.getStore();
        if (!store) {
            return [];
        }


        var items = store.getData().items,
            length = items.length,
            sprites = me.sprites, sprite,
            i;

        var openingDt, closingDt;
        var anglePerHr = (Math.PI*2)/12;
        var anglePerMin = (Math.PI*2)/60;

        for (i = 0; i < length; i++) {
            sprite = sprites[i];
            if (!sprite) {
                sprite = me.createSprite();

                //calculate sector startAngle and endAngle based
                //on the opening and closing timings
                openingDt =  Ext.Date.parse(items[i].get('opening'), 'h:iA');
                closingDt =  Ext.Date.parse(items[i].get('closing'), 'h:iA');

                var openingHr = Ext.Date.format(openingDt, 'G') * 1;
                var openingMin = Ext.Date.format(openingDt, 'i') * 1;
                var closingHr = Ext.Date.format(closingDt, 'G') * 1;
                var closingMin = Ext.Date.format(closingDt, 'i') * 1;

                var startAngle = anglePerHr*openingHr + anglePerMin*openingMin - (Math.PI/2);
                var endAngle = anglePerHr*closingHr + anglePerMin*closingMin - (Math.PI/2);

                var attr = {
                    text: items[i].get('market'),
                    startAngle: startAngle,
                    endAngle: endAngle,
                    startRho: 0,
                    endRho: 0
                };

                sprite.setAttributes(attr, true);
            }
        }

        return me.sprites;
    },

    getDefaultSpriteConfig: function() {

        return {
            type: this.seriesType,
            centerX: 0,
            centerY: 0
        };
    },

    provideLegendInfo: function (target) {
        var me = this,
            store = me.getStore();
        if (store) {
            var items = store.getData().items,
                i, style;

            for (i = 0; i < items.length; i++) {
                style = me.getStyleByIndex(i);
                target.push({
                    name: items[i].get('market'),
                    mark: style.fillStyle || 'black',
                    disabled: false,
                    series: me.getId(),
                    index: i
                });
            }
        }
    },

    setHiddenByIndex: function (index, value) {
        var sprites = this.sprites;

        if (sprites) {
            sprites[index].setAttributes({hidden: value}, true);
        }
    },

    updateCenter: function (center) {
        this.setStyle({
            centerX: center[0] + this.getOffsetX(),
            centerY: center[1] + this.getOffsetY()
        });
        this.doUpdateStyles();
    },

    updateRadius: function (radius) {
        var offsetFromCenter = 30;
        var sprites = this.sprites;
        var clockEdgeWidth = this.getChart().getWidth()*0.18;

        var sectorWidth = (radius - clockEdgeWidth - offsetFromCenter)/sprites.length;

        for (var i = 0; i < sprites.length; i++) {
            sprites[i].setAttributes({
               startRho: sectorWidth*i + offsetFromCenter,
               endRho:  sectorWidth*i + (offsetFromCenter + sectorWidth)
            }, true);
        }
    },

    processData: function() {
        console.log('processData', arguments);

        this.redraw();
    }
});