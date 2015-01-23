Ext.define('SCE.chart.MarketClock', {

	extend: 'Ext.chart.PolarChart',
	xtype: 'marketclock',

	constructor: function(config) {

		config.background = {
			type: 'image',
			src: 'resources/images/Clock.jpg'
		};

		this.callParent(arguments);
	}
	
});