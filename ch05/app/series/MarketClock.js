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
                    startRho: 30*i + 50,
                    endRho: 30*i + 80
                };

                sprite.setAttributes(attr, true);
            }
        }

        return me.sprites;
    },

    getDefaultSpriteConfig: function() {
        return {
            type: this.seriesType,
            centerX: 340,
            centerY: 340
        };
    }
});