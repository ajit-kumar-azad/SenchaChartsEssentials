Ext.define('SCE.store.LocalMarketTimings', {
	extend: 'Ext.data.Store',
	alias: 'store.localmarkettimings',
	config: {
		storeId: 'LocalMarketTimings',
		fields: ['market', 'opening', 'closing'],
		data: [
			{ market: 'BSE', opening: '09:00AM', closing: '12:00PM'},
			{ market: 'NSE', opening: '09:30AM', closing: '12:00AM'},
			{ market: 'MCX', opening: '06:00AM', closing: '10:00AM'},
			{ market: 'MCX Commodity', opening: '05:00AM', closing: '11:00AM'},
			{ market: 'MCX Currency', opening: '01:00AM', closing: '10:00AM'}
		]
	}
});