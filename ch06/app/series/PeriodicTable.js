Ext.define('SCE.series.PeriodicTable', {

	alias: 'series.periodictable',
	extend: 'Ext.chart.series.Series',

	requires: ['SCE.sprite.PeriodicTable'],

	type: 'periodictable',

	seriesType: 'ptSeries',

    config: {
        /**
         * size of each element sprite in pixels
         */
        elSize: 50,
        /**
         * gap between two elements in pixels
         */
        gutter: 5,
        /**
         * Colors to be used for the element groups
         */
        groupColors: {
            'Other Non-metals': '#C3C3C3',
            'Alkali Metals': '#FE2E9A',
            'Alkali-Earth Metals': '#D1EF75',
            'Transition Metals': '#D7DF01',
            'Lanthanides': '#FFAE79',
            'Actinides': '#F89195',
            'Poor Metals': '#6CD3FE',
            'Semi Metals': '#CD8CCC',
            'Non-Metals': '#8584EA',
            'Nobel Gases': '#FFC90D'
        }
    },

	getSprites: function() {
		var me = this,
            store = me.getStore(),
            chart = me.getChart(),
            i, j, ln, ln1;

        var size = Math.max(chart.height, chart.width);
        var elSize = me.getElSize();

        if (size) {
            elSize = (size - (17*me.getGutter()))/18;
            me.setElSize(elSize);
        }

        var rectWidth = elSize + me.getGutter();

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

        	z = item.get('z');

            //handle 57-71 and 89-103 differently
            if (item.get('items')) {
            	subItems.push(item.get('items'));
            }

            attr = {
                strokeOpacity: 0,
                x: item.get('column') * rectWidth,
                y: (item.get('row') - 1) * rectWidth,
                z: z,
                mass: item.get('mass'),
                name: item.get('name'),
                symbol: item.get('symbol'),
                group: item.get('group')
            };
            sprite = me.createSprite();
            sprite.setAttributes(attr, true);
        }

        for (i = 0, ln = subItems.length; i < ln; i++) {
        	for (j = 0, ln1 = subItems[i].length; j < ln1; j++) {
	        	item = subItems[i][j];

	        	z = item['z'];
	            attr = {
	                strokeOpacity: 0,
	                x: (item['column'] + 3) * rectWidth,
	                y: (item['row']*(8 + i)) * rectWidth,
	                z: z,
	                mass: item['mass'],
	                name: item['name'],
	                symbol: item['symbol'],
                    group: item['group']
	            };
	            sprite = me.createSprite();
	            sprite.setAttributes(attr, true);
        	}
        }

        this.doUpdateStyles();

        return sprites;
	},

	getDefaultSpriteConfig: function() {
		return {
            type: this.seriesType,
            width: this.getElSize(),
            height: this.getElSize()
        };
	},

    applyStore: function(newStore, oldStore) {

        if (newStore) {
            var me = this;

            if (me.sprites) {
                Ext.destroy(me.sprites);
                me.sprites = [];
            }

            if (oldStore) {
                oldStore.setData(newStore.getData().items);
            }

            return oldStore;
        }
    }, 

    getStyleByIndex: function (idx) {
        var me = this,
            style = {fillStyle:  'black'};

        var sprite = me.sprites[idx];

        if (sprite) {
            style = {
                fillStyle: me.getGroupColors()[sprite.attr.group]
            }
        }
        
        return style;
    }
});