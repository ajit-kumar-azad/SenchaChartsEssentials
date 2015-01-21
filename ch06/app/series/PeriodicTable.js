Ext.define('SCE.series.PeriodicTable', {

	alias: 'series.periodictable',
	extend: 'Ext.chart.series.Series',

	requires: ['SCE.sprite.PeriodicTable'],

	type: 'periodictable',

	seriesType: 'ptSeries',

	getSprites: function() {
		var me = this,
            store = me.getStore(),
            i, j, ln, ln1,
            colors = ['#333', 'green', 'blue'];

        // The store must be initialized
        if (!store) {
            return [];
        }

        // Return cached sprites
        var chart = me.getChart(),
            animation = me.getAnimation() || chart && chart.getAnimation(),
            sprites = me.sprites;

        if (sprites && sprites.length) {
            sprites[0].fx.setConfig(animation);
            return sprites;
        }

        // Create sprites
        var item = null, z = -1, subItems = [];
        var items = store.getRange();

        for (i = 0, ln = items.length; i < ln; i++) {
        	item = items[i];

        	var color = colors[0];

        	z = item.get('z');

            //handle 57-71 and 89-103 differently
            if (item.get('items')) {
            	subItems.push(item.get('items'));

            	if (z === '57-71')
            		color = colors[1];
            	else
            		color = colors[2];
            }

            attr = {
                fillStyle: color,
                strokeOpacity: 0,
                x: item.get('column') * 55,
                y: (item.get('row') - 1) * 55,
                z: z,
                mass: item.get('mass'),
                name: item.get('name'),
                symbol: item.get('symbol')
            };
            sprite = me.createSprite();
            sprite.setAttributes(attr, true);
        }

        for (i = 0, ln = subItems.length; i < ln; i++) {
        	for (j = 0, ln1 = subItems[i].length; j < ln1; j++) {
	        	item = subItems[i][j];

	        	z = item['z'];
	            attr = {
	                fillStyle: colors[i+1],
	                strokeOpacity: 0,
	                x: (item['column'] + 3) * 55,
	                y: (item['row']*(8 + i)) * 55,
	                z: z,
	                mass: item['mass'],
	                name: item['name'],
	                symbol: item['symbol']
	            };
	            sprite = me.createSprite();
	            sprite.setAttributes(attr, true);
        	}
        }

        return sprites;
	},

	getDefaultSpriteConfig: function() {
		return {
            type: this.seriesType,
            width: 50,
            height: 50
        };
	}

});