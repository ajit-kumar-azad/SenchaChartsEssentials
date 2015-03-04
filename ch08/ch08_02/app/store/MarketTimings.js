Ext.define('SCE.store.MarketTimings', {
	extend: 'Ext.data.Store',
	alias: 'store.markettimings',
	config: {
		storeId: 'MarketTimings',
		fields: ['market', 'opening', 'closing'],
		data: [
			{ market: 'India', opening: '09:00AM', closing: '12:00PM'},
			{ market: 'Sydney', opening: '03:00AM', closing: '11:00AM'},
			{ market: 'Singapore', opening: '06:00AM', closing: '09:00AM'},
			{ market: 'USA', opening: '05:00AM', closing: '11:00AM'},
			{ market: 'Malaysia', opening: '01:00AM', closing: '10:00AM'}
		]
	}
});