Ext.define('SCE.chart.MarketClock', {

	extend: 'Ext.chart.PolarChart',
	xtype: 'marketclock',

	constructor: function(config) {

		config.sprites = config.sprites || [];

		config.sprites.push({
			type: 'image',
			src: 'resources/images/Clock_Face_2_by_AGF81.jpg',
			width : 700,
			height : 700,
			x : 10,
			y : 10
		});

		this.callParent(arguments);
	}
	
});