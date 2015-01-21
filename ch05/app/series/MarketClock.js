Ext.define('SCE.series.MarketClock', {

	extend: 'Ext.chart.series.Polar',

	requires: ['SCE.sprite.MarketClock'],

	type: 'marketclock',
    alias: 'series.marketclock',
    seriesType: 'marketclock',
	
    getSprites: function () {
        var me = this,
            chart = me.getChart(),
            store = me.getStore();
        if (!chart || !store) {
            return [];
        }


        me.getColors();
        me.getSubStyle();
        var items = store.getData().items,
            length = items.length,
            animation = me.getAnimation() || chart && chart.getAnimation(),
            sprites = me.sprites, sprite,
            spriteIndex = 0, rendererData,
            i, spriteCreated = false,
            label = me.getLabel(),
            labelTpl = label.getTemplate();

        for (i = 0; i < length; i++) {
        	// console.log('Iter: ' + i);
            sprite = sprites[i];
            if (!sprite) {
                sprite = me.createSprite();

                
                sprite.setAttributes(me.getStyleByIndex(i));
                // sprite.rendererData = rendererData;
                // sprite.rendererIndex = spriteIndex++;
                spriteCreated = true;
            }
            sprite.fx.setConfig(animation);
        }
        if (spriteCreated) {
            me.doUpdateStyles();
        }

        return me.sprites;
    },

    getDefaultSpriteConfig: function() {
        return {
            type: this.seriesType,
            centerX: ,
            centerY: 
        };
    }
});