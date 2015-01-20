Ext.define('SCE.store.MarketTimings', {
	extend: 'Ext.data.Store',
	alias: 'store.markettimings',
	config: {
		storeId: 'MarketTimings',
		fields: ['market', 'opening', 'closing'],
		data: [
			{ market: 'India', opening: '09:00AM', closing: '05:00PM', data: 12},
			{ market: 'Sydney', opening: '03:00AM', closing: '11:00AM', data: 4},
			{ market: 'Singapore', opening: '06:00AM', closing: '02:00PM', data: 24},
			{ market: 'USA', opening: '11:00PM', closing: '05:00AM', data: 8},
			{ market: 'Malaysia', opening: '06:00AM', closing: '02:00PM', data: 12}
		]
	}
});